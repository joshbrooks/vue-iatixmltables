<template>
  <v-container>
    <v-layout text-center wrap fluid>
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to your AIMS store
        </h1>
        <v-alert type="success">
          I'm a success alert.
        </v-alert>

        <p>{{ info }}</p>
        <router-view />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
export default Vue.extend({
  name: 'Welcome',

  data: () => ({
    info: 'Hi'
  })

  // mounted() {
  //   axios.get('http://example.com').then(response => (this.info = 'Hello! '))
  // }
})
</script>
