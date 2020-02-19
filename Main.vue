<template lang="pug">
    #app
        .first
            .menu
                .menu-item 
                    img(src="./assets/lsr.svg",style="transform:scale(0.6)")
                .menu-item Contact
                .menu-item Services
                .menu-item About
            .title 
                div 👓  designer & developer 
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
                        <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                    a.social-item(href="https://twitter.com/granroa") 
                        p T  
                    a.social-item(href="https://behance.net/roa") 
                        p B
                    a.social-item(href="https://dribbble.com/lsroa")
                        p D

        .second(data-aos="fade-up",data-aos-delay="220")
                strong(style="font-family: 'Abril Fatface';font-size:48px") What do 
                    span(style="color:var(--yellow)") I solve
                div I am Madrid Spain based digital artist, a mix of developer and designer 
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
                        Item.item-1(data-aos="fade-up",data-aos-delay="250",title="strong UI/UX & Full Stack Development")
                            img(src="./assets/Frontend/ed.png")
                            img(src="./assets/Frontend/ed2.png")
                        Item.item-2(data-aos="fade-up",data-aos-delay="110")
                            img(src="./assets/Frontend/Home.jpg")
                        Item.item-3(data-aos="fade-up",data-aos-delay="250")
                            img(src="./assets/Illustration/5.jpeg")
                        Item.item-4(data-aos="fade-up",data-aos-delay="100")
                            img(src="./assets/3d.General/3.jpg")
                        Item.item-5(data-aos="fade-up",data-aos-delay="50")
                            img(src="./assets/Illustration/2.jpeg")
                        Item.item-6(data-aos="fade-up",data-aos-delay="350") 
                            img(src="./assets/Frontend/shop.jpg")
                        Item.item-7(data-aos="fade-up",data-aos-delay="100")
                        Item.item-8(data-aos="fade-up")
                            img(src="./assets/Backend/cart.png",style="background-color:var(--yellow)") 
                        Item.item-9(data-aos="fade-up",data-aos-delay="250")
                            img(src="./assets/3d.General/2.jpg")                           
                        Item.item-10(data-aos="fade-up",data-aos-delay="100")
                            video(src="./dist/pcGuy.webm" autoplay loop)
                        Item.item-11(data-aos="fade-up",data-aos-delay="250")
                            video(src="./assets/ghost.webm" autoplay loop)
                            

            .footer
                .foo-title
                    p(style="margin:0px;font-size: 42px") Lets build something cool !
                    p I am already following you
                .social-2 
                        a.social-item(href="https://github.com/lsroa") 
                            <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                        a.social-item(href="https://twitter.com/granroa") 
                            p T  
                        a.social-item(href="https://behance.net/roa") 
                            p B
                        a.social-item(href="https://dribbble.com/lsroa")
                            p D
                    
                Canvas(":x"="x",":y"="y",style="grid-row:3;grid-column:2;align-self:end")
                Contact
               
        
        

</template>













<style>
#app{
    position: absolute;

    z-index:0;
    display:grid;

    justify-items: center;
    align-items: center;

    grid-template-columns: 1fr repeat(2,3fr) 1fr;
    grid-template-rows: 100vh;

    margin: auto;
    left:0;
    right:0;
    width:100%;
}

.menu-item > img{
    width:10vh;
}

.foo-title{
    justify-self:center;
    grid-column:2/-2
}
.social-2{
    display:grid;
    grid-gap:35px;
    padding-right:35px;
    grid-column:1;
    justify-content:end;
}

.bgd{
    position:absolute;
    top:0;
    right:0;
    height:100vh;
    z-index:-5;
}
.first{
    display:grid;
    width: 100%;
    height: 90vh;
    justify-items: center;
    align-content:center;
    grid-gap:20px;
    grid-column-start: 2;

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

.footer{
    display:grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(3,25vh);
    background: #272727;
    grid-gap:10px;
    color: #8b8b8b;
    justify-content:center;
    align-items:center;
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

.item-8{
    justify-content:center;
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
.item-1{
    grid-column: span 2;
    align-content: center;
    grid-template-columns: repeat(2, 1fr);
}

.item-1>img{
    background: var(--yellow2);
}
.item-2{
    grid-column: 3;
    grid-row:1/span 2; 
}
.gallery-container> div{
    display:grid;
    grid-gap:10px;
    grid-template-columns:1;
    align-content:start;
}

.gallery-container> div > img{
    max-width:100%;
    max-height:100%;
}
.item-3{
    grid-column:span 2;
    grid-row:2/span 2;
}
.item-3 > img{
    width:100%;
}

.item-6{
   grid-row:span 2;
}
.item-11{
    grid-column: 3;
}

video{
    width:100%;
    height:100%;
    z-index:-1;

}

.item-4{
    grid-row:span 2;
    grid-column: 3;
    
}
.item-7{
   background: url('./assets/Illustration/1.jpg') center/cover ;
   grid-row:span 3;
   grid-column:1;
}
.item-9{
    grid-column: span 2;
}
.item-10{

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
@media (min-width: 768px){
    .contact{
        grid-column: 3;
        display:grid;
    }
}

@media (max-width:768px){
    .gallery-container{
        grid-template-columns: 1fr 1fr;
        display:grid;
        grid-gap:20px;
        align-content:center;
        grid-template-rows: repeat(14,33vh)
    }
    .gallery-container> div{
        grid-column: span 2;
    }
    .foo-title{
        grid-column:1;
        align-self:center;
        text-align:center;
        margin:15px;
    }

    .foo-title > p:nth-child(2){
        display:none;
    }
    .footer{
        display:grid;
        width:100vw;
        justify-items:center;
        grid-template-rows:repeat(3, 20vh);
        grid-template-columns: 1fr;
    }

    .contact{
        grid-column:1;
        grid-row:2;
    }
    
    #app{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .item-1{
        grid-row: 1;
        grid-column: span 2;
    }
    .item-2{
        grid-row: 2/span 2;
        grid-column: span 2;

        width:100%;
    }
    .item-3{
        grid-row: 4;
        grid-column: span 2;

    }
    .item-5{
        grid-column: span 2;
        
    }
    .item-6{
        grid-row: span 3;
        grid-column: span 2;

        width: 100%;
    }
    .item-7{
        grid-column: span 2;

    }
    .item-8{
        grid-column: span 2;

    }
    .item-9{
        grid-column: span 2;

    }
    .item-10{
        grid-column:1;

    }
    .item-11{
        grid-column:1;
    }

    #svgBG{
        display:none
    }
    #canvas{
        display:none
    }
    .container{
        display:none;
    }
    .first{
        align-self: center; 
        align-items:center;
        justify-content: center; 
        grid-gap:0px;
    }
    .follower{
        display:none;
    }
    .title{
        text-align:center;
        margin-right:0px;
    }
    .designer{
        display:none
    }
    .second{
        height:45vh;
        margin-top: 200px;
        margin-bottom: 150px;
    }
    .cat{
        margin: 0px;
    }
    
    .credits{
        display:none;
    }
    
    .social-2{
        grid-row:3;
        grid-template-columns: repeat(4,1fr);
        padding-right:none;
        align-content:center;
        background:red;
    }
    .title > div:nth-child(1){
        display:none
    }
    .title > div:nth-child(2){
        font-size:10vh;
        text-align:center;

    }
    .title > div:nth-child(3){
        font-size:3vh;
        text-align:center;

    }

    .menu > div:nth-child(n+2){
        display:none;
    }
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
            y:0
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