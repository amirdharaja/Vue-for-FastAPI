<template>
<div>
  <form v-if="authenticated" @submit.prevent='submit' class="container">
  <div class="form-group">
    <input placeholder="Category Name" class="form-control" type="text" name='name' id="name" v-model="form.name"  />
  </div>
  <div>
    <button type="submit" class="btn btn-outline-primary btn-block">CREATE</button>
  </div>
</form>
<div v-else>
<h4 style="color: white; background-color: red">You dont have access rights of this page</h4>
<a href="/"><button class="btn btn-primary">GO HOME</button></a>
</div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'postCategory',
  computed: {
    ...mapGetters(['authenticated'])
  },
  data () {
    return {
      form: {
        name: ''
      }
    }
  },
  methods: {
    ...mapActions({
      postCategory: 'postCategory'
    }),
    async submit () {
      this.postCategory(this.form)
    }
  }
}
</script>
