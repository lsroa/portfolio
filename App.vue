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
        video.bgd(src="./dist/designer1.0.webm" autoplay loop)
        
</template>
<script>
import Main from "./Main.vue";
import init from "./designer.js";
import isMobile from "is-mobile";


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
    created(){
        if(isMobile()){
            this.loading = false
        }
    },
    mounted(){
        // setTimeout(() => {

        if (!isMobile()){
            init(this) 
        }
        
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










</style>