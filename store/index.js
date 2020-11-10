export const state = () => ({
  _LOADING: true
})

export const getters = {
  GET_LOADING: state => state._LOADING
}

export const mutations = {
  SHOW_LOADING: state => state._LOADING = true,
  HIDE_LOADING: state => state._LOADING = false
}

export const actions = {
  SHOW_LOADING: ({ commit }) => commit('SHOW_LOADING'),
  HIDE_LOADING: ({ commit }) => commit('HIDE_LOADING')
}