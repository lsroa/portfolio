<template lang="pug">
    #app
        svg(viewBox="0 0 400 400",style="fill:var(--yellow);right:0;position:absolute;top:0;z-index:-5")
            ellipse(cx="190",cy="100",rx="80",ry="80")
            rect(x="320",y="130",width="25",height="25")
            rect(x="0",y="230",width="80%",height="30%")
        .first
            .menu
                for sec in ['🏢','contact','services','about']
                    .menu-item=sec
            .title 
                div(style="font-size:18px;margin-right:5px") 👓  designer and developer 
                div(style="font-size:122px;font-family: 'Abril Fatface',serif;") One man army
                div(style="font-size:48px") where design & development meet
                .btn-container
                    button Contact
                    p 
                    button(style="background-color:#eee") View Reel
                .social
                    for x in [1,2,3,4]
                        .social-item 💩  
                    
        .second(data-aos="fade-up")
                strong(style="font-family: 'Abril Fatface';font-size:48px") What do I solve
                ol.service
                    li
                        strong  Digital experiences 
                        | for data viz creating an impact on your topic or field
                    li
                        strong Android and IOS
                        |  apps for your business logic
                    li
                        strong Video Ads
                        |  for your digital campaign
                    li
                        strong Web Apps
                        |  for your business or service
    
        strong(style="font-size:144;font-family: 'Abril Fatface',serif;line-height:84%;text-align:rigth;grid-column:4") 
            | de
            | sig 
            | ner             
        div("@mousemove"="coordinates",style="width:100%;margin:auto;grid-column:1/-1")            
            .cat
                strong.cat-bg(data-lax-preset="linger") 3d/General
                .cat-content
                    p.subt   
                        | this.
                        strong 3d General
                    .gallery-container
                        .d31(data-aos="fade-up",style="")
                        .d32(data-aos="fade-up")
                        .d3d(data-aos="fade-up",style="grid-row:span 2;grid-column:3")
            .cat
                strong.cat-bg(data-lax-preset="linger") Illustration
                .cat-content
                    p.subt   
                        | this.
                        strong Illustration
                    .gallery-container
                        .il2(data-aos="fade-up",stye="grid-column:1;")
                        .il1(data-aos="fade-up",style="grid-row: span 3")
                        .il3(data-aos="fade-up",style="grid-column:3;")     
            .cat
                strong#Animation.cat-bg(data-lax-preset="linger") Animation
                .cat-content
                    p.subt   
                        | this.
                        strong Animation
                    .gallery-container
                        .an2(data-aos="fade-up",stye="grid-row:span 3")
                        .an1(data-aos="fade-up",style="grid-column:3;grid-row:span 2;") 
            .cat
                strong#Animation.cat-bg(data-lax-preset="linger") Backend Development
                .cat-content
                    p.subt   
                        | this.
                        strong Backend and Development
                    .gallery-container
                        .an2(data-aos="fade-up",stye="grid-column:1;")
                        .an1(data-aos="fade-up",style="grid-column:3;grid-row:span 2;")                                 

            .footer
                .credits 
                    strong(style="font-size:22px;color:#ccc") Credits
                    a(href="https://threejs.org")
                        p Three.js 
                    a(href="https://vuejs.org")
                        p Vue 
                    a(href="https://blender.org")
                        p Blender
                Canvas(":x"="x",":y"="y")
                Contact
</template>

<style>
.second{
    display:grid;
    grid-column-start:2;
    height:100vh;
    width:100%;
    justify-items:center;
    grid-gap:10px;
    align-items:center;    
    align-content:center;
    justify-content:center;

}
.service{
    grid-template-columns: repeat(2,1fr);    
    display:grid;
    grid-gap:12px;
    padding:10px;
}

ol{
    list-style: none;   
    counter-reset: my-counter;

}
ol li{
    counter-increment: my-counter;
    margin-left:30px;
}


ol li::before{
    content: "0" counter(my-counter);
    border: 1px solid #272727;
    border-radius:50%;
    padding:5px;
    position:absolute;
    transform: translate(-40px);
    
}

a{
    text-decoration: none;
    color:inherit;
}

.an1{
   background: url('./assets/Animation/1.gif') center/cover ;

}
.an2{
   background: url('./assets/Animation/2.gif') center/cover ;

}
.d31{
   background: url('./assets/3d.General/1.png') center/cover ;
}

.d32{
    background: url('./assets/3d.General/2.jpg') center/cover ;
 


}
.d3d{
    background: url('./assets/3d.General/3.jpg') center/cover ;
}
.il1{
   background: url('./assets/Illustration/1.jpg') center/cover ;
   
}
.il2{
   background: url('./assets/Illustration/2.jpeg') center/cover ;
}
.il3{
   background: url('./assets/Illustration/3.jpg') center/cover ;
}

.subt:before{
    content:"";
    width:90px;
    height:40px;
    transform: translate(-10px);
    z-index:-3;
    position:absolute;
    background-color:var(--yellow);
}
.subt{
    font-family: sans-serif;
    font-style: italic;
    color: #444;
    font-size:22;
}
.subt > strong{
    color:#272727;
    font-size:34;
    font-style:normal;
    font-family: serif;
}

.gallery-container{
    display:grid;
    grid-gap:15px;
    width:100%;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows:repeat(3,33vh);
}



.cat{
    display: grid;
    grid-column: 1/-1;
    position: relative;
    align-content:center;
    overflow: hidden;    

}

:root{
    background-color:#eee;
}

.gallery-container > *{
    border-radius:4px;
    border:  2px solid #ebebeb;    

}

.gallery-container > *:before{
    border: 12px #fafafa solid;
    content:"";
    background:none;
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    pointer-events: none;
}

.cat-content{
    display:grid;
    width:80%;
    justify-self:center;
}

</style>

<script>
import lax from "lax.js";
import AOS from "aos";
import "aos/dist/aos.css";


import Contact from "./Contact.vue";
import Canvas from "./Canvas.vue";

export default {

    data(){
        return{
            x:0,
            y:0
        }
    },
    components:{
        Contact,
        Canvas
    },
    mounted(){
        const elements = document.getElementsByClassName("cat-bg")

        for(let i = 0; i < elements.length;i++){
            lax.addElement(elements[i])
        }
    },
    created(){
        AOS.init();
        lax.setup();
        document.addEventListener('scroll', function(x) {
            lax.update(window.scrollY)
        }, false);
    },   
    methods:{

        coordinates(e){
           this.x = (e.clientX - window.innerWidth/2)/window.innerWidth;
           this.y = (e.clientY - window.innerHeight/2)/window.innerHeight;
        }
    }
}
</script>