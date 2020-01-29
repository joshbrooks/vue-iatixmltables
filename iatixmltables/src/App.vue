<template>
  <v-app>
    <AimsAppBar />
    <AimsSideNav />
    <v-content>
      <Welcome />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Welcome from './components/Welcome.vue'
import AimsAppBar from './components/AimsAppBar.vue'
import AimsSideNav from './components/AimsSideNav.vue'

export default Vue.extend({
  name: 'App',

  components: {
    'Welcome': Welcome,
    'AimsAppBar': AimsAppBar,
    'AimsSideNav': AimsSideNav
  },

  data: () => ({
    //
  })
})
</script>
