<template>
  <div class="container" id="app">
    <span v-if="role === 'recruiter'">
      <div v-if="!postedJobs || postedJobs.length === 0">
        <h5 style="color: white; background-color: orange">YOU DONT HAVE ANY PREVIOUS POSTS</h5>
      </div>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link" href="#"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/job/create"><button class="btn btn-primary btn-sm">POST JOB</button></a>
        </li>
      </ul>
      <br />
    <div v-for="job in postedJobs" :key="job.id">
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
        <div class="card__actions">
          <form @submit.prevent='remove (job.id)'>
              <button class="btn btn-outline-danger btn-sm" type="submit">REMOVE JOB</button>
          </form>
        </div>
      </div>
      <br />
    </div>
    </span>
    <span v-else><h4 style="color: white; background-color: red">You dont have access rights of this page</h4></span>
  </div>
    <Footer />
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import Footer from '../components/Footer'

export default {
  components: { Footer },
  computed: {
    ...mapState(['postedJobs', 'role']),
    ...mapGetters(['authenticated'])
  },
  data () {
    return {
      form: {
        job_id: ''
      }
    }
  },
  created () {
    this.$store.dispatch('getPostedJobs')
  },
  methods: {
    ...mapActions({
      removeJob: 'removeJob'
    }),
    async remove (jobID) {
      this.removeJob(jobID)
    }
  }
}
</script>
