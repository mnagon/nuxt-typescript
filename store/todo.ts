import { getterTree, mutationTree, actionTree } from 'nuxt-typed-vuex'

interface Todo {
  title: string
  done: boolean
}

interface EditTodoTitlePayload {
  title: string
  index: number
}

interface EditTodoDonePayload {
  done: boolean
  index: number
}

interface State {
  todo: Todo[]
}

export const state = (): State => ({
  todo: [],
})

// export const state = () => ({
//   todo: [] as Todo[],
// })

export const getters = getterTree(state, {
  doneTodo: (state) => state.todo.filter((todo) => todo.done),
  undoneTodo: (state) => state.todo.filter((todo) => !todo.done),
})

export const mutations = mutationTree(state, {
  ADD_TODO(state, todo: Todo): void {
    console.log('Add todo mutation', state)
    state.todo.push(todo)
  },
  SET_TODO_TITLE(state, { title, index }: EditTodoTitlePayload): void {
    state.todo[index].title = title
  },
  SET_TODO_DONE(state, { done, index }: EditTodoDonePayload): void {
    state.todo[index].done = done
  },
})

export const actions = actionTree(
  { getters, mutations, state },
  {
    createTodo({ commit }, todo: string): void {
      commit('ADD_TODO', { title: todo, done: false })
    },
    editTodoTitle({ commit }, { title, index }: EditTodoTitlePayload): void {
      commit('SET_TODO_TITLE', { title, index })
    },
    editTodoDone({ commit }, { done, index }: EditTodoDonePayload): void {
      commit('SET_TODO_DONE', { done, index })
    },
    tryRootState(): void {
      console.log(this.app.$accessor.getMessage)
    },
  }
)
