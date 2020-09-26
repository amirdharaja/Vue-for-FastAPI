<template>
  <div class="container" id="app">
    <h6><b>TOTAL JOBS : {{ myJobsTotal }}</b></h6>
    <div v-for="job in myJobs" :key="job.id">
      <div class="card bg-light text-dark">
        <div class='card__heading'>
          <h5><b>{{ job.job_details.job_title }}</b> <span>at</span> {{ job.job_details.company_name }}</h5>
          <h6>{{ job.description_short }}</h6>
        </div>
        <div class="card__content">
          <h6 id='experiance'><b>Experiance :</b> {{ job.job_details.experiance_min }} - {{ job.job_details.experiance_max }} Years</h6>
          <h6 id='count'><b>Required : </b>{{ job.job_details.job_count }} No(s)</h6>
          <h6 id='type-location'><b>{{ job.job_details.job_type }}</b> | {{ job.job_details.location }}</h6>
        </div>
        <div class="card__status">
          <h6 id='created' v-if="job.job_details.job_status === 'created'">Created</h6>
          <h6 id='applied' v-else-if="job.job_details.job_status === 'applied'">Applied</h6>
          <h6 id='selected' v-else-if="job.job_details.job_status === 'selected'">Selected</h6>
          <h6 id='rejected' v-else-if="job.job_details.job_status === 'rejected'">Rejected</h6>
          <h6 id='filled' v-else-if="job.job_details.job_status === 'filled'">Position Filled</h6>
          <h6 id='closed' v-else-if="job.job_details.job_status === 'closed'">Closed</h6>
          <h6 id='deleted' v-else-if="job.job_details.job_status === 'deleted'">Job Removed</h6>
        </div>
      </div>
      <br />
    </div>
  </div>
    <Footer />
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Footer from '../components/Footer'

export default {
  components: { Footer },
  computed: {
    ...mapState(['myJobs', 'myJobsTotal']),
    ...mapGetters(['authenticated'])
  },
  created () {
    this.$store.dispatch('getMyJobs')
  }
}
</script>
