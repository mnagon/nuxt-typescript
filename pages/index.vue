<template>
  <div>
    <h1>
      <i class="fas fa-book-open"></i> Nuxt.js and Typescript practice projects
    </h1>
    <p>
      I'm using this project to make myself more understanding how Nuxt.js and
      Typescript work, Let follow these link to check it out!
    </p>
    <ul>
      <li>
        <nuxt-link to="/todolist"> Todolist</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/calculator"> Calculator</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/tictactoe"> Tictactoe</nuxt-link>
      </li>
    </ul>
    <div>
      <h2>Practice area</h2>
      <p>
        {{ title }}
      </p>

      <p>
        {{ num }}
      </p>
      <p>
        {{ userInfo }}
      </p>
      <TypescriptProp :user="user" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TypescriptProp from '~/components/TypescriptProps.vue'

const boo: (string | boolean)[] = ['yes', true, 'something', false]

interface User {
  name: string
  age: number
  favorite: string[]
}

interface State {
  title: string
  num: number
  user: User
  boo: (string | boolean)[]
}

export default Vue.extend({
  components: {
    TypescriptProp,
  },
  data(): State {
    return {
      title: 'Here is how we set the type for vue state',
      num: 0,
      boo,
      user: {
        name: 'mnagon',
        age: 27,
        favorite: ['codeing', 'game'],
      },
    }
  },

  computed: {
    userInfo(): string {
      const favorite: string = this.user.favorite.join(', ')
      return (
        this.user.name +
        ': ' +
        this.user.age +
        ' year old and favorite for ' +
        favorite
      )
    },
    computedTitle: {
      get(): string {
        return this.title + 'eiei'
      },
      set(val: string): void {
        this.title = val
      },
    },
  },

  watch: {
    title(): void {
      this.num += 1
    },
  },

  mounted() {
    this.getAndSetComputedTitle()
    console.log(this.boo)
  },

  methods: {
    getAndSetComputedTitle(): void {
      this.computedTitle = 'Test computed set function'
    },
  },
})
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
