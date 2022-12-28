import Radio from "./src/Radio.vue";
import RadioGroup from "./src/Radio-Group.vue";

// 为组件提供 install 安装方法，供按需引入
Radio.install = function (Vue) {
  Vue.component(Radio.name, Radio);
};

RadioGroup.install = function (Vue) {
  Vue.component(RadioGroup.name, RadioGroup);
};

// 默认导出组件
export { Radio, RadioGroup };
