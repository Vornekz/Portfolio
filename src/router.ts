import Vue from "vue"
import VueRouter, {RouteConfig, RouterOptions} from "vue-router"
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contacts from "@/views/Contacts.vue";

Vue.use(VueRouter)


const routes: RouteConfig[] = [
    {
        path: "/",
        name: "Home",
        component: Home
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
    }
]

const routerOptions: RouterOptions = {
    routes,
    mode: "history",
    base: "/Portfolio/"
};

const router = new VueRouter(routerOptions);

export default router;