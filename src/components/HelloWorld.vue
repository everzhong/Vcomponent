<template>
  <div class="hello">
    <h1>{{ msg }}<v-icon icon="smileo"/></h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Vilins '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  h1
    font-weight normal
    color #232323
    font-size 18px;/*no*/
    &>i
      display inline-block
</style>
 
