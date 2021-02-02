import { getAccessorType, mutationTree, actionTree } from 'nuxt-typed-vuex'
import { Context } from '@nuxt/types'

import * as submodule from './submodule'

export const state = () => ({
  email: 'Fuck you i fogot toin clude email ??',
})

type RootState = ReturnType<typeof state>

export const getters = {
  email: (state: RootState) => state.email,
  fullEmail: (state: RootState) => state.email,
}

export const mutations = mutationTree(state, {
  setEmail(state, newValue: string) {
    state.email = newValue
  },

  initialiseStore() {
    console.log('initialised')
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    resetEmail({ commit }) {
      commit('setEmail', 'a@a.com')
    },

    nuxtServerInit(_vuexContext, nuxtContext: Context) {
      console.log(nuxtContext.req)
    },
  }
)

export const accessorType = getAccessorType({
  actions,
  getters,
  mutations,
  state,
  modules: {
    submodule,
  },
})
