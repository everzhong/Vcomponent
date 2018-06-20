<template>
  <div class="vilin-nav-bar">
    <div class="vilin-nav-bar-left" @click="onClickLeft">
      <slot name="left">
        <v-icon v-if="leftArrow" class="vilin-nav-bar-arrow" icon="left"/>
        <span v-if="leftText" v-text="leftText" class="vilin-nav-bar-text">{{leftText}}</span>
      </slot>
    </div>
    <div class="vilin-nav-bar-title">
      <slot name="title">{{title}}</slot>
    </div>
    <div class="vilin-nav-bar-right" @click="onClickRight">
      <slot v-if="rightText" v-text="rightText" class="vilin-nav-bar-text">{{rightText}}</slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'nav-bar',
  props:{
    title:String,
    leftText:{
      type:String,
      default:'返回'
    },
    rightText:{
      type:String,
    },
    leftArrow:{
      type:Boolean,
      default:true
    }
  },
  methods:{
    onClickLeft() {
      this.$emit('click-left')
    },
    onClickRight(){
      this.$emit('click-right')
    }
  }
}
</script>
<style lang="stylus" scoped>
.vilin-nav-bar
  height 46px
  line-height 46px
  position relative
  background-color #ffff;
  z-index 999
  &-left 
    position absolute
    top 0
    padding:0 20px 
    font-size 14px
    & i 
      display inline-block
  &-text
      vertical-align: middle;
      padding: 0 10px 0 20px;
      margin: -4px -20px 0;
      display: inline-block; 
  &-title 
    text-align center
    max-width 54%
    margin 0 auto 
    font-size 16px
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
  &-right
    position absolute
    top 0
    right 0
    padding 0 15px
    font-size 14px
</style>
