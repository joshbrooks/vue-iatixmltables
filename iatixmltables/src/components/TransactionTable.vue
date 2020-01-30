<template>
  <v-data-table :headers="headers" :items="desserts" :items-per-page="5" class="elevation-1"></v-data-table>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'TransactionTable',
  mounted() {
    if (!this.$store.state.transactions_loaded) {
      this.$store.dispatch('fetch_transactions')
    }
  },
  computed: {
    desserts() {
      return this.$store.state.transactions
    }
  },

  data: () => ({
    headers: [
      {
        text: 'IATI Identifier',
        align: 'left',
        value: 'iati_identifier'
      },
      {
        text: 'Value',
        align: 'left',
        value: 'value'
      },
      {
        text: 'Date',
        align: 'left',
        value: 'value_value_date'
      },
      {
        text: 'Currency',
        align: 'left',
        value: 'value_currency'
      }
    ]
  })
})
</script>
