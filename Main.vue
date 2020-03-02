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
                div designer & developer 
                div 
                    span One 
                    span(style="color:var(--red)") man 
                    | army
                div where design & development meet
                .btn-container
                    button("@click"="",style="border:2px #0c0c0c solid;background-color:#eee") Contact
                    p 
                    button(style="background-color:#0c0c0c;color:#eee") Download CV
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
                strong.cat-bg Illustration Development UI/UX Animation Branding
                img.cat-bg-img(src="./assets/Slice.png")
                .cat-content
                    p.subt 
                        | My
                        strong STUFFFF
                    .gallery-container
                        Item#item-1(
                            
                            data-aos-delay="250",
                            title="IOS & Android App",
                            tag1="Front",
                            tag2="-end",
                            text="strong UI/UX & Full Stack Development"
                        )
                            img(src="./assets/Frontend/ed.png",style="align-self:center;background: var(--yellow2)")
                            img(src="./assets/Frontend/ed2.png",style="background: var(--yellow2)")
                        Item#item-2(
                            
                            data-aos-delay="110",
                            title="Landing Page",
                            tag1="UI",
                            tag2="UX",
                            text=" Web Design for a local restaurant"
                        )
                                img(src="./assets/Frontend/Home.jpg")
                        Item#item-3(
                            
                            data-aos-delay="250",
                            title="Full-Stack solution",
                            tag1="Full",
                            tag2="Stack",
                            link="https://www.behance.net/gallery/71665101/Grupo-DTS"
                            text="Shop app made with React Native")
                                img(src="./assets/Illustration/5.jpeg")
                        Item#item-4(
                            
                            data-aos-delay="100",
                            title="Advance Scrapper",
                            tag1="Back",
                            tag2="-end",
                            text=" Web Design for a local restaurant")
                                img(src="./assets/3d.General/3.jpg")
                        Item#item-5(
                            
                            data-aos-delay="50",
                            title="Landing Page",
                            tag1="UI",
                            tag2="UX",
                            link="https://www.behance.net/gallery/72776221/Prionato-UIUX"
                            text=" Web Design for a local restaurant")
                                img(src="./assets/Illustration/2.jpeg")
                        Item#item-6(
                            
                            data-aos-delay="350",
                            title=" Page",
                            tag1="UI",
                            tag2="UX",
                            text=" Web Design for a local restaurant") 
                                img(src="./assets/Frontend/shop.jpg")
                        Item#item-7(
                            
                            data-aos-delay="100",
                            title="Landing Page",
                            tag1="Gra",
                            tag2="phic",
                            link="https://www.behance.net/gallery/72558755/Astronout-2d3d"
                            text=" Web Design for a local restaurant")
                                img(src="./assets/Illustration/1.jpg")
                        Item#item-8(
                            
                            title="Cart implementation",
                            tag1="Front",
                            link="https://codepen.io/lsroa",
                            tag2="-end",
                            text=" Web Design for a local restaurant")
                                img(src="./assets/Backend/cart.png",style="background-color:var(--yellow)") 
                        Item#item-9(
                            
                            data-aos-delay="250",
                            title="Visual branding",
                            tag1="Art",
                            tag2="Dir.",
                            link="https://www.behance.net/gallery/72634421/Trading-Assets-for-BALDER-Group"
                            text=" Web Design for a local restaurant")
                                img(src="./assets/3d.General/2.jpg")                           
                        Item#item-10(

                            data-aos-delay="100",
                            title="Design exploration",
                            tag1="Art",
                            tag2="Dir.",
                            link="https://dribbble.com/lsroa"
                            text=" Mix of design techniques exploration on Dribble")
                                video(src="./dist/pcGuy.webm" autoplay loop)
                        Item#item-11(
                            data-aos-delay="250",
                            tag1="Art",
                            tag2="Dir.",
                            title="Landing Page",
                            text=" Web Design for a local restaurant")
                                video(src="./assets/ghost.webm" autoplay loop)
                            

            .footer
                .foo-title
                    p(style="font-family: 'Abril Fatface'") {{this.message}} 
                    p Follow me I am already following you !
                Canvas(":x"="x",":y"="y",style="grid-row:1/span 2;grid-column:2;align-self:end")
                .social-2 
                        a.social-item(href="https://github.com/lsroa") 
                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient x1="0.1814282" y1="0.7929058" x2="1.04232776" y2="1.23648059" id="gradient_2">
                                    <stop offset="0" stop-color="#FAEA60" />
                                    <stop offset="1" stop-color="#9BD46F" />
                                    </linearGradient>
                                </defs>
                                <g id="svg-2">
                                    <path d="M0 0L24 0L24 24L0 24L0 0Z" id="Background" fill="none" stroke="none" />
                                    <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C20.7097 21.736 23.9987 17.1555 24 12C24 5.37 18.63 0 12 0L12 0Z" id="Shape" fill="url(#gradient_2)" stroke="none" />
                                </g>
                            </svg>
                        a.social-item(href="https://linkedin.com/granroa") 
                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient x1="0" y1="0" x2="0.664815843" y2="0.57407" id="gradient_1">
                                    <stop offset="0" stop-color="#00E8FF" />
                                    <stop offset="1" stop-color="#4AA7FE" />
                                    </linearGradient>
                                </defs>
                                <g id="svg-2">
                                    <path d="M19 0L5 0C2.239 0 0 2.239 0 5L0 19C0 21.761 2.239 24 5 24L19 24C21.762 24 24 21.761 24 19L24 5C24 2.239 21.762 0 19 0ZM6.5 6.73198C5.534 6.73198 4.75 5.94198 4.75 4.96798C4.75 3.99398 5.534 3.20398 6.5 3.20398C7.466 3.20398 8.25 3.99398 8.25 4.96798C8.25 5.94198 7.467 6.73198 6.5 6.73198ZM17 19.0001L20 19.0001L20 12.2411C20 6.98806 14.396 7.17906 13 9.76506L13 8.00006L10 8.00006L10 19.0001L13 19.0001L13 13.3961C13 10.2831 17 10.0281 17 13.3961L17 19.0001ZM8 19L8 8L5 8L5 19L8 19Z" id="Shape" fill="url(#gradient_1)" fill-rule="evenodd" stroke="none" />
                                </g>
                            </svg>
                        a.social-item(href="https://behance.net/roa234b51c") 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" fill="#eee"/></svg>
                        a.social-item(href="https://dribbble.com/lsroa")
                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient x1="0" y1="0" x2="1" y2="1" id="gradient_3">
                                    <stop offset="0" stop-color="#CA79CB" />
                                    <stop offset="1" stop-color="#FF78A8" />
                                    </linearGradient>
                                </defs>
                                <g id="svg">
                                    <path d="M0 12C0 5.373 5.372 0 12 0C18.628 0 24 5.373 24 12C24 18.627 18.628 24 12 24C5.372 24 0 18.627 0 12ZM13.0573 7.83904C15.1753 6.94204 16.8383 5.71304 18.0433 4.15904C16.3683 2.86604 14.2753 2.08704 12.0003 2.08704C11.1603 2.08704 10.3483 2.20404 9.56934 2.40104C10.8793 4.16304 12.0413 5.97804 13.0573 7.83904ZM7.52688 3.16602C8.85788 4.90802 10.0379 6.70402 11.0639 8.54702C8.63388 9.26202 5.73288 9.62901 2.37988 9.65202C3.07188 6.81702 4.98088 4.45902 7.52688 3.16602ZM21.8846 11.441C19.3096 11.019 16.9417 10.996 14.7816 11.368C14.5376 10.805 14.2846 10.243 14.0146 9.68796C16.3246 8.68796 18.1796 7.32996 19.5626 5.60596C20.9126 7.19996 21.7596 9.22496 21.8846 11.441ZM2.09991 11.744L2.08691 12C2.08691 14.407 2.95091 16.615 4.38291 18.334C6.55491 15.076 9.33991 12.911 12.7199 11.854C12.5059 11.374 12.2829 10.897 12.0499 10.422C9.26891 11.296 5.94891 11.739 2.09991 11.744ZM15.582 13.343C16.422 15.587 17.064 17.887 17.502 20.24C19.753 18.731 21.344 16.325 21.781 13.539C19.522 13.147 17.458 13.078 15.582 13.343ZM5.91602 19.81C7.88502 16.722 10.398 14.712 13.514 13.783C14.442 16.203 15.123 18.693 15.557 21.243C12.208 22.534 8.60402 21.909 5.91602 19.81Z" id="Shape" fill="url(#gradient_3)" fill-rule="evenodd" stroke="none" />
                                </g>
                            </svg>
                            
                    
               
        
        

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
    grid-column:3
}
.foo-title> p:nth-child(1){
    font-size: 48px;
    margin: 0px;
}

