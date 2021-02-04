import {
  getAccessorType,
  getterTree,
  mutationTree,
  actionTree,
} from 'nuxt-typed-vuex'

import * as todo from './todo'

interface State {
  message: string
}

export const state = (): State => ({
  message: 'some message here',
})

// type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  getMessage: (state): string => 'Message: ' + state.message,
})

export const mutations = mutationTree(state, {})

export const actions = actionTree({ state, getters, mutations }, {})

export const accessorType = getAccessorType({
  actions,
  getters,
  mutations,
  state,
  modules: {
    todo,
  },
})
