import Selector from "./src/Selector.vue";

// 为组件提供 install 安装方法，供按需引入
Selector.install = function (Vue) {
  Vue.component(Selector.name, Selector);
};

// 默认导出组件
export default Selector;
