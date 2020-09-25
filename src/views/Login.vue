<template>
<form @submit.prevent='submit'>
  <div>
    <label for='username'>Username </label>
    <input type="text" name='username' id="username" v-model="form.username" />
  </div>
  <div>
    <label for='password'>Password </label>
    <input type="password" name='password' id="password" v-model="form.password" />
  </div>
  <div>
    <button type="submit">Login</button>
  </div>
</form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      login: 'login'
    }),
    async submit () {
      this.login(this.form)
    }
  }
}
</script>
