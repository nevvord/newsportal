<template lang="pug">
.loader( v-if="status" )
  v-progress-circular(
    :size="70"
    :width="7"
    color="purple"
    indeterminate
  )
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      status: 'GET_LOADING'
    })
  }
}
</script>
<style>
.loader {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  z-index: 100000;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>