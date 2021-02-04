<template>
  <li class="todo-item">
    <span>{{ todo.title }}</span>
  </li>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

interface Todo {
  title: string
  done: boolean
}

export default Vue.extend({
  name: 'TodoItem',
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true,
    },
  },
})
</script>

<style>
.todo-item {
  height: 38px;
  display: flex;
  align-items: center;
}
</style>
