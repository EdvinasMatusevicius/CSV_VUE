<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/about">About</router-link>
    </div> -->
      <router-link to="/"><h2 class="text-muted m-3">Csv file storage and editing</h2></router-link>
    <router-view class="overflow-auto"/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
