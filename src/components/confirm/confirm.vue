
<template>
  <transition name="scale">
    <div class="vilin-confirm" v-if="show">
      <div class="vilin-confirm-title" v-if="title">{{title}}</div>
      <div class="vilin-confirm-content" :style="'text-align:'+textAlign"><slot>{{content}}</slot></div>
      <div class="vilin-confirm-button">
        <span class="vilin-confirm-button-cancel" @click="onClickCancel">取消</span>
        <span class="vilin-confirm-button-sure" @click="onClickSure">确定</span>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data(){
    return {
      show:false,
      textAlign:'center',
      title:'提示',
      content:"内容"
    }
  },
  methods:{
    onClickCancel(){
      this.$emit('click-cancel')
    },
    onClickSure(){
       this.$emit('click-sure')
    }
  },
}
</script>

<style lang="stylus" scoped>
.vilin-confirm
  background-color #fff
  position fixed
  z-index 9999
  top 50%
  left 50%
  overflow hidden
  width 270px
  -webkit-transform:translate3d(-50%,-50%,0)
  text-align center
  color:#323232;
  border-radius 6px;
  transition .2s
  &-title
    font-size 18px
    font-weight 500
    padding 15px 0 0
  &-content
    position relative
    font-family inherit 
    font-size 14px
    line-height 18px
    padding 20px 15px 
    color #5e5e5e
    letter-spacing 1px;/*no*/
    &:after
      position absolute
      z-index 15
      top  auto
      right auto
      bottom 0
      left 0
      display: block
      width 100%
      height 1px
      content ''
      transform scaleY(.5)
      transform-origin 50% 100%
      background-color rgba(0, 0, 0, .2)
  &-button
    height 44px
    position relative
    display flex
    justify-content center
    &-cancel,&-sure
      display block
      line-height 44px
      font-size 17px
      overflow hidden
      position relative
      width 100%
      white-space nowrap
      text-overflow ellipsis
      color #3284ea
    &-cancel:after
      position absolute
      z-index 15
      top  0
      right 0
      bottom 0
      display: block
      width 1px
      height 100%
      content ''
      transform scaleX(.5)
      transform-origin 50% 100%
      background-color rgba(0, 0, 0, .2)
.scale-enter 
  opacity 0
  transform translate3d(-50%, -50%, 0) scale(0.7)
  
.scale-leave-active 
  opacity 0
  transform translate3d(-50%, -50%, 0) scale(0.9)

</style>
