import axios from 'axios';

const state = {
    name: '',
    type: '',
    id: '',
    test: false,
    url: '',
    locale: '',
    eventDataResponse: {},
};
const mutations = {
    CHANGE_NAME(state, newName) {
        state.name = newName;
    },
    SET_USERS(state, events) {
        state.eventDataResponse = events;
    }
};
const getters = {
    name(state) {
        return state.name;
    },
    list(state) {
        return state.type;
    },
    eventData(state) {
        return state.eventDataResponse;
    }
};
const actions = {
    changeName({ commit }, name) {
        commit('CHANGE_NAME', name)
    },
    async fetchEvents({ commit }, url) {
        try {
            const api_key = import.meta.env.VITE_API_KEY;
            const requestUrl = url + '&apikey=' + api_key;
            const data = await axios.get(requestUrl);
            commit('SET_USERS', data.data)
        }
        catch (error) {
            console.log(error)
        }
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}
