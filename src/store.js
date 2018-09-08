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
            if(state.ideas.indexOf(idea) < 0) {
                state.ideas.push(idea)
            }
        },
        addAssociation (state, association) {
            if(state.associations.indexOf(association) < 0) {
                state.associations.push(association)
            }
        }
    }
})