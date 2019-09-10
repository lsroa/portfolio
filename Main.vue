<template lang="pug">
    #app
        .first
            .menu
                for sec in ['🏢','contact','services','about']
                    .menu-item=sec
            .title 
                div(style="font-size:18px;margin-right:5px") 👓  designer and developer 
                strong(style="font-size:122px;font-family:serif") One man army
                div(style="font-size:48px") where design & development meet
                .btn-container
                    button Contact
                    p 
                    button View Reel
                .social
                    for x in [1,2,3,4]
                        .social-item 💩  
                    
        .second(data-aos="fade-up")
            for service in ['ux/ui','animation','frontend','backend','Logo Design','Branding']
                .service
                    strong=service
                    p loremp ipsum 👴 
        strong(style="font-size:144;font-family:serif;line-height:84%;text-align:rigth;grid-column:4") 
            | de
            | sig 
            | ner             
        div("@mousemove"="coordinates",style="width:100%;margin:auto;grid-column:1/-1")            
            .cat
                strong.cat-bg(data-lax-preset="linger") 3d/General
                .cat-content
                    strong this.3d/General
                    .gallery-container
                        div(data-aos="fade-up",style="grid-row: span 2")
                        div(data-aos="fade-up")
                        div(data-aos="fade-up",style="grid-row:2;grid-column:3")

            .footer
                .credits 
                    strong(style="font-size:22px;color:#ccc") Credits
                    p Three.js 
                    p Vue 
                    p Blender
                Canvas(":x"="x",":y"="y")
                Contact
</template>

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