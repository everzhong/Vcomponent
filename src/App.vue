<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="stylus">
@import './components/baseStyles/index.styl';
body
  background-color #f5f5f5
  padding 0
  margin 0
.layout-content
  padding 20px 10px 0
.example-title 
  font-size 18px
  color #999
  padding 20px 0 15px
#app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50;
</style>
