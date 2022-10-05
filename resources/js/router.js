import Vue from 'vue'
import VueRouter from 'vue-router'


import HomePage from './components/pages/HomePage.vue';

import ContactsPage from './components/pages/ContactsPage.vue';

import AboutPage from './components/pages/AboutPage.vue';

Vue.use(VueRouter)

const routes = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: HomePage },
        { path: '/about', component: AboutPage },
        { path: '/contacts', component: ContactsPage },
    ]
});

export default routes;
