import App from "./App.vue";
import Vue from "vue";
import VueMq from "vue-mq";

new Vue(App).$mount('#app').use(VueMq, {
    breakpoints: {
        mobile: 450,
        tablet: 1250,
        desktop: Infinity
    }
})

