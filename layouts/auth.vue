<template lang="pug">
v-app
  v-main
    nuxt
  Notifications
</template>
<script>
import Notifications from '~/components/Notifications'
export default {
  name: 'AuthLayout',
  components: {
    Notifications
  }
}
</script>