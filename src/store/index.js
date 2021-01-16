import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
import vuexPersist from "vuex-persist"

export default new Vuex.Store({
    state: {
        user: {},
    },
    mutations: {
        setUser(state, value) {
            state.user = value
        },
    },
    actions: {},
    modules: {},
    plugins: [
        new vuexPersist({
            storage: window.localStorage,
        }).plugin,
    ],
})
