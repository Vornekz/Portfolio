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
        component: Home,
        props: route => ({ ...route.params })
    },
    {
        path: "/About",
        name: "About",
        component: About,
        props: route => ({ ...route.params })
    },
    {
        path: "/Contacts",
        name: "Contacts",
        component: Contacts,
        props: route => ({ ...route.params })
    }
]

const routerOptions: RouterOptions = {
    routes,
    mode: "history",
    base: "/Portfolio/"
};

const router = new VueRouter(routerOptions);

export default router;