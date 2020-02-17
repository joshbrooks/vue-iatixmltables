import { ActivityTransactionList } from '@/protobuf/transaction_pb'

const transactionsUrl = 'http://localhost:8000/iatistore/iatitransactions.json'

const requester = {
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/octet-stream'
  },
  method: 'GET',
  mode: 'cors',
  responseType: 'arraybuffer'
} as RequestInit

export const transactionStore = {
  state: {
    transactions: [],
    transactions_loaded: false
  },

  mutations: {
    settransactions(state: any, transactions: any) {
      debugger // eslint-disable-line
      const acts = transactions.toObject()
      let compiled = []
      for (let act of acts.activitiesList) {
        let id = act.iatiIdentifier
        for (let tIdx in act.transactionsList) {
          let t = act.transactionsList[tIdx]
          t['activity'] = id
          t['id'] = id + ' ' + tIdx
          compiled.push(t)
        }
      }
      state.transactions = compiled
      state.transactions_loaded = true
    }
  },
  actions: {
    fetch_transactions(context: any) {
      return fetch(transactionsUrl, requester)
        .then(metadataResponse => metadataResponse.arrayBuffer())
        .then(protobufBytes => {
          const uintArray = new Uint8Array(protobufBytes)
          debugger // eslint-disable-line
          const activitytransactionlist = ActivityTransactionList.deserializeBinary(
            uintArray
          )
          context.commit('settransactions', activitytransactionlist)
        })
    }
  }
}
