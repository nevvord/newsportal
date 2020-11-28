<template lang="pug">
v-container( fluid )
  v-row
    v-col(
      cols="9"
    )
      v-card
        v-card-title Создать новый пост
        v-card-text
          v-form(
            v-model="valid"
          )
            v-text-field(
              v-model="form.title"
              outlined
              label="Заголоаок"
              name="title"
            )
            v-text-field(
              v-model="form.img"
              outlined
              name="image"
              label="Фото"
            )
            v-textarea(
              v-model="form.smallContent"
              label="Краткое описание"
              outlined
              name="smallContent"
            )
            client-only( placeholder="Loading..." )
              TiptapVuetify(
                v-model="form.content"
                :extensions="extensions"
                label="Полная статья"
              )
          v-card-actions
            v-btn( color="primary" @click="save" ) Сохранить
    v-col(
      cols="3"
    )
      CardNews(
        :post="form"
      )
</template>
<script>
import {
  TiptapVuetify, Heading, Bold, Italic, Strike, Underline,
  Code, Paragraph, BulletList, OrderedList, ListItem,
  Link, Blockquote, HardBreak, HorizontalRule, History
} from 'tiptap-vuetify'
import CardNews from '~/components/cardNews'
export default {
  layout: 'admin',
  components: {
    TiptapVuetify,
    CardNews
  },
  data: function () {return{
    valid: true,
    mounted: false,
    form: {
      content: null,
      title: null,
      smallContent: null,
      img: null
    },
    extensions: [
      History,
      Blockquote,
      Link,
      Underline,
      Strike,
      Italic,
      ListItem,
      BulletList,
      OrderedList,
      [
        Heading,
        {
          options: {
            levels: [1, 2, 3]
          }
        }
      ],
      Bold,
      Link,
      Code,
      HorizontalRule,
      Paragraph,
      HardBreak
    ]
  }},
  methods: {
    save: async function () {
      try {
        const response = await this.$axios.$post('/api/post/add', this.form)
        this.$notify({
          group: 'app',
          type: 'success',
          tytle: 'System',
          text: response.msg
        })
        this.$router.push('/admin')
      } catch (error) {
        this.$notify({
          group: 'app',
          type: 'error',
          tytle: 'System',
          text: error.response ? error.response.data.msg : 'Что-то пошло не так'
        })
      }
    }
  },
  mounted: function () {
    this.$nextTick(() => this.mounted = true)
  }
}
</script>