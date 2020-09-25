<template>
  <div class="container" id="app">
    <ul>
      <li v-for="job in jobs" :key="job.id">
        {{ job.id }}
      </li>
    </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['jobs'])
  },
  created () {
    this.$store.dispatch('getJobs')
  }
}
</script>
