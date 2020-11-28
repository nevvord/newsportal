<template lang="pug">
v-app
  Navbar
  v-main
    nuxt
    Loader
  Notifications
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import Navbar from '~/components/admin/Navbar'
import Loader from '~/components/Loader'
import Notifications from '~/components/Notifications'
export default {
  components: {
    Navbar,
    Loader,
    Notifications
  },
  methods: {
    ...mapActions({
      hideLoading: 'HIDE_LOADING'
    })
  },
  mounted: function () {
    if (!this.$auth.loggedIn) {
      this.$router.push('/admin/auth')
    } else {
      this.$nextTick(this.hideLoading)
    }
  }
}
</script>