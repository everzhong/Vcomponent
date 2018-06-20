<template>
  <div id="example" class="layout-content">
    <div class="top-cont">
      <div class="logo">
        <img src="../assets/images/logo.png" alt="logo">
      </div>
      <p class="welcome">Welcome to Vilins <v-icon icon="smileo"/></p>
    </div>
    <v-accordion title="基础组件">
      <template v-for="item in routers.base">
        <v-accordion-item :key="item.text">
          <router-link :to="{path:item.path}">{{item.text}}</router-link>
        </v-accordion-item>
      </template>
    </v-accordion>
  </div>
</template>
<script>
export default {
  name:'UIexamples',
  data(){
    return {
      routers:{
        base:[
          {
            text:'手风琴-Accordion',
            path:'accordion'
          },
          {
            text:'头部-Navbar',
            path:'navbar'
          },
          {
            text:'确认框-Confirm',
            path:'confirm'
          },
          {
            text:'按钮-Button',
            path:'button'
          }
        ]
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  #example
    .top-cont
      text-align center
    & .logo 
      height 120px
      & img 
        height 100%
    & .welcome 
      font-size 18px
      margin 10px 0 38px
</style>
