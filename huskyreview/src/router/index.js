import { createRouter, createWebHistory } from "vue-router";
import home from "/src/views/Home.vue";
import newReview from "/src/views/NewReview.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: home,
    },
    {
        path: "/review",
        name: "newReview",
        component: newReview
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;

// import home from "../views/Home.vue";
// import newReview from "../views/NewReview.vue";

// export default [
//     {path: '/', component: home},
//     {path: '/review', component: newReview}
// ]
