import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ideas: [],
        associations: []
    },
    mutations: {
        addIdea (state, idea) {
            state.ideas.push(idea)
        },
        addAssociation (state, association) {
            state.associations.push(association)
        }
    }
})