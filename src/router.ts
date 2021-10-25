import Vue from "vue"
import VueRouter, {RouteConfig, RouterOptions} from "vue-router"

Vue.use(VueRouter)


const routes: RouteConfig[] = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/Home.vue"),
    },
    {
        path: "/About",
        name: "About",
        component: () => import("@/views/About.vue")
    },
    {
        path: "/Contacts",
        name: "Contacts",
        component: () => import("@/views/Contacts.vue")
    }
]

const routerOptions: RouterOptions = {
    routes,
    mode: "history",
    base: "/Portfolio"
};

const router = new VueRouter(routerOptions);

export default router;