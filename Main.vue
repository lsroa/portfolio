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
                    a.social-item(href="https://linkedin.com/granroa") 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    a.social-item(href="https://behance.net/roa234b51c") 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>
                    a.social-item(href="https://dribbble.com/lsroa")
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z"/></svg>

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
                        Item.item-1(
                            data-aos="fade-up",
                            data-aos-delay="250",
                            title="IOS & Android App",
                            tag1="Front",
                            tag2="-end",
                            text="strong UI/UX & Full Stack Development"
                        )
                            img(src="./assets/Frontend/ed.png")
                            img(src="./assets/Frontend/ed2.png")
                        Item.item-2(
                            data-aos="fade-up",
                            data-aos-delay="110",
                            title="Landing Page",
                            tag1="UI",
                            tag2="UX",
                            text=" Web Design for a local restaurant"
                        )
                                img(src="./assets/Frontend/Home.jpg")
                        Item.item-3(
                            data-aos="fade-up",
                            data-aos-delay="250",
                            title="Full-Stack solution",
                            tag1="Full",
                            tag2="Stack",
                            text="Shop app made with React Native")
                                img(src="./assets/Illustration/5.jpeg")
                        Item.item-4(
                            data-aos="fade-up",
                            data-aos-delay="100",
                            title="Advance Scrapper",
                            tag1="Back",
                            tag2="-end",
                            text=" Web Design for a local restaurant")
                                img(src="./assets/3d.General/3.jpg")
                        Item.item-5(
                            data-aos="fade-up",
                            data-aos-delay="50",
                            title="Landing Page",
                            tag1="UI",
                            tag2="UX",
                            text=" Web Design for a local restaurant")
                                img(src="./assets/Illustration/2.jpeg")
                        Item#item-6(
                            data-aos="fade-up",
                            data-aos-delay="350",
                            title=" Page",
                            tag1="UI",
                            tag2="UX",
                            text=" Web Design for a local restaurant") 
                                img(src="./assets/Frontend/shop.jpg")
                        Item#item-7(
                            data-aos="fade-up",
                            data-aos-delay="100",
                            title="Landing Page",
                            tag1="Gra",
                            tag2="phic",
                            text=" Web Design for a local restaurant")
                                img(src="./assets/Illustration/1.jpg")
                        Item.item-8(
                            data-aos="fade-up",
                            title="Cart implementation",
                            tag1="Front",
                            tag2="-end",
                            text=" Web Design for a local restaurant")
                                img(src="./assets/Backend/cart.png",style="background-color:var(--yellow)") 
                        Item.item-9(
                            data-aos="fade-up",
                            data-aos-delay="250",
                            title="Visual branding",
                            tag1="Art",
                            tag2="Dir.",
                            text=" Web Design for a local restaurant")
                                img(src="./assets/3d.General/2.jpg")                           
                        Item#item-10(
                            data-aos="fade-up",
                            data-aos-delay="100",
                            title="Design exploration",
                            tag1="Art",
                            tag2="Dir.",
                            text=" Mix of design techniques exploration on Dribble")
                                video(src="./dist/pcGuy.webm" autoplay loop)
                        Item#item-11(
                            data-aos="fade-up",
                            data-aos-delay="250",
                            tag1="Art",
                            tag2="Dir.",
                            title="Landing Page",
                            text=" Web Design for a local restaurant")
                            video(src="./assets/ghost.webm" autoplay loop)
                            

            .footer
                .foo-title
                    p(style="font-family: 'Abril Fatface'") Lets build something cool !
                    p I am already following you
                .social-2 
                        a.social-item(href="https://github.com/lsroa") 
                            <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                        a.social-item(href="https://linkedin.com/granroa") 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>  
                        a.social-item(href="https://behance.net/roa234b51c") 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>
                        a.social-item(href="https://dribbble.com/lsroa")
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z"/></svg>
                            
                    
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
.foo-title> p:nth-child(1){
    font-size: 48px;
    margin: 0px;
}

.social-2{
    display:grid;
    grid-gap:35px;
    padding-right:35px;
    grid-column:1;
    justify-content:end;
}

.social-2 > a {
    background: #373737;
}

