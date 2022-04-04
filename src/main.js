import { createApp } from 'vue';
import App from './App.vue';
import List from './components/List.vue';
import { store } from './store/index';
import { createRouter, createWebHashHistory } from 'vue-router'
import './index.css';

const routes = [
    { 
        path: '/', 
        component: List,
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
