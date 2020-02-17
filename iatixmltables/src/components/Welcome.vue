<template>
  <v-container>
    <v-layout text-center wrap fluid>
      <v-flex mb-4>
        <router-view />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Welcome',

  data: () => ({
    welcome_message: 'Welcome to your AIMS store'
  })
})
</script>
