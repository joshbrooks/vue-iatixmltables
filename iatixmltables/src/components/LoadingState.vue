<template>
  <div class="text-center">
    <v-skeleton-loader class="mx-auto" max-width="300" type="card"></v-skeleton-loader>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'LoadingState'
})
</script>
