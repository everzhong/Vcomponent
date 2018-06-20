<template>
  <component
    class="vilin-button"
    :is="nodeName"
    :disabled="disabled"
    :style="styls"
    :class="[
      'vilin-button-'+type,
      'vilin-button-'+size,
      {
        'vilin-button-disabled':disabled,
        
      }
    ]"
    @click="onClick"
  >
   <slot>{{text}}</slot>
  </component>
</template>
<script>
export default {
  props:{
    text:String,
    nodeName:{
      type:String,
      default:'button'
    },
    disabled:Boolean,
    type:{
      type:String,
      default:'default'
    },
    size:{
      type:String,
      default:'normal'
    },
    styls:[String,Object]
  },
  methods:{
    onClick(e){
      this.$emit('click',e)
    }
  }
}
</script>

<style lang="stylus" scoped>
.vilin-button
  position relative
  display inline-block
  height 46px
  line-height 46px
  border-radius 4px
  text-align center 
  appearance none 
  outline none
  margin-bottom 10px
  padding 0 15px
  font-size 16px
  border 1px solid transparent;/*no*/
  &-normal
    font-size 14px
  &-default
    background-color #ffffff
    border-color  #e5e5e5
    color #323232
  &-primary
    background-color #337ab7
    border-color #2e6da4
    color #ffffff
  &-success
    background-color #5cb85c
    border-color #4cae4c
    color #ffffff
  &-danger
    background-color #d9534f
    border-color #d43f3a
    color #ffffff
  &-lg
    height 50px
    width 100%
    line-height 50px
  &-sm
    height 30px
    line-height 30px
    padding 0 8px
    font-size 12px
    min-width 60px
    border-radius 2px
  &-disabled
    color #999
    background-color #e5e5e5
    border-color #ccc

</style>
