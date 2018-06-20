<template>
  <v-navbar
    title="Nav-bar"
    rightText="确定"
    @click-right="onClickRight"
  >
    <router-link :to="{path:'/'}" slot="left">
    <v-icon icon="left"></v-icon>
    返回
    </router-link>
  </v-navbar>
</template>
<script>
export default {
  data(){
    return {
      title:"Nav-bar",
    }
  },
  methods:{
    onClickRight(){
      console.log('Click mask callback function')
    },
  }

}
</script>
