import * as THREE from "three";
import {
  EffectPass,
  BlendFunction,
  RenderPass,
  EffectComposer,
  SSAOEffect,
  NormalPass,
  SMAAEffect,
  SMAAPreset
} from "postprocessing";

import GLTFLoader from "three-gltf-loader";


let scene, camera, renderer,  aoPass, ssaoEffect, normalPass, loader, renderPass, composer, clock, mixerUpdateDelta;
let mixers = [];

export default function init(vue){
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
      42,
      (window.innerWidth/2)/window.innerHeight,
      0.1,
      800
    );
  
    renderer = new THREE.WebGLRenderer({ 
      antialias: false,
      alpha:true,
      shadowMap:true,
      logarithmicDepthBuffer: true,
    });
    renderer.setClearColor( 0x000000, 0 );
    renderer.setPixelRatio(window.devicePixelRatio * 1.5);
    renderer.setSize(window.innerWidth/2, window.innerHeight);
  
    // Add canvas to the dom element
    const canvas = document.getElementById("canvas")
  
    canvas.appendChild(renderer.domElement);
    
    // Load GLTF model
    loader = new GLTFLoader();
    loader.load("./Designer3.0.glb", gltf => {
      for(let i =0 ; i< gltf.animations.length;i++){
        loadAnimation(gltf.scene,gltf.animations[i])
      }
      scene.add(gltf.scene);
    },e=>{    
      if(e.total === e.loaded) {
        
        vue.loading = false
      }   
    },e=>{
      console.log(e)
    });
  
    
  
  
    clock = new THREE.Clock();

    camera.position.set(20, 5, -20);
    camera.lookAt(0, 0, 0);
  
    // Compositing
    
      // Normal Pass
    normalPass = new NormalPass(scene,camera,{
      resolutionScale: 1.5
    });
  
      // AO Effect
    ssaoEffect = new SSAOEffect(camera, normalPass.renderTarget.texture, {
      blendFunction: BlendFunction.MULTIPLY,
      samples: 19,
      rings: 6,
      distanceThreshold: 0.9,
      distanceFalloff: 0.9,
      rangeThreshold: 0.0015,
      rangeFalloff: 0.01,
      luminanceInfluence: 0.1,
      radius: 10,
      scale: 0.4,
      bias: 0.7
    });
  
    ssaoEffect.blendMode.opacity.value = 1.5;
    
    renderPass = new RenderPass(scene,camera);

  
    const areaImage = new Image();
    areaImage.src = SMAAEffect.areaImageDataURL;
  
    const searchImage = new Image();
    searchImage.src = SMAAEffect.searchImageDataURL;
  
    const aaEffect = new SMAAEffect(searchImage,areaImage,SMAAPreset.ULTRA);
  
  
    aoPass = new EffectPass(camera,ssaoEffect,aaEffect); 

    composer = new EffectComposer(renderer);

  
  
    composer.addPass(renderPass);
    composer.addPass(normalPass);
    composer.addPass(aoPass);
    aoPass.renderToScreen = true;

    window.addEventListener("scroll", e => {
      scene.children[3].rotation.y = window.scrollY * -0.001
      if (scene.children[3].rotation.y < -0.8){
          scene.children[3].rotation.y = -0.8
      }  
  
    });
  
    window.addEventListener("resize", onWindowResize, false);
  
    addLights();
    animate();
  };
  
  const loadAnimation = (model, animation) => {
    let currentMixer = new THREE.AnimationMixer(model);
    let clip = currentMixer.clipAction(animation);
    mixers.push(currentMixer);
    clip.play();
  };
  
  const addLights = () => {
    let hemiLight = new THREE.HemisphereLight(0xFFFFFF, null, 0.1);
    hemiLight.position.set(5, 50, 0);
    scene.add(hemiLight);
  
    let ambientLight = new THREE.AmbientLight(0xFFFFFF,2);
    ambientLight.position.set(0, 5, 0);
    scene.add(ambientLight);
  
    let dirLight = new THREE.DirectionalLight(0xFFFFFF, 0.1);
    dirLight.position.set(8, 30, -40);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048; // default
    dirLight.shadow.mapSize.height = 2048; // default
    dirLight.shadow.camera.near = 0.1; // default
    dirLight.shadow.camera.far = 1000; // default
    scene.add(dirLight);  
  };
  
  const animate = () => {
    requestAnimationFrame(animate);
    mixerUpdateDelta = clock.getDelta();
    for (let i = 0; i < mixers.length; i++) {
      mixers[i].update(mixerUpdateDelta);
    }
    composer.render(mixerUpdateDelta);
  };
  
  const onWindowResize = () => {
    camera.aspect = (window.innerWidth/2) / window.innerHeight;
    camera.updateProjectionMatrix();  
    renderer.setPixelRatio(window.devicePixelRatio * 1.5);
    renderer.setSize(window.innerWidth/2, window.innerHeight);
  };