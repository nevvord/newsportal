export const state = () => ({
  _AUTH: false
})

export const getters = {
  GET_AUTH: state => state._AUTH
}

export const mutations = {
  SIGNIN: state => state._AUTH = true,
  SIGNOUT: state => state._AUTH = false
}

export const actions = {
  SIGNIN: ({ commit }) => commit('SIGNIN'),
  SIGNOUT: ({ commit }) => commit('SIGNOUT')
}