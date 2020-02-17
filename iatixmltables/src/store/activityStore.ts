import { Activity } from '@/protobuf/transaction_pb'
import crossfilter from 'crossfilter2'

interface ActivityRequest extends Response {
  results: Activity[]
}

export const activityStore = {
  state: {
    activitiesUrl: 'http://localhost:8000/iatistore/iatiactivities.json',
    activities: [],
    activities_loaded: false,
    activities_crossfilter: undefined,
    activities_dimensions: {},
    activities_filtered: []
  },
  mutations: {
    setactivities(state: any, activities: any) {
      // state.activities = activities

      state.activities_crossfilter = crossfilter(activities)
      state.activities_dimensions.by_id = state.activities_crossfilter.dimension(
        (d: any) => d.reporting_org_ref
      )
      state.activities = state.activities_dimensions.by_id
        .filter('US-USAGOV')
        .top(Infinity)
      state.activities_loaded = true
    },
    set_reporting_organisation_filter(a: any, b: any) {
      console.log(a, b) //eslint-disable-line
    }
  },
  actions: {
    fetch(context: any) {
      fetch(context.state.activitiesUrl)
        .then((response: Response) => {
          return response.json()
        })
        .then(json => {
          let results: Activity[] = json.results
          context.commit('setactivities', results)
        })
    }
  },

  getters: {
    activityReportingOrganisations(state: any) {
      let reportingOrganisations: string[] = []
      for (let a of state.activities as Activity[]) {
        let r = a.getReportingOrgRef()
        if (r && reportingOrganisations.indexOf(r) === -1) {
          reportingOrganisations.push(r)
        }
      }
      return reportingOrganisations
    }
  }
}
