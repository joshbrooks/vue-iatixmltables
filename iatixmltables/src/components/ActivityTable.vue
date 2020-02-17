<template>
  <v-card>
    <v-card-title>
      Activities
      <v-spacer></v-spacer>

      <v-container-fluid>
        <v-row>
          <v-col cols="12">
            <v-autocomplete
              v-model="reporting_organisation_filter"
              :items="reporting_organisation_options"
              outlined
              dense
              chips
              small-chips
              label="Reporting Organisation"
              multiple
            ></v-autocomplete>
          </v-col>
        </v-row>
      </v-container-fluid>

      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table
      dense
      :headers="headers"
      :items="desserts"
      :items-per-page="15"
      class="elevation-1"
      :search="search"
      @click:row="methodName"
    ></v-data-table>
  </v-card>
</template>
<script>
import Vue from 'vue'
import router from '../router'
export default Vue.extend({
  name: 'ActivityTable',

  mounted() {
    if (!this.$store.state.activities_loaded) {
      this.$store.dispatch('fetch')
    }
  },
  computed: {
    desserts() {
      return this.$store.state.activities
    },
    reporting_organisation_options() {
      return this.$store.state.reporting_organisations
    }
  },
  data: () => ({
    methodName(e) {
      let id = e.iati_identifier
      router.push({
        name: 'activity-detail',
        params: { activity_id: e.iati_identifier }
      })
    },
    watch: {
      reporting_organisation_filter: function(a, b) {
        this.$store.dispatch('set_reporting_organisation_filter', a, b)
      }
    },
    search: '',
    reporting_organisation_filter: undefined,
    headers: [
      {
        text: 'IATI Identifier',
        align: 'left',
        value: 'iati_identifier'
      },
      {
        text: 'Reporting Org Ref',
        align: 'left',
        value: 'reporting_org_ref'
      },
      {
        text: 'IATI Version',
        align: 'left',
        value: 'iati_version'
      }
    ]
  })
})
</script>
