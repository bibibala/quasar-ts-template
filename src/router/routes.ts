import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: () => import("src/pages/Login/index.vue"),
        meta: {
            title: "login",
            auth: false,
        },
    },
    {
        path: "/layout",
        component: () => import("layouts/MainLayout.vue"),
        children: [
            {
                path: "/home",
                component: () => import("pages/Home/index.vue"),
                meta: {
                    auth: true,
                    title: "home",
                },
            },
        ],
    },
];

export default routes;
