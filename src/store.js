import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ideas: [],
        associations: [],
        mottoGoal: '',
        primes: []
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
        },
        deleteAssociation (state, item) {
            state.associations.splice(state.associations.indexOf(item), 1)
            state.associations = [...state.associations]
        },
        addMottoGoal(state, mottoGoal) {
          state.mottoGoal = mottoGoal;
        },
        addPrime (state, prime) {
            if(state.primes.indexOf(prime) < 0) {
                state.primes.push(prime)
            }
        }
    }
})