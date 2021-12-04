<template>
  <router-view></router-view>
  <div class="app__background" />
</template>

<script>
// @ is an alias to /src
export default {
  name: 'App',
}
</script>

<style lang="scss">
body {
  background-color: #101013;
  margin: 0;
  height: 90vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.app__background {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
  filter: opacity(.8) brightness(1.25);
  background-image: url('https://images.unsplash.com/photo-1528819027803-5473f2bf7633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=2260&q=5');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 768px) {
    background-image: url('https://images.unsplash.com/photo-1528819027803-5473f2bf7633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=70');
  }
}
</style>
