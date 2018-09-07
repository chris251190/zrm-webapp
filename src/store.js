import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ideas: []
    },
    mutations: {
        addIdea (state, idea) {
            state.ideas.push(idea)
        }
    }
})