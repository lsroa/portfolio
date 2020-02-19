<template lang="pug">
    div
        transition
            div.loading(v-if="loading")
                video(src="./dist/ast.webm" autoplay loop)
        
        Main  
        svg(id="svgBG" viewBox="0 0 400 400",style="fill:var(--yellow);right:0;position:absolute;top:0;z-index:-7")
            ellipse(id= "fu" cx="190",cy="100",rx="80",ry="80")
            rect(x="320",y="130",width="25",height="25",class="red-fill")
            rect(x="0",y="230",width="80%",height="30%",class="red-fill")
            rect(x="0",y="360",width="80%",height="10")
        .container(v-show="show")
            #canvas         
        video.bgd(v-show="!show",src="./dist/designer-no-bg.webm" autoplay loop)
        
</template>
<script>
import Main from "./Main.vue";
import init from "./designer.js";


export default {
    components:{
        Main
    },
    data(){
        return {
            loading:true,
            show:true
        }
    },
    mounted(){
        // setTimeout(() => {
           init(this) 
        //    this.loading = false
        // }, 5000);
        
    }
}


</script>


<style>
@keyframes foo{
    50%{
    transform:
        scale(1.03)
    };
}
#fu{
    transform-box: fill-box;
    transform-origin: 50% 50%;
    animation: foo infinite .6s ease-in-out;
    
}
.v-enter-active,
.v-leave-active {
    transition: all .5s;
}
.v-leave-to,
.v-enter {
    transform:translateY(-100vh);
}

.loading{
    z-index:10;
    position:absolute;
    width:100vw;
    height:100vh;
    left:0px;
    right:0px;
    background-color:#eee;
    margin:auto;
    padding-top:25vh;
    padding-bottom:25vh;
    text-align:center;    
}
.loading > video {
    width:25vh; 
}

:root{
    background-color:#f6f6f6;
    --red:#FF78A8;
    --redy:#FF78A8;
    --orange:#fb7756;
    --yellow:#00E8FF;
    --yellow2:#faEa60;
    --green:#C5F95a;
    --blue:#3C76C3;
}


.btn-container{
    grid-gap:5px;
    padding:5px;
    display:grid;
    grid-auto-flow:column;
    grid-template-columns:3fr 1fr 3fr;    
}

body{
    display: grid;    
    font-family:sans-serif;

}

.cat-bg{
    font-size: 490px;
    line-height: 84%;
    font-family: 'Abril Fatface',serif;
    z-index: -1;
    color: #eee;
    top:0px;
    text-align: center;
    position: absolute;
    align-self: center;
    justify-self:center;
    background: rgba(1,1,1,0);
}

.container{
    display: grid;
    position: relative;
    z-index: -3;
    
    padding: 0;
    margin:auto;
    height: 200vh;
    justify-items: flex-end;   
    width:80%; 
    
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





</style>