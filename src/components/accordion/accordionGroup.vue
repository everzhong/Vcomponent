<template>
  <div class="vilin-accordion">
    <div 
      :class="['vilin-accordion--title','vilin-accordion--'+(open?'open':'hide')]"
      @click="onClick"
    >{{title}}</div>
    <div :class="['vilin-accordion--content','vilin-accordion--content'+(open?'_open':'')]">
        <div :class="['vilin-accordion--list--group',(open?'vilin-accordion--list--group_open':'')]"><slot></slot></div>
    </div>
  </div>
</template>
<script>
export default {
  name:'vilin-accordion',
  data(){
    return {
      open:this.show
    }
  },
  props:{
    title:String,
    show:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    onClick(){
      this.open=!this.open
    },
  }
}
</script>
<style lang="stylus">
  .vilin-accordion
    margin-bottom 15px
    background-color #ffffff
    box-shadow 0 1px 1px 0 rgba(0,0,0,.1);/*no*/
    &--title
      line-height 56px
      font-size 16px
      color #333
      position relative
      user-select none
      padding-left 20px
    &--content
      height 0
      overflow hidden
      &_open
        height auto 
    &--list--group
      transform translateY(-50%)
      transition transform .12s ease-out
    &--list--group_open
      transform translateY(0)
    &--open
      color #999
    
</style>


