<template lang="pug">
    .contact
        strong(style="font-size:22px;color:#ccc") Contact
        p Email
        input(placeholder="your@email.com")
        p Text
        input(placeholder="text")
        div(style="margin-top:15px")
            button Send
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
<style>
.contact{
    display:grid;
    padding-top:80px;
}
</style>