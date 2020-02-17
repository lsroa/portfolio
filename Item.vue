<template lang="pug">
    .main("@click"="clicked")
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
        /* background: red;         */
    }
    img {
        
    }
</style>