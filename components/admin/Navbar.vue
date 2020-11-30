<template lang="pug">
v-app-bar(
  app
  color="deep-purple accent-4"
)
  Logo
  v-spacer
  v-btn( text color="white" @click="logout" ) Выход
</template>
<script>
import Logo from './Logo'
export default {
  components: {
    Logo
  },
  methods: {
    logout: async function () {
      await this.$auth.logout()
    }
  }
}
</script>