<template>
  <div>
     <v-navbar title="确认框Confirm">
    <router-link slot="left" :to="{path:'/'}">
    <span>返回</span>
    </router-link>
  </v-navbar>
   <div class="layout-content">
     <div 
      v-for="item in items"
      :key = item.content
     >
      <p class="example-title"></p>
      <v-button :text="item.content" @click="onClick(item)"></v-button>
     </div>
     
   </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      items:[{
        content:"默认用法"
      },{
          title:false,
          content:"无标题用法"
        },{
          textAlign:'left',
          content:"内容左对齐"
        },{
          textAlign:'right',
          content:"内容右对齐"
        },{
          closeOnclickMask:true,
          content:'点击蒙层关闭弹框'
        }]
    }
  },
  methods:{
    onClick(opt){
      this.$confirm(opt)
    }
  }
}

</script>

