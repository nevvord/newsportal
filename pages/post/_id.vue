<template lang="pug">
v-container( v-if="post" )
  h1 {{ post.title }}
  v-img( :src="post.img" )
  div( class="mt-4"  v-html="post.content" )
    
</template>
<script>
export default {
  data: function () {return{
    post: null
  }},
  mounted: async function () {
    try {
      const response = await this.$axios.$get(`/api/post/get/${this.$route.params.id}`)
      this.post = response.post
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