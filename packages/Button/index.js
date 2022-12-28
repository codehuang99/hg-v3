import HButton from "./src/HButton.vue";

// 为组件提供 install 安装方法，供按需引入
HButton.install = function (Vue) {
  Vue.component(HButton.name, HButton);
};

// 默认导出组件
export default HButton;
