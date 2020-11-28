<template lang="pug">
v-app
  Navbar
  v-main
    nuxt
  Footer
</template>

<script>
import Navbar from '~/components/public/Navbar'
import Footer from '~/components/public/Footer'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
