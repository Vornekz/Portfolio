import Vue from "vue"
import Router from "vue-router"
import Home from "@/views/Home.vue"
import About from "@/views/About.vue";
import Contacts from "@/views/Contacts.vue";

Vue.use(Router)

export default new Router({
    mode: "history",
    base: "/Portfolio/",
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/About",
            name: "About",
            component: About
        },
        {
            path: "/Contacts",
            name: "Contacts",
            component: Contacts
        },

    ]
})