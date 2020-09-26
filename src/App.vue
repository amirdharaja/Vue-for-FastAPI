<template>
  <div id="nav">
    <router-link :to="{name: 'Home'}">Home</router-link> |
    <router-link :to="{name: 'Job'}">Jobs</router-link> |
    <span v-if="authenticated">
    <router-link :to="{name: 'MyJob'}">My Jobs</router-link> |
    <button class="btn btn-outline-danger btn-sm" @click="logout">Logout</button>
    </span>
    <span v-else>
    <router-link :to="{name: 'Login'}">Login</router-link> |
    <router-link :to="{name: 'Signup'}">Signup</router-link> |
    </span>
  </div>
  <router-view/>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['authenticated'])
  },
  methods: {
    ...mapActions({
      logout: 'logout'
    })
  }
}
</script>
