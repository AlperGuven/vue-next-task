import { createStore } from 'vuex';
import * as moduleEvents from './modules/events';

export const store = createStore({
    modules: {
        event: moduleEvents,
    },
    state: { // = data
    },
    getters: { // = computed properties
    },
    actions:{
    },
    mutations: {
    }
});