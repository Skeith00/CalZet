import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentLanguage: {name: "Català", code: "CA"},
    }, 
    mutations: {
        changeLang(state, payload) {
            state.currentLanguage.name = payload.name;
            state.currentLanguage.code = payload.code;
        }
    },
    actions: {
        changeLang(state, payload) {
            state.commit('changeLang', payload)
        }
    },
    getters: {
        getCurrentLang(state) {
            return state.currentLanguage;
        }
    }
});
