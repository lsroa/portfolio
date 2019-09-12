<template lang="pug">
    transition
        div(v-if="!loading",key="1")
            Main           
        div.loading(v-else,key="2") Cargando
        
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
            loading:true
        }
    },
    created(){
       init(this);
    }
}


</script>


<style>

.v-enter-active,
.v-leave-active {
    transition: opacity .5s
}
.v-leave-to,
.v-enter {
    opacity:0;
}

.loading{
    z-index:10;
    position:absolute;
    left:0px;
    right:0px;
    background-color:#eee;
    margin:auto;
    padding-top:50vh;
    padding-bottom:50vh;
    font-size:32px;
    text-align:center;
}


:root{
    --red:#e74645;
    --orange:#fb7756;
    --green:#facd60;
    --yellow:#fdfa66;
    --blue:#1ac0c6;
}

.gallery-container{
    display:grid;
    grid-gap:10px;
    width:100%;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows:repeat(2,30vh);
}

.gallery-container >div{
   background: url('./assets/3d.General/1.png') center/cover ;
}
.cat-content{
    display:grid;
    width:80%;
    justify-self:center;
}
.btn-container{
    grid-gap:5px;
    padding:5px;
    display:grid;
    grid-auto-flow:column;
    grid-template-columns:3fr 1fr 3fr;    
}
.credits{
    padding-top:80px;
}
body{
    display: grid;    
    font-family:sans-serif;

}
.second{
    display:grid;
    grid-template-columns: repeat(2,1fr);
    grid-column-start:2;
    height:100vh;
    width:100%;
    justify-items:center;
    grid-gap:10px;
    align-items:center;    
    align-content:center;
    justify-content:center;
}
.cat-bg{
    font-size: 490px;
    line-height: 84%;
    font-family: serif;
    z-index: -1;
    color: #E2E1E1;
    text-align: center;
    position: absolute;
    align-self: center;
    justify-self:center;
}

.container{
    display: grid;
    position: relative;
    z-index: 0;
    padding: 0;
    margin:auto;
    height: 200vh;
    justify-items: flex-end;   
    width:80%; 
    
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
.footer{
    grid-column: 1/-1;
    grid-template-columns: repeat(3,1fr);
    background: #272727;
    display: grid;
    color: #8b8b8b;
    justify-items: center;
    align-items: start;
    height: 50vh;
    justify-self: stretch; 
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

.cat{
    display: grid;
    grid-column: 1/-1;
    position: relative;
    height: 100vh;    
    align-content:center;
    overflow: hidden;
    

}


.title > * {
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
}

#app{
    position: absolute;

    z-index:-2;
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