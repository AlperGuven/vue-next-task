import axios from 'axios';

/*const TicketMasterHttp = axios.create({
    baseURL: ' https://app.ticketmaster.com/discovery/v2/',
    params: {
       apikey: import.meta.env.VITE_API_KEY,
    },
  }); */

const state = {
    name: '',
    type: '',
    id: '',
    test: false,
    url: '',
    locale: '',
    eventData: [],
    linkData: {},
    pageData: {},
    eventDetail: {},
};
const mutations = {
    CHANGE_NAME(state, newName) {
        state.name = newName;
    },
    SET_EVENTS(state, events) {
        state.eventData = events._embedded.events;
        state.linkData = events._links;
        state.pageData = events.page;
    },
    SET_EVENT_DETAIL(state, event) {
        state.eventDetail = event;
    }
};
const getters = {
    getName(state) {
        return state.name;
    },
    getType(state) {
        return state.type;
    },
    getId(state) {
        return state.id;
    },
    getTest(state) {
        return state.test;
    },
    getURL(state) {
        return state.url;
    },
    getLocale(state) {
        return state.locale;
    },
    eventDetailData(state) {
        return state.eventDetail;
    },
    eventData(state) {
        return state.eventData;
    },
    getLinkData(state) {
        return state.linkData;
    },
    getPageData(state) {
        return state.pageData;
    }
};
const actions = {
    changeName({ commit }, name) {
        commit('CHANGE_NAME', name)
    },
    async fetchEvents({ commit }, url) {
        try {
            const api_key = import.meta.env.VITE_API_KEY;
            const requestUrl = url + 'events.json?size=10&page=1&apikey=' + api_key;
            const data = await axios.get(requestUrl);
            commit('SET_EVENTS', data.data)
        }
        catch (error) {
            console.log(error)
        }
    },
    async searchEvent({ commit }, payload) {
        try {
            const api_key = import.meta.env.VITE_API_KEY;
            const url = 'https://app.ticketmaster.com/discovery/v2/';
            const requestUrl = url + 'events.json?apikey=' + api_key;
            const data = await axios.get(requestUrl, { params: { keyword: payload } });
            commit('SET_EVENTS', data.data)
        }
        catch (error) {
            console.log(error)
        }
    },
    async getEventDetail({ commit }, payload) {
        try {
            const api_key = import.meta.env.VITE_API_KEY;
            const url = 'https://app.ticketmaster.com/discovery/v2/';
            const requestUrl = `${url}/events/${payload}.json?apikey=${api_key}`;
            const data = await axios.get(requestUrl);
            commit('SET_EVENT_DETAIL', data.data)
        }
        catch (error) {
            console.log(error)
        }
    },
    async paginate({ commit }, payload) {
        try {
            const api_key = import.meta.env.VITE_API_KEY;
            const url = 'https://app.ticketmaster.com/discovery/v2/';
            const requestUrl = url + 'events.json?size=10&page=' + payload + '&apikey=' + api_key;
            const data = await axios.get(requestUrl);
            commit('SET_EVENTS', data.data)
        }
        catch (error) {
            console.log(error)
        }
    },
    sortByPayload( { commit, state }, payload) {
        if(payload === 'Name') {
            state.eventData.sort((a, b) => (a.name > b.name ? 1 : 1));
        } else {
            state.eventData.sort((a,b) =>  new Date(b.dates.start.dateTime) - new Date(a.dates.start.dateTime));
        }
        
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
