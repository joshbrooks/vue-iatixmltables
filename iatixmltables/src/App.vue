<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-content>
      <Welcome/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Welcome from './components/Welcome.vue'

export default Vue.extend({
  name: 'App',

  components: {
    Welcome
  },

  data: () => ({
    //
  })
})
</script>
