import Vue from 'vue'
import Vuex from 'vuex'

import {
  ActivityTransactionList,
  ActivityTransactions,
  Transaction,
  Activity
} from '../protobuf/transaction_pb'

import { transactionStore } from './transactionStore'
import { activityStore } from './activityStore'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    activityStore: activityStore,
    transactionStore: transactionStore
  }
})
