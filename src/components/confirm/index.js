import Vue from 'vue'
import vConfirm from './confirm'
import merge from 'lodash/merge'
// import vMask from '@/components/common/mask'
import vMask from '@/components/common/index'

let confirm;
// let mask;
let config = {};
let ConfirmConstrutor = Vue.extend(vConfirm);
// let MaskConstrutor = Vue.extend(vMask);
let init = ()=>{
  confirm = new ConfirmConstrutor({
    el:document.createElement('div')
  })
  // mask = new MaskConstrutor({
  //   el:document.createElement('div')
  // })
  confirm.$data.show=true;//如果show是在组件内默认为true，定义的进场动画不起作用,
}
let Confirm = (options)=>{
  init();
  merge(confirm.$data, config);
  merge(confirm.$data, options);
  // merge(mask.$data, confirm.$data);
  if(confirm.$data.show){
    document.body.appendChild(confirm.$el);
  }
  // if(mask.$data.isHasMask){
  //   document.body.appendChild(mask.$el);
  // }
  vMask.Mask(confirm.$data,function(){
    destroy();
  });
  const destroy = ()=>{
    confirm.$data.show = false;
    vMask.destroyMask();
  }
  const onClikCancel=()=>{
    destroy();
    confirm.$data.clickCancelCallback && confirm.$data.clickCancelCallback();
  }
  const onClickSure=()=>{
    destroy();
    confirm.$data.clickSureCallback && confirm.$data.clickSureCallback();
  }
  // const onClickMask=()=>{
  //   if(mask.$data.closeOnclickMask){
  //     destroy();
  //     mask.$data.clickMaskCallback && mask.$data.clickMaskCallback();
  //   }
  // }
  confirm.$on('click-cancel',onClikCancel)
  confirm.$on('click-sure',onClickSure)
  // mask.$on('click-mask',onClickMask)
}

export default {
  install (Vue, myConfig={}) {
      config = myConfig;
      Vue.prototype.$confirm = Confirm;
  }
};