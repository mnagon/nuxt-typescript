<template>
  <div>
    <h3>User component</h3>
    <p>{{ user.name }}</p>
    <p>{{ user.age }}</p>
    <p>{{ favorite }}</p>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

interface User {
  name: string
  age: number
  favorite: string[]
}

export default Vue.extend({
  name: 'TypescriptProps',

  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },

  computed: {
    favorite(): string {
      return this.user.favorite.join(', ')
    },
  },
})
</script>

<style></style>
