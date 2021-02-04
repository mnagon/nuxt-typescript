<template>
  <div>
    <nav>
      <nuxt-link to="/"> Home</nuxt-link>
      <nuxt-link to="/todo"> Todolist</nuxt-link>
      <nuxt-link to="/calculator"> Calculator</nuxt-link>
      <nuxt-link to="/tictactoe"> Tictactoe</nuxt-link>
    </nav>
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<style>
body {
  font-family: 'K2D', sans-serif;
}

nav {
  display: flex;
  max-width: 960px;
  margin: auto;
  justify-content: flex-start;
}

nav a {
  text-decoration: none;
  margin-right: 16px;
}

.container {
  max-width: 960px;
  margin: auto;
  padding-left: 16px;
  padding-right: 16px;
}
</style>
