<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'OrganisationTable',
  mounted() {
    if (!this.$store.state.transactions_loaded) {
      this.$store.dispatch('fetch_participating_organisations')
    }
  },
  computed: {
    desserts() {
      return this.$store.state.participating_organisations
    }
  },

  data: () => ({
    headers: [
      {
        text: 'IATI Identifier',
        align: 'left',
        value: 'activity'
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
      }
    ]
  })
})
</script>
