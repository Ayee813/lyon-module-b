import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

import AdminDashboard from '../views/AdminDashboard.vue'
import Preview from '../views/Preview.vue'
import Login from '../views/Login.vue'
import { compile, nextTick } from "vue";
import Forbidden from '../views/Forbidden.vue'

const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/admindashboard',
        component: AdminDashboard,
        meta: { requireAuth: true, role: 'admin' }
    },
    {
        path: '/preview',
        component: Preview,
        meta: { requireAuth: true, role: 'staff' }
    },
    {
        path: '/forbidden',
        component: Forbidden,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

// protect login
router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
    const userRole = localStorage.getItem('userRole');

    // If logged in and trying to access login page again
    if (to.path === '/' && isAuthenticated) {
        if (userRole === 'admin') {
            return next('/admindashboard');
        } else if (userRole === 'staff') {
            return next('/preview');
        }
    }

    //Check if the route requires authentication
    if (to.meta.requireAuth) {
        if (!isAuthenticated) {
            return next('/');
        }

        //If user role doesn't match the route's required role
        if (to.meta.role && to.meta.role !== userRole) {
            return next('/forbidden')
        }
    }

    next();
});


export default router