<template>
  <div>
    <h1>Todo</h1>
    <input v-model="newTodo" type="text" @keyup.enter="addTodo" />
    <button @click="addTodo">add todo</button>
    <ul class="todo-wrapper">
      <TodoItem
        v-for="(todo, $todoIndex) in todoList"
        :key="todo.name + $todoIndex"
        :todo="todo"
      />
    </ul>
    {{ $accessor.getMessage }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TodoItem from '~/components/todolist/todoItem.vue'

interface Todo {
  title: string
  done: boolean
}

interface State {
  newTodo: string
}
export default Vue.extend({
  name: 'Todo',
  components: {
    TodoItem,
  },

  data(): State {
    return {
      newTodo: '',
    }
  },

  computed: {
    todoList(): Todo[] {
      return this.$accessor.todo.undoneTodo
    },
    completeList(): Todo[] {
      return this.$accessor.todo.doneTodo
    },
  },

  mounted(): void {
    this.$accessor.todo.tryRootState()
  },

  methods: {
    addTodo(): void {
      if (!this.newTodo) return
      this.$accessor.todo.createTodo(this.newTodo)
      this.newTodo = ''
    },
  },
})
</script>

<style>
.todo-wrapper {
  width: 450px;
  display: flex;
}
</style>
