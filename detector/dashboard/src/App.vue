<template>
  <div id="app">
    <img alt="Fake News logo" src="./assets/fakenews.png" width="400" height="200">
    <HelloWorld msg="Fake News Detector For Reddit"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}
body{
  background: rgb(0, 25, 134)
}

</style>
