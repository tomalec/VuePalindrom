<template>
  <div id="app">
    <label>hello</label>
    <input type="text" v-model="this.name$">

  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  },
  data: function() {
    return {
      name$: ''
    }
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
