<template>
  <i :class="['anticon',icon.indexOf('-')>-1?'icon-'+icon.replace(/\-/g,''):'icon-'+icon]" ></i>
</template>
<script>
export default {
  name:'v-icon',
  props:{
    icon:{
      type:String
    }
  }
}
</script>
