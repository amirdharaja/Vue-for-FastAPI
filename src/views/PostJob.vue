<template>
<form @submit.prevent='submit' class="container">
   <div class="form-group">
    <label for='category'>Category</label>
    <select class="form-control" type="text" name='category' id="category" v-model="form.category">
        <option v-for="category in categories" :key="category.id">{{ category.name }}</option>
    </select>
  </div>
  <div class="form-group">
    <input placeholder="Company Name" class="form-control" type="text" name='company_name' id="company_name" v-model="form.company_name" />
  </div>
    <div class="form-group">
    <input placeholder="Job Title" class="form-control" type="text" name='job_title' id="job_title" v-model="form.job_title"  />
  </div>
  <div class="form-group">
    <label for='job_type'>Type</label>
    <select class="form-control" type="email" name='job_type' id="job_type" v-model="form.job_type">
      <option value="full time">Full time</option>
      <option value="part time">Part Time</option>
      <option value="internship">Internship</option>
    </select>
  </div>
    <div class="form-group">
    <input placeholder="Minimum Experiance" class="form-control" type="number" name='experiance_min' id="experiance_min" v-model="form.experiance_min" />
  </div>
  <div class="form-group">
    <input placeholder="Maximum Experiance" class="form-control" type="number" name='experiance_max' id="experiance_max" v-model="form.experiance_max" />
  </div>
  <div class="form-group">
    <input placeholder="Required Count" class="form-control" type="number" name='job_count' id="job_count" v-model="form.job_count"  />
  </div>
  <div class="form-group">
    <input placeholder="Location" class="form-control" type="text" name='location' id="location" v-model="form.location"  />
  </div>
  <div class="form-group">
    <input placeholder="Short Description in max of 255 char" maxlength="255" class="form-control" type="text" name='description_short' id="description_short" v-model="form.description_short"  />
  </div>
  <div class="form-group">
    <textarea rows="5" placeholder="Long Description" class="form-control" type="text" name='description_long' id="description_long" v-model="form.description_long"  />
  </div>
  <div>
    <button type="submit" class="btn btn-outline-primary btn-block">POST JOB</button>
  </div>
</form>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  name: 'postJob',
  computed: {
    ...mapState(['categories']),
    ...mapGetters(['authenticated'])
  },
  created () {
    this.$store.dispatch('getCategories')
  },
  data () {
    return {
      form: {
        category: '',
        company_name: '',
        job_title: '',
        job_type: '',
        experiance_min: '',
        experiance_max: '',
        job_count: '',
        location: '',
        description_short: '',
        description_long: ''
      }
    }
  },
  methods: {
    ...mapActions({
      postJob: 'postJob'
    }),
    async submit () {
      this.postJob(this.form)
    }
  }
}
</script>
