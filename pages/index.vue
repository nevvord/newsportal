<template lang="pug">
v-container
  v-row
    v-col(
      cols="3"
      v-for="(post, index) in posts" :key="index"
    )
      CardNews( :post="post" )
</template>
<script>
import CardNews from '~/components/cardNews'
export default {
  components: {
    CardNews
  },
  data: function () {return{
    posts: null
  }},
  mounted: async function () {
    try {
      const response = await this.$axios.$get('/api/post/get/all')
      this.posts = response.posts
    } catch (error) {
      this.$notify({
        group: 'app',
        type: 'error',
        tytle: 'System',
        text: error.response ? error.response.data.msg : 'Что-то пошло не так'
      })
    }
  }
}
</script>