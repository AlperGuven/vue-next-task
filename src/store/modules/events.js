export const moduleEvents = {
    state: () => ({
        name: '',
        type: '',
        id: '',
        test: false,
        url: '',
        locale: '',
        events : [],
        dataResponse : {},
    }),
    mutations: {
        changeName (state, payload) {
            state.name = payload;
        }
    },
    getters: {
        events (state) {
            return state.events;
        },
        name (state) {
            return state.name;
        },
        list (state) {
            return state.list;
        }
    },
    actions: {
        changeName ({ commit }) {
          commit('changeName')
        }
    }
  }
  