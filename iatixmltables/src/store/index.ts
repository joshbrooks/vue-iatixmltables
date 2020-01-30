import Vue from 'vue'
import Vuex from 'vuex'

const activitiesUrl = 'http://localhost:8000/iatistore/iatiactivities.json'
const transactionsUrl = 'http://localhost:8000/iatistore/iatitransactions.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activities: [],
    activities_loaded: false
  },
  mutations: {
    setactivities(state: any, activities: any) {
      state.activities = activities
      state.activities_loaded = true
    },
    settransactions(state: any, transactions: any) {
      state.transactions = transactions
      state.transactions_loaded = true
    }
  },
  actions: {
    fetch(context) {
      fetch(activitiesUrl)
        .then(response => {
          return response.json()
        })
        .then(activities => {
          context.commit('setactivities', activities.results)
        })
    },
    fetch_transactions(context) {
      fetch(transactionsUrl)
        .then(response => {
          return response.json()
        })
        .then(transactions => {
          context.commit('settransactions', transactions)
        })
    }
  },
  modules: {}
})
