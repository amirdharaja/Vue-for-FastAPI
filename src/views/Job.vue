<template>
  <div class="container" id="app">
    <span v-if="role === 'recruiter'">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link" href="#"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/job/create"><button class="btn btn-primary btn-sm">POST JOB</button></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><button class="btn btn-outline-primary btn-sm">POSTED JOBS</button></a>
        </li>
      </ul>
      <br />
    </span>
    <div v-for="job in jobs" :key="job.id">
      <div class="card bg-light text-dark">
        <div class='card__heading'>
          <h5><b>{{ job.job_title }}</b> <span>at</span> {{ job.company_name }}</h5>
          <h6>{{ job.description_short }}</h6>
        </div>
        <div class="card__content">
          <h6 id='experiance'><b>Experiance :</b> {{ job.experiance_min }} - {{ job.experiance_max }} Years</h6>
          <h6 id='count'><b>Required : </b>{{ job.job_count }} No(s)</h6>
          <h6 id='type-location'><b>{{ job.job_type }}</b> | {{ job.location }}</h6>
        </div>
        <div class="card__confirm">
          <span v-if = "authenticated">
          <button class="btn btn-light">APPLY</button>
          </span>
          <span v-else>
          <button class="btn btn-secondary btn-sm" disabled>APPLY</button>
          </span>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState(['jobs', 'role']),
    ...mapGetters(['authenticated'])
  },
  created () {
    this.$store.dispatch('getJobs')
  }
}
</script>
