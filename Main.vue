<template lang="pug">
    #app
        
        .first
            .menu
                .menu-item LSR
                .menu-item Contact
                .menu-item services
                .menu-item about
            .title 
                div 👓  designer and developer 
                div 
                    span One 
                    span(style="color:var(--red)") man 
                    | army
                div where design & development meet
                .btn-container
                    button("@click"="toggle",style="border:2px #0c0c0c solid;background-color:#eee") Contact
                    p 
                    button(style="background-color:#0c0c0c;color:#eee") View Reel
                .social
                    a.social-item(href="https://github.com/lsroa") 
                        p G
                    a.social-item(href="https://twitter.com/granroa") 
                        p T  
                    a.social-item(href="https://behance.net/roa") 
                        p B
                    a.social-item(href="https://dribbble.com/lsroa")
                        p D

        .second(data-aos="fade-up")
                strong(style="font-family: 'Abril Fatface';font-size:48px") What do 
                    span(style="color:var(--red)") I solve
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
    
        div.designer 
            | de
            | sig 
            | ner             
        div("@mousemove"="coordinates",style="width:100%;margin:auto;grid-column:1/-1")            
            .cat
                strong.cat-bg 3d Illustration Development UI/UX Animation
                .cat-content
                    p.subt 
                        | this.
                        strong 3d General
                    .gallery-container
                        .d31(data-aos="fade-up",data-aos-delay="160")
                        .d32(data-aos="fade-up",data-aos-delay="100")
                        .an2(data-aos="fade-up",data-aos-delay="120")
                        .d3d(data-aos="fade-up",data-aos-delay="100")
                        .il4(data-aos="fade-up",data-aos-delay="200")
                        .il2(data-aos="fade-up",data-aos-delay="50")
                        .an1(data-aos="fade-up") 
                        .il1(data-aos="fade-up",data-aos-delay="100")
                        .il3(data-aos="fade-up",data-aos-delay="150")
                        .il5(data-aos="fade-up",data-aos-delay="250") 
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
.menu-item > img{
    width:10vh;
}
.bgd{
    position:absolute;
    top:0;
    right:0;
    height:100vh;
    z-index:-5;
}
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
.red-fill{
    fill: var(--red); 
}
.yellow-fill{
    fill: var(--yellow);
}
.service{
    grid-template-columns: repeat(2,1fr);    
    display:grid;
    grid-gap:12px;
    padding:10px;
}
.designer{
    font-size:144;
    font-family: 'Abril Fatface',serif;
    line-height:84%;
    grid-column:4/auto;
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
   grid-row:span 2;

}
.an2{
   background: url('./assets/Animation/2.gif') center/cover ;
   grid-column: span 2;
   grid-row: span 2;

}
.d31{
   background: url('./assets/3d.General/1.png') center/cover ;
}

.d32{
    background: url('./assets/3d.General/2.jpg') center/cover ;
}
.d3d{
    background: url('./assets/3d.General/3.jpg') center/contain ;
    grid-row:span 2;
}
.il1{
   background: url('./assets/Illustration/1.jpg') center/cover ;
   grid-row:span 3;
}
.il2{
   background: url('./assets/Illustration/2.jpeg') center/cover ;
}
.il3{
   background: url('./assets/Illustration/3.jpg') center/cover ;
}
.il4{
   background: url('./assets/Illustration/4.jpg') center/contain ;
}
.il5{
   background: url('./assets/Illustration/5.jpeg') center/cover ;
   grid-column:span 2; 
   
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
    grid-gap:80px;
    padding-bottom:30px;
    width:100%;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows:repeat(7,33vh);
}



.cat{
    display: grid;
    grid-column: 1/-1;
    position: relative;
    align-content:center;
    overflow: hidden;    

}



.gallery-container > *{
    /* border-radius:4px;
    border:  2px solid #ebebeb;     */
    box-shadow: 0px 10px 20px #CCC;
    border-radius: 5px;

}

/* .gallery-container > *:before{
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
} */

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
        toggle(e){
            this.$parent.show =  !this.$parent.show
        },
        coordinates(e){
           this.x = (e.clientX - window.innerWidth/2)/window.innerWidth;
           this.y = (e.clientY - window.innerHeight/2)/window.innerHeight;
        }
    }
}
</script>