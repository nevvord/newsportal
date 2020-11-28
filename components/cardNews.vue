<template lang="pug">
v-card
  v-img( width="100%" height="300px" :src="post.img" )
  v-card-title {{ post.title }}
  v-card-text {{ post.smallContent }}
  v-card-actions
    v-btn(
      nuxt
      text
      color="primary"
      :to="post._id ? `/post/${post._id}` : ''"
    ) Подробнее
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      required: false,
      default: {
        title: 'Wait',
        smallContent: 'Wait',
        id: null,
        img: '/noimg.png'
      }
    }
  }
}
</script>