<template>
  <div class="vilin-accordion-item vilin-accordion--title">
    <div>
      <slot>{{text}}</slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'vilin-accrodion-item',
  props:{
    text:String
  }
}
</script>

<style lang="stylus" scoped>
  .vilin-accordion-item
    padding-left 20px
    &>div
      border-top 1px solid #e5e5e5;/*no*/
      &>a
        display inline-block
        width 100%
</style>
