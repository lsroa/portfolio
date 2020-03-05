<template lang="pug">
    div(:dark-mode="dark")
        transition
            div.loading(v-if="loading")
                video(src="./dist/ast.webm" autoplay loop)
        svg(id="svgBG" viewBox="0 0 400 400")
            ellipse(id= "fu" cx="190",cy="100",rx="80",ry="80")
            rect(x="320",y="130",width="25",height="25",class="red-fill")
            rect(x="0",y="230",width="80%",height="30%",class="red-fill")
            rect(x="0",y="360",width="80%",height="10")
        Main(@onDark="toggleDark")
        .container
            #canvas         
        div.bgd
            img(src="./assets/Slice.png",style="max-width: 100%;margin-left: 10vw")
        
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
            show:true,
            dark: false
        }
    },
    created(){
        if(isMobile()){
            this.loading = false
        }
    },
    methods:{
        toggleDark(){
            this.dark = !this.dark;
            
            document.body.style.color = this.dark ? "#aaa":"black";
            document.body.style.backgroundColor = !this.dark ? "#FFF":"#172727";

            document.scene.children[0].intensity = this.dark ?  0:1.2;
            document.scene.children[1].intensity = this.dark ?  0.1:0.85;
            document.scene.children[2].intensity = this.dark ?  0.8:0;
            document.scene.children[3].intensity = this.dark ?  0:0.4;
            document.scene.children[4].intensity = this.dark ?  0:0.2;
        }
    }, 
    mounted(){
        
        if (!isMobile()){
            init(this) 
        }
        
        
    }
}


</script>
<style>
[dark-mode="true"]{
    --bg: #172727;
    --light: #eee;
    --darker: #273737;
    --yellow: var(--darker);
    --red: var(--darker);
    --move: translateX(-50px);

}
</style>