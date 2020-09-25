<template>
<form @submit.prevent='submit' class="container">
   {{ form }}
   <div class="form-group">
    <!-- <label for='first_name'>Firstname</label> -->
    <input placeholder="First Name" class="form-control" type="text" name='first_name' id="first_name" v-model="form.first_name"  />
  </div>
  <div class="form-group">
    <!-- <label for='last_name'>Lastname</label> -->
    <input placeholder="Last Name" class="form-control" type="text" name='last_name' id="last_name" v-model="form.last_name" />
  </div>
    <div class="form-group">
    <!-- <label for='phone'>Phone Number</label> -->
    <input placeholder="Phone Number" class="form-control" type="text" name='phone' id="phone" v-model="form.phone"  />
  </div>
  <div class="form-group">
    <!-- <label for='username'>Email</label> -->
    <input placeholder="Email ID" class="form-control" type="email" name='username' id="username" v-model="form.username"  />
  </div>
    <div class="form-group">
    <!-- <label for='password'>Password</label> -->
    <input placeholder="Password" class="form-control" type="password" name='password' id="password" v-model="form.password" />
  </div>
  <div class="form-group">
    <!-- <label for='confirm_password'>Confirm Password</label> -->
    <input placeholder="Confirm Password" class="form-control" type="text" name='confirm_password' id="confirm_password" v-model="form.confirm_password"  />
  </div>
  <div class="form-group">
    <!-- <label for='gender'>Gender</label> -->
    <select class="form-control" type="text" name='gender' id="gender" v-model="form.gender" >
       <option value="male">Male</option>
       <option value="female">Female</option>
       <option value="other">Other</option>
    </select>
  </div>
    <div class="form-group">
    <!-- <label for='role'>Type</label> -->
    <select class="form-control" type="text" name='role' id="role" v-model="form.role" >
       <option value="user">Candidate</option>
       <option value="recruiter">Recruiter</option>
    </select>
  </div>
  <div>
    <button type="submit" class="btn btn-outline-primary btn-block">Register</button>
  </div>
</form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'register',
  data () {
    return {
      form: {
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        confirm_password: '',
        phone: '',
        gender: '',
        role: ''
      }
    }
  },
  methods: {
    ...mapActions({
      register: 'register'
    }),
    async submit () {
      this.register(this.form)
    }
  }
}
</script>
