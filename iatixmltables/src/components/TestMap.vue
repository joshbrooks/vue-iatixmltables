<template><v-card>
    <v-card-title> Locations</v-card-title>
    <v-spacer></v-spacer>
    <v-map id="map" :zoom="13" :center="[47.41322, -1.219482]">
      <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
      <v-marker :lat-lng="[47.41322, -1.219482]"></v-marker>
    </v-map>
  </v-card>
</template>

<style scoped>
@import '~leaflet/dist/leaflet.css';
  #map {
    height: 500px;
  }
</style>

<script lang="ts">
import Vue from 'vue'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
export default Vue.extend({
  name: 'TestMap',
  components: {
    'v-map': LMap,
    'v-tilelayer': LTileLayer,
    'v-marker': LMarker
  }
})
</script>
