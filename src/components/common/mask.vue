<template>
  <transition name="fade">
    <div class="vilin-mask" @click="onClickMask" v-if="isHasMask"></div>
  </transition>
</template>
<style lang="stylus" scoped>
.vilin-mask 
  position fixed
  width 100%
  height 100%
  top 0
  z-index 9998
  background:rgba(0,0,0,.6)
  transition opacity .2s
.fade-enter,.fade-leave-active
  opacity 0

</style>
<script>
export default {
  data(){
    return {
      isHasMask:true,
      closeOnclickMask:false,
    }
  },
  methods:{
    onClickMask(){
      this.$emit('click-mask')
    }
  }
}
</script>