.social-2{
    display:flex;
    grid-column:3;
    justify-content:space-around;
    justify-items: center;
}

.social-2 > a {
    background: none;
    border: 1px solid #8b8b8b;
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
    background: #272727;
    grid-gap:10px;
    padding-top: 50px;
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

.cat-bg-img{
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 45vw;
}



video{
    max-width:100%;
}

.gallery-container > a > img{
    max-width: 100%;
}
#item-1{
    /* grid-column: span 2; */
}


#item-3{
    grid-column: span 2;
}
#item-5{
    grid-column: span 2;
}
#item-10{
    grid-column: -2;
    grid-row: 2;
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
    padding-bottom:20vh;
    width:100%;
    grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
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
    justify-self:end;
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
    grid-gap:10px;
}

button{
    background-color:var(--yellow);
    border:none;
    color:#272727;
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
    line-height: 70%;
    font-family: 'Abril Fatface',serif;
}

.title > div:nth-child(1){
    font-size:16px;
    margin-right:5px;
}
.title > div:nth-child(3){
    font-size:48px;
    margin-top: 26px;
    margin-bottom: 15px;
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
    
    .description{
        padding-top: 15px;
    }

    #item-3,#item-5 {
        grid-column: span 1;
    }
    #item-10{
        grid-column: auto;
        grid-row: auto;
    }


    .menu{
        justify-self: center;
    }
    .foo-title > p:nth-child(1){
        grid-column:1;
        font-size: 35px;
        align-self:center;
        text-align:center;
        margin:25px;
    }
    .social{
        margin-top:25px
    }

    .cat-bg-img{
        display:none
    }
    .bgd{
        position:absolute;
        top:10vh;
        display:block;
        left:0;
        width:100vw;
        height: 100vh;
        overflow: hidden;
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
            message: " Lets build something cool !"
        }
    },
    components:{
        Contact,
        Canvas,
        Item
    },
    created(){
        AOS.init();
    },   
    methods:{
        handleForm(data){
            this.message = data
        },
        coordinates(e){
           this.x = (e.clientX - window.innerWidth/2)/window.innerWidth;
           this.y = (e.clientY - window.innerHeight/2)/window.innerHeight;
        }
    }
}
</script>