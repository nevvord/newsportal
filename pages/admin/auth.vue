<template lang="pug">
v-container( fluid class="grey lighten-3" )
  v-row(
    class="justify-center align-center"
    style="height: calc(100vh - 30px)" 
  )
    v-col(
      cols="12"
      sm="8"
      md="6"
      lg="4"
      xl="6" 
    )
      v-card(
        :loading="loading"
        :disabled="loading"
      )
        v-card-title Signin
        v-form( @submit.prevent="auth" v-model="valid" )
          v-card-text
            v-text-field(
              v-model="form.login"
              :rules="rules.name"
              label='Login'
            )
            v-text-field(
              v-model="form.password"
              label='Password'
            )
          v-card-actions
            v-btn(
              color="green darken-2"
              class="white--text"
              type="submit"
              :disabled="!valid"
            ) Signin
</template>
<script>
import { mapActions } from 'vuex'
export default {
  layout: 'auth',
  data: function () {return{
    valid: false,
    loading: false,
    form: {
      login: null,
      password: null
    },
    rules: {
      name: [
        val => (val || '').length > 0 || 'Логин обязателен',
        val => (val || '').length > 4 || 'Длина логина более 4-х символов'
      ]
    }
  }},
  methods: {
    ...mapActions({
      hideLoading: 'HIDE_LOADING'
    }),
    auth: async function () {
      this.loading = true
      try {
        const response = await this.$auth.loginWith('local', { data: this.form })
        this.loading = false
        this.$router.push('/admin')
        this.$notify({
          group: 'app',
          type: 'success',
          title: 'System',
          text: response.data.msg
        })
      } catch (error) {
        console.error(error)
        this.$notify({
          group: 'app',
          type: 'error',
          title: 'System',
          text: error.response ? error.response.data.msg : 'Что-то пошло не так'
        })
        this.loading = false
      }
    }
  },
  mounted: function () {
    this.$nextTick(this.hideLoading)
  }
}
</script>