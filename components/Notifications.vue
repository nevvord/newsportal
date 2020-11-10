<template lang="pug">
notifications( group="app" position="right bottom" )
  template(slot="body" slot-scope="props")
    v-alert(
      :type="props.item.type"
      border="left"
    )
      .title {{props.item.title}}
      div(v-html="props.item.text")
</template>
<script>
export default {
}
</script>