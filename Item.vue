<template lang="pug">
    .main("@click"="clicked",data-aos="fade-up")
        slot
        .description 
            .designer-tag 
                div {{this.tag1}}
                div {{this.tag2}}
            //- .designer-tag 
            //-     | Front
            //-     | -end    
            //- .designer-tag 
            //-     | UI
            //-     | UX
            .text 
                strong {{ this.title }}
                p {{ this.text  }}
                
</template>
<script> 
export default{
    props:{
        title: String,
        text:  String,
        tag1:   String,
        tag2: String        
    },
    methods:{
        clicked(e){
            console.log(this.title)
            console.log(this)
        }
    }

}
</script>
<style scoped> 

    .main{
        display:grid;
        align-items:center;
        justify-content:center;
        align-content:center;
        grid-gap:15px;
        transition: .2s all;
    }

    .designer-tag{
        justify-self: end;
        margin:0px;
        text-align: right;
        font-family: "Abril Fatface";
        font-size: 16px;
        background: #272727;
        padding: 6px;

    }
    .designer-tag > *{
        color: white;
        line-height:16px;
    }    
    
    .text{
        font-size:14px;
    }

    .text > * {
        margin: 0px;
    }
    .description > div{
        margin:7px;
    }
    .description{
        display:flex;
        align-items:center;
        transition: all 0.2s;
    }

    

    
    
    

</style>