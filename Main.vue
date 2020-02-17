<template lang="pug">
    #app
        
        .first
            .menu
                .menu-item 
                    img(src="./assets/lsr.svg",style="transform:scale(0.6)")
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
                    button("@click"="toggle",style="border:2px #0c0c0c solid;background-color:#eee") View Reel
                    p 
                    button(style="background-color:#0c0c0c;color:#eee") Contact
                .social
                    a.social-item(href="https://github.com/lsroa") 
                        p G
                    a.social-item(href="https://twitter.com/granroa") 
                        p T  
                    a.social-item(href="https://behance.net/roa") 
                        p B
                    a.social-item(href="https://dribbble.com/lsroa")
                        p D

        .second(data-aos="fade-up",data-aos-delay="220")
                strong(style="font-family: 'Abril Fatface';font-size:48px") What do 
                    span(style="color:var(--yellow)") I solve
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
                    li 
                        strong Visual identity
                        |  that shine every where 
                    li 
                        strong Product design
                        |  using Desing sprint for quick testing
    
        div.designer 
            | de
            | sig 
            | ner             
        div("@mousemove"="coordinates",style="width:100%;margin:auto;grid-column:1/-1")            
            .cat
                strong.cat-bg 3d Illustration Development UI/UX Animation
                .cat-content
                    p.subt 
                        | My.
                        strong STUFFF
                    .gallery-container
                        Item.an4(data-aos="fade-up",data-aos-delay="250",title="strong UI/UX & Full Stack Development")
                            img(src="./assets/Frontend/uiux.png",style="background:blue")
                            img(src="./assets/Frontend/uiux.png")


                            //- strong UI/UX & Full Stack Development
                            //- div Co-Founder 
                        Item.ui1(data-aos="fade-up",data-aos-delay="110")
                            img(src="./assets/Frontend/Home.jpg")
                            //- strong UX/UI 
                            //- div made for a Local restaurant
                          
                        Item.item1(data-aos="fade-up",data-aos-delay="250")
                            img(src="./assets/Illustration/5.jpeg")
                            //- strong UI/UX & Illustration
                            //- div Web page  designed and developed for a marketing agency    
                        //- .d31(data-aos="fade-up",data-aos-delay="160")
                        //-     video(src="./assets/horn.webm" autoplay loop)
                        //- .d32(data-aos="fade-up",data-aos-delay="100")
                        Item.d3d(data-aos="fade-up",data-aos-delay="100")
                            img(src="./assets/3d.General/3.jpg")
                            //- strong Backend
                            //- div Web scrapper for news website
                        Item.il2(data-aos="fade-up",data-aos-delay="50")
                            img(src="./assets/Illustration/2.jpeg")
                            //- strong UI/UX & Illustration
                            //- div Web Agency
                        Item.an1(data-aos="fade-up",data-aos-delay="350") 
                            img(src="./assets/Frontend/shop.jpg")
                        .il1(data-aos="fade-up",data-aos-delay="100")
                        Item.il3(data-aos="fade-up")
                            img(src="./assets/Backend/cart.png",style="background-color:var(--yellow)") 
                            //- strong Cart implementation
                            //- div Redux + hooks & vue   
                        Item(data-aos="fade-up",data-aos-delay="250",style="grid-column:span 2")
                            .il6                           
                            //- strong UI/UX & Illustration
                            //- div Web page  designed and developed for a marketing agency
                        Item(data-aos="fade-up",data-aos-delay="100")
                            video(src="./dist/pcGuy.webm" autoplay loop)
                        Item.il4(data-aos="fade-up",data-aos-delay="250")
                            video(src="./assets/ghost.webm" autoplay loop)
                            

            .footer
                div(style="display:grid;grid-column:2;height:100%;align-content:end")
                    .credits 
                        strong(style="font-size:22px;color:#ccc") Lets build something !
                        a(href="https://threejs.org")
                            p Three.js 
                        a(href="https://vuejs.org")
                            p Vue 
                        a(href="https://blender.org")
                            p Blender
                    Canvas(":x"="x",":y"="y",":clickX"="clickX",":clickY"="clickY")
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
.yellow2-fill{
    fill: var(--yellow2);
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

.il3{
    justify-content:center;
    width:100%;
}
.il6{
    background: url("./assets/Illustration/5.jpeg") center/cover;
    height:200px;
    width:100%;
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
.an4{
    grid-column: span 2;
    grid-template-columns: repeat(2, 1fr);
}
.ui1{
    grid-column: 3;
    grid-row:1/span 2; 
}
.gallery-container> div{
    display:inline-grid;
    grid-gap:10px;
    grid-template-columns:1;
    align-content:start
}

.gallery-container> div > img{
    max-width:100%;
    max-height:100%;
}
.item1{
    grid-column:span 2;
    grid-row:3;
}
.item1 > img{
    width:100%;
}

.an1{
   grid-row:span 2;
   

}
.il4{
    grid-column: 3;
}

video{
    width:100%;
    height:100%;

}
.d31{
   grid-column:2;
   
}



.d32{
    background: url('./assets/3d.General/2.jpg') center/cover ;
    grid-column:3;
}
.d3d{
    grid-row:span 2;
    grid-column: 3;
    
}
.il1{
   background: url('./assets/Illustration/1.jpg') center/cover ;
   grid-row:span 3;
   grid-column:1;
}
.item1{
    grid-column: 1/span 2;
    grid-row:span 2;
}


.il4{
   /* background: url('./assets/Illustration/4.jpg') center/contain ; */
}
.il5{
   background: url('./assets/Illustration/5.jpeg') center/cover ;
   min-width:100%;
}

.subt::before{
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
    padding-bottom:120px;
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
import Item from "./Item.vue";

export default {

    data(){
        return{
            x:0,
            y:0,
            clickX:0,
            clickY:0,
        }
    },
    components:{
        Contact,
        Canvas,
        Item
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