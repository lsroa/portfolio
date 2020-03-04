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
import { RectAreaLight, PointLight, Vector3 } from "three";


let mesh, scene, camera, renderer, aoPass, ssaoEffect, normalPass, loader, renderPass, composer, clock, mixerUpdateDelta;
let mixers = [];


export default function init(vue) {
  scene = new THREE.Scene();
  document.scene = scene;
  camera = new THREE.PerspectiveCamera(
    10,
    (window.innerWidth / 2) / window.innerHeight,
    0.1,
    200
  );

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    shadowMap: true,
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(window.devicePixelRatio * 1.5);
  renderer.setSize(window.innerWidth / 2, window.innerHeight);

  // Add canvas to the dom element
  const canvas = document.getElementById("canvas")

  canvas.appendChild(renderer.domElement);

  // Load GLTF model
  loader = new GLTFLoader();
  loader.load("./Designer.9.7.glb", gltf => {
    for (let i = 0; i < gltf.animations.length; i++) {
      loadAnimation(gltf.scene, gltf.animations[i])
    }
    scene.add(gltf.scene);
    vue.loading = false;

    mesh = scene.children.reduce((a, b) => {
      return [...a, b.name]
    }, []).indexOf("Scene");

  }, null, e => {
    console.log(e)
  });




  clock = new THREE.Clock();

  camera.position.set(20 + 70, 1, -20 - 70);
  camera.lookAt(0, 0, 0);

  addLights();
  renderPass = new RenderPass(scene, camera);




  composer = new EffectComposer(renderer);



  composer.addPass(renderPass);
  renderPass.renderToScreen = true;
  // composer.addPass(normalPass);
  // composer.addPass(aoPass);
  // aoPass.renderToScreen = true;
  composer.render(scene, camera);


  // a = 0 ; b = 800; c = 185; d = 339;
  let ramp = (x, a, b, c, d) => {
    return (c + (x - a)) * ((c - d) / (a - b))
  }

  window.addEventListener("scroll", e => {
    scene.children[mesh].rotation.y = window.scrollY * -0.001
    scene.children[0].color.setRGB(Math.min(0.8, ramp(scrollY, 0, 600, 0, 1)), Math.max(0, -1 * ramp(scrollY, 900, 0, 0.92, 0)), Math.max(0, -1 * ramp(scrollY, 900, 0, 1, 0)));

    if (scene.children[mesh].rotation.y < -0.8) {
      scene.children[mesh].rotation.y = -0.8;
    }

  });

  window.addEventListener("resize", onWindowResize, false);


  animate();
};

const loadAnimation = (model, animation) => {
  let currentMixer = new THREE.AnimationMixer(model);
  let clip = currentMixer.clipAction(animation);
  mixers.push(currentMixer);
  clip.play();
};

const addLights = () => {

  let pointLight1 = new THREE.DirectionalLight(0x00E1FF, 1.2);
  pointLight1.lookAt(0, 0, 0);
  pointLight1.position.set(0, 0, 150);
  scene.add(pointLight1);

  let ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.85);
  ambientLight.position.set(0, 0, 0);
  scene.add(ambientLight);

  let pointLight2 = new THREE.PointLight(0xFFFFFF, 0)
  pointLight2.position.set(0, 3, -2);
  scene.add(pointLight2)


  let dirLight = new THREE.DirectionalLight(0xFFFFFF, 0.4);
  dirLight.position.set(8, 30, -10);
  dirLight.lookAt(0, 0, 0);
  scene.add(dirLight);


  let dirLight1 = new THREE.DirectionalLight(0xFFFFFF, 0.2);
  dirLight.position.set(8, 20, -100);
  dirLight1.lookAt(0, 0, 0);
  scene.add(dirLight1);

  // let helper1 = new THREE.SpotLightHelper(pointLight2, 1);
  // scene.add(helper1);
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
  camera.aspect = (window.innerWidth / 2) / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(window.devicePixelRatio * 1.5);
  renderer.setSize(window.innerWidth / 2, window.innerHeight);
};