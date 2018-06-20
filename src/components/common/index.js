import Vue from 'vue';
import Vmask from './mask';
import merge from 'lodash/merge'
let instance;
let config = {};
let isHas = false;
let MaskConstructor = Vue.extend(Vmask);
export default {
    Mask: (options = {},cb) => {
        instance = new MaskConstructor({
            el: document.createElement('div'),
        });
        merge(instance.$data, config);
        merge(instance.$data, options);
        // 如果页面存在了Mask 则不响应
        if (!isHas && instance.$data.isHasMask ) {
            document.body.appendChild(instance.$el);
            isHas = true;
        }
        const onClick = ()=>{
            if(instance.$data.closeOnclickMask){
                instance.isHasMask = false;
                isHas = false;
                instance.$data.clickMaskCallback && instance.$data.clickMaskCallback();
                cb && cb();
            }
        }
        instance.$on('click-mask',onClick);
    },
    destroyMask:()=>{
        instance.isHasMask = false;
        isHas = false;
    }
};