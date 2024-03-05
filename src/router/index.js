import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
       {
        path:"/home",
        component:()=> import('../views/Home.vue')
       }, 
       {
        path:"/:patchMatch(.*)",
        name:'NotFound',
        component:()=> import('../views/NotFound.vue')
       },
       {
        path:"/poke",
        component:()=> import('../views/PokeApi.vue')
       }, 
       {
        path:"/meteo",
        component:()=> import('../views/MeteoApi.vue')
       } 
    ]
});
export default router;