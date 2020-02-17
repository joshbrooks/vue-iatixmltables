<template>
  <v-navigation-drawer app clipped permanent>
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AimsSideNav',
  data: () => {
    return {
      dashboard_items: [],
      items: [
        // { title: 'Query Builder', icon: 'mdi-view-dashboard', to: 'qb' },
        { title: 'Home', icon: 'mdi-home', to: '/' },
        { title: 'Activities', icon: 'mdi-image', to: '/activities' },
        { title: 'Transactions', icon: 'mdi-currency-usd', to: '/transactions' },
        {
          title: 'Organisations',
          icon: 'mdi-account-card-details-outline',
          to: 'organisations'
        },
        { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/dashboard' }
        // { title: 'About', icon: 'mdi-help-box', to: 'help' }
      ],

      admin_items: [],

      right: null
    }
  }
})
</script>
