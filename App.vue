<template lang="pug">
    #app
        .first
            .menu
                for sec in ['🏢','contact','services','about']
                    .menu-item=sec
            .title 
                p(style="font-size:18px;margin-right:5px") 👓  designer and developer 
                strong(style="font-size:122px;font-family:serif") One man army
                p(style="font-size:48px;line-height:100%") where design & development have a beatiful baby
                .social
                    for x in [1,2,3,4]
                        .social-item 💩 
        .second
            for service in ['ux/ui','animation','frontend']
                .service
                    strong=service
                    p loremp ipsum 👴 
        .second
            p 💩 
        .second    
            p 💩      
        .footer
            .credits 
                strong(style="font-size:22px;color:#ccc") Credits
                p p5.js
                p Three.js 
                p Vue 
            .p5 canvas
            p Contacto
</template>

<style>
body{
    display: grid;    
    font-family:sans-serif;
}
.container{
    display: grid;
    position: relative;
    z-index: -1;
    padding: 0;
    margin:auto;
    height: 200vh;
    justify-items: flex-end;   
    width:80%; 
    /* background-color: yellow; */
    
}
.first > * {
    border: 1px solid yellow;
}

.first{
    display:grid;
    width: 100%;
    height: 100%;
    border: 1px solid blue;
    justify-items: center;
    align-items: center;
    grid-column-start: 2;

}
.footer{
    grid-column: 1/-1;
    grid-template-columns: repeat(3,1fr);
    background: #272727;
    display: grid;
    color: #8b8b8b;
    justify-items: center;
    align-items: center;
    height: 50vh;
    justify-self: stretch; 
}
.menu{
    display:grid;
    align-items: center;
    /* align-self: start; */
    grid-gap: 5px;
    border: 1px solid red;
    grid-auto-flow: column;
    width:80%;
    /* margin-top: 20px; */
}
.menu-item{
    text-align: center;
}

.title{
    text-align: right;
    /* border: 1px solid red; */
    margin-right: 20px;
    display: grid;

}
.second{
    border:1px solid red;
    justify-items: center;
    align-content: center;
    height: 100vh;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2,1fr);
    grid-column-start: 2;
}

.title > * {
    /* border: 1px solid red; */
    line-height: 84%;
}

.social{
    display: grid;
    grid-auto-flow: column;
    justify-items: flex-end;
}

.social-item{   
    display: grid;
    align-content: center;
    align-items: center; 
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #272727;
}


#canvas{
    padding:0;
    margin: 0px;
    top: -1px;
    height: 100vh;
    margin-left: 0;
    margin-right: 0;
    position: sticky;
    /* background: green */
}

#app{
    position: absolute;
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

</style>