<template>
  <v-card>
    <v-card-title>
      Transactions
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table
      dense
      :headers="headers"
      :items="desserts"
      :items-per-page="15"
      class="elevation-1"
      :search="search"
    ></v-data-table>
  </v-card>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'TransactionTable',
  mounted() {
    if (!this.$store.state.transactionStore.transactions_loaded) {
      this.$store.dispatch('fetch_transactions')
    }
  },
  computed: {
    desserts() {
      return this.$store.state.transactionStore.transactions
    }
  },

  data: () => ({
    search: '',
    headers: [
      {
        text: 'Transaction ID',
        align: 'left',
        value: 'id'
      },
      {
        text: 'Value',
        align: 'left',
        value: 'value'
      },
      {
        text: 'Date',
        align: 'left',
        value: 'datestamp'
      },
      {
        text: 'Currency',
        align: 'left',
        value: 'currency'
      },
      {
        text: 'Transaction Type',
        align: 'left',
        value: 'transactionTypeCode'
      }
    ]
  })
})
</script>
