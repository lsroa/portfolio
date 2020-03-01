<template lang="pug">
    .contact
        p Email
        input.contact-input(placeholder="your@email.com")
        p Message
        textArea.contact-area(placeholder="Tell about your project")
        button.contact-btn Build
</template>

        
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