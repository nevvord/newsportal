<template lang="pug">
v-footer(
  app
  padless
)
  v-card(
    flat
    tile
    width="100%"
    class="red lighten-1 text-center"
  )
    //- v-card-text
    //-   v-btn(
    //-     v-for="icon in icons" :key="icon"
    //-     icon
    //-     class="mx-4"
    //-   )
    //-     v-icon( size="24px" ) {{ icon }}
    //- v-divider
    v-card-text( class="white--text" )
      span {{ new Date().getFullYear() }} — 
      strong Mashins
</template>
<script>
export default {
  data: function () {return{
    icons: [
      'mdi-home',
      'mdi-email',
      'mdi-calendar',
      'mdi-delete'
    ]
  }}
}
</script>