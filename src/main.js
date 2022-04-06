import { createApp } from 'vue';
import App from './App.vue';
import MainView from './views/MainView.vue';
import DetailView from './views/DetailView.vue';
import { store } from './store/index';
import { createRouter, createWebHashHistory } from 'vue-router';
import './assets/index.scss';

const routes = [
    { 
        path: '/',
        name: 'Main',
        component: MainView,
    },
    {   path: '/event/:id',
        name: 'EventDetail',
        component: DetailView 
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);
app.use(router);
app.use(store);

app.mount("#app");
