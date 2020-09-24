<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Header msg="Welcome to SARAH JOBS"/>
    <Media />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Media from '@/components/Media.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header, Media, Footer
  }
}
</script>
