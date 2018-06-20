<template>
<div>
  <v-navbar title="手风琴Accordion" @click-left="onClickLeft" @click-right="onClickRight" rightText="确定">
    <router-link slot="left" :to="{path:'/'}">
    <span>返回</span>
    </router-link>
  </v-navbar>
  <div class="layout-content">
    <p class="example-title">基础用法</p>
    <v-accordion 
      title="Accordion-基础用法"
    >
      <v-accordion-item text="列表1" />
      <v-accordion-item text="列表2" />
      <v-accordion-item text="列表3" />
      <v-accordion-item text="列表4" />
      <v-accordion-item text="列表5" />
    </v-accordion>
    
    <p class="example-title">自定义内容</p>

    <v-accordion 
      title="Accordion-自定义内容"
    >
      <div style="font-size:18px;padding-left:20px;color:pink;font-weight:700;line-height:42px">
        <span>Contents by custermers </span>
      </div>
    </v-accordion>

  </div>
</div>
</template>
<script>
export default {
  methods:{
    onClickLeft(){
      console.log('返回')
    },
    onClickRight(){
      this.$confirm({
        textAlign:'left',//默认是center
        title:'温馨提示',//如果不用title可设置 title:false
        closeOnclickMask:true,
        clickCancelCallback:()=>{
          console.log('Click cancel')
        },
        clickSureCallback:()=>{
          console.log('Click Sure')
        },
      })
    }
  }
}
</script>
