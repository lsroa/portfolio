<template lang="pug">
    .main("@click"="clicked")
        .links 
            .circle 💻 | 👁 
        slot
</template>
<script> 
export default{
    props:['title'],
    methods:{
        clicked(e){
            console.log(this.title)
        }
    }

}
</script>
<style scoped> 

    .main{
        align-content:center;
        justify-content:center;
        grid-gap:0px; 
    }
    .circle{
        display:grid;
        border-radius:50%;
        width:100px;
        height:100px;
        background:rgba(0.6,0.6,0.6,0.3);
        justify-items:center;
        align-items:center;
    }
    .links{
        display:grid;
        align-items:center;
        opacity:0;
        justify-items:center;        
        position:absolute;
        width:100%;
        height:100%;
        margin: auto;
        transition: all 0.2s;
    }
    .links:hover{
        opacity:1;
    }

</style>