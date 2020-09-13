import Vue from 'vue'

const state = {
  init: false,
  loading: false,
  loginModalShow: false,
}

const mutations = {
  SET(_state, payload) {
    Object.keys(payload).forEach(key => {
      Vue.set(_state, key, payload[key])
    })
  },
  SET_LOGIN_MODAL_SHOW(state, show) {
    console.log('state', state)
    state.loginModalShow = show
  },
}

const actions = {
  init: async ({ commit, dispatch }) => {
    commit('SET', { loading: true })
    // await Promise.all([dispatch('getBlockNumber'), dispatch('metadata')])
    const connector = await Vue.prototype.$auth.getConnector()
    if (connector) await dispatch('login', connector)
    commit('SET', { loading: false, init: true })
  },
  loading: ({ commit }, payload) => {
    commit('SET', { loading: payload })
  }
}

export default {
  state,
  mutations,
  actions
}
