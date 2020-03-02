<template lang="pug">
    form.contact(data-netlify="true",netlify-honeypot="bot-field",method="POST",name="contact")
        div(hidden, aria-hidden="true")
            label
                input(name="bot-field")
        p Email
        input.contact-input(v-model="this.form.email",type="email" ,name="email", placeholder="your@email.com")
        p Message
        textArea.contact-area(v-model="this.form.text",name="text",type="text", placeholder="Tell me about your project")
        button.contact-btn(@click.prevent="handleSubmit", type="submit") Build
</template>
<script>

    export default {
        name:'Contact',
        data(){
            return{
                form:{
                    email: "",
                    text: ""
                }
            }
        },
        methods:{
            handleSubmit(e){
                  
                fetch("/",{ 
                    method:"POST", 
                    body: new FormData(e.path[1]),
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then( res =>{
                    console.log(res)
                    this.$emit("onSubmit","I will get in touch ASAP")
                }
                ).catch( error =>{
                        console.log(error)
                        this.$emit("onSubmit","OOPS something went wrong")
                    }
                )               
            }
        }
    }
</script>
        
<style scoped>
.contact-input{
    height: 30px;
}
.contact-area{
    height: 90px;
}
.contact-btn{
    padding:10px;
    padding-left:70px;
    padding-right:70px;
    margin-top:30px;
    justify-self: end;
}

@media (max-width:768px){
    .contact-btn{
        justify-self: center;
        width: 100%;
    }
}
</style>