<template>
  <v-container>
    <v-layout text-center wrap fluid>
      <v-app-bar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        color="blue darken-3"
        dark
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
          <span class="hidden-sm-and-down">AIMS Myanmar</span>
        </v-toolbar-title>
        <v-text-field
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Search"
          class="hidden-sm-and-down"
        />
        <v-spacer />
        <v-btn icon>
          <v-icon>mdi-apps</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-bell</v-icon>
        </v-btn>
        <v-btn icon large>
          <v-avatar size="32px" item>
            <v-img
              src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
              alt="Vuetify"
          /></v-avatar>
        </v-btn>
      </v-app-bar>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to your AIMS store
        </h1>
        <v-alert type="success">
          I'm a success alert.
        </v-alert>
        <p>{{ info }}</p>
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
  }),

  mounted() {
    axios.get('http://example.com').then(response => (this.info = 'Hello! '))
  }
})
</script>
