<template lang="pug">
    .main("@click"="clicked")
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
        align-content:center;
        justify-content:center;
        display:grid;
        grid-gap:0px; 
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
    .text > * {
        margin: 0px;
    }
    .text{
        display:grid;
        font-size:14px;
    }
    .description{
        display:grid;
        grid-column:1/-1;
        grid-gap:20px;
        align-items:center;
        justify-items:start;
        justify-content:start;  
        grid-auto-flow: column;   
        width:100%;
        height:0px;
        overflow:hidden;
        margin: auto;
        transition: all 0.2s;
    }
    @media (max-width: 768px){
        .description{
            height: 80px;
        } 
        .text {
            font-size: 18px;
        }
        
    }
    
    .main:hover > .description{
        height: 80px;
    }

</style>