.bgd{
    
    display:none;
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
    grid-template-columns:2;
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

#item-6{
   grid-row:span 2;
}
#item-11{
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
#item-7{
   grid-row:span 3;
   grid-column:1;
}
.item-9{
    grid-column: span 2;
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


.menu{
    display:grid;
    align-items: center;
    grid-gap: 5px;
    grid-auto-flow: column;
    width:80%;
}
.menu-item{
    text-align: center;
}


.title{
    text-align: right;
    margin-right: 20px;
    display: grid;
    grid-gap:20px;
}

button{
    background-color:var(--yellow);
    border:none;
    color:#272727;
}


.title > * {
    line-height: 84%;
}

.social{
    display: grid;
    grid-auto-flow: column;
    justify-items: center;
}

.social-item{   
    display: grid;
    align-content: center;
    align-items: center; 
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid black;
}
#canvas{
    padding:0;
    margin: 0px;
    top: -1px;
    height: 100vh;
    margin-left: 0;
    margin-right: 0;
    position: sticky;
}



.title > div:nth-child(2){
    font-size:18vh;
    font-family: 'Abril Fatface',serif;
}

.title > div:nth-child(1){
    font-size:18px;
    margin-right:5px;
}
.title > div:nth-child(3){
    font-size:48px;
}

.btn-container{
    grid-gap:5px;
    padding:5px;
    display:grid;
    grid-auto-flow:column;
    grid-template-columns:3fr 1fr 3fr;    
}

.cat-content{
    display:grid;
    width:80%;
    justify-self:center;
} 
.contact{
    grid-column: 3;
    display:grid;
}

@media (max-width:768px){
    .gallery-container> div{
        grid-column: span 2;
        grid-row: span 1;
    }
    .description{
        padding-top: 15px;
    }

    .gallery-container > div > video{
        height:70%;
    }
    .gallery-container{
        grid-template-columns: 1fr 1fr;
        display:grid;
        grid-gap:20px;
        align-content:center;
        padding-bottom:110px;
        grid-template-rows: repeat(11,60vh)
    }
    .foo-title > p:nth-child(1){
        grid-column:1;
        font-size: 35px;
        align-self:center;
        text-align:center;
        margin:25px;
    }
    .bgd{
        position:absolute;
        top:0;
        display:block;
        left:0;
        width:100vw;
        z-index:-5;
    }
    .container{
        display:none;

    }
    .foo-title > p:nth-child(2){
        display:none;
    }
    .footer{
        display:grid;
        height: 80vh;
        align-items: center;
        justify-items:center;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
    }
    
    .contact{
        grid-column:1;
        grid-row:2;
        width:80%;
    }
    
    #app{
        display:grid;
        grid-template-columns: 1fr;
    }
    .item-1{
        grid-row: 1;
        
    }

    .item-1 > img {
        grid-column: 1/-1;
    }
    .item-2{
        grid-row: 2/span 2;
        

        width:100%;
    }
    .item-3{
        grid-row: 4;
        

    }

    #item-6{
        grid-row: span 1;
    }

    #item-6 > img{
        height: 100%;
        justify-self: center;
    }
    #item-7{
        grid-row: span 1;
        
        grid-column: span 2;
    }
    #item-7 > img {
        height: 80%;
        justify-self: center;
        margin-top: 90px;
    }

    #item-10{
        grid-column:1 / span 2;
    }
    #item-11{
        grid-column:1 / span 2;
    }

    #svgBG{
        display:none
    }
    #canvas{
        display:none
    }
    
    .first{
        align-self: center; 
        align-items:center;
        align-content:start;
        justify-content: center; 
        grid-column: 1;
        grid-gap:0px;
    }
    .follower{
        display:none;
    }
    .service{
        grid-template-columns: 1fr;
        grid-gap: 20px;
    }

    .title{
        text-align:center;
        margin-right:0px;
    }
    .designer{
        display:none
    }
    .second{
        grid-column: 1;
        width:80%;

    }
    .cat{
        margin: 0px;
    }
    
    .credits{
        display:none;
    }
    .btn-container{
        grid-template-columns: 1fr;
        grid-auto-flow: row;
        height:85px;
        grid-gap:10px;
        width:80%;
        justify-self:center;
    }
    .btn-container > p{
        display:none;
    }
    
    .social-2{
        grid-row:3;
        grid-template-columns: repeat(4,1fr);
        padding-right:0px;
        align-content:center;
    }
    .title{
        margin-right:0px ;
    }
    .title > div:nth-child(1){
        display:none
    }
    .title > div:nth-child(2){
        font-size:10vh;
        text-align:center;

    }
    .title > div:nth-child(3){
        font-size:16px ;
        text-align:center;

    }
    .menu{
        margin-bottom:30vh;
    }
    .menu > div:nth-child(n+2){
        display:none;
    }
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