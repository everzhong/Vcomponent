<template>
  <div>
    <v-navbar title="按钮Button">
      <router-link slot="left" :to="{path:'/'}">
      <span>返回</span>
      </router-link>
    </v-navbar>
    <div class="layout-content">
      <p class="example-title">按钮类型</p>
      <v-button  text="Default" />
      <v-button type="primary" text="Primary" />
      <v-button type="success" text="Success" />
      <v-button type="danger" text="Danger" />
      <p class="example-title">按钮尺寸</p>
      <v-button size="lg" text="大号按钮" />
      <v-button type="primary" size="lg" text="大号按钮" />
      <v-button type="success" size="lg" text="大号按钮" />
      <v-button type="danger" size="lg" text="大号按钮" />
      <v-button size="sm" text="小号按钮" />
      <v-button type="primary" size="sm" text="小号按钮" />
      <v-button type="success" size="sm" text="小号按钮" />
      <v-button type="danger" size="sm" text="小号按钮" />

       <p class="example-title">禁用状态</p>
        <v-button :disabled = true text="禁用状态" />

      <p class="example-title">自定义主题色</p>
      <v-button :styls="{'background':'#eb333b','color':'#fff','border-color':'transparent'}" text="自定义主题色" />
      
    </div>
  </div>
</template>
