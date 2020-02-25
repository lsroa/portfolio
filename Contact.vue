<template lang="pug">
    .contact
        p Email
        input.contact-input(placeholder="your@email.com")
        p Message
        textArea.contact-area(placeholder="Tell about your project")
        div(style="justify-self:end;margin-top:30px")
            button(style="padding:10px;padding-left:70px;padding-right:70px") Send
</template>

        
<style scoped>
.contact-input{
    height: 30px;
}
.contact-area{
    height: 90px;
}
</style>