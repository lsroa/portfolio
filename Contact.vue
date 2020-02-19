<template lang="pug">
    .contact
        p Email
        input(placeholder="your@email.com")
        p Message
        input(placeholder="text")
        div(style="justify-self:end;margin-top:30px")
            button(style="padding:10px;padding-left:70px;padding-right:70px") Send
</template>

<script>
    export default{
        data(){
            return {
                text:"Your Message"
            }
        }
    }
</script>
<style scoped>
/* @media (max-width:768px){
    .contact{
            padding:5vh;
            grid-row: 2;
            grid-column: 1;
    }
}
.contact{
    display:grid;
    grid-column:3;
} */
input{
    height: 30px;
}
</style>