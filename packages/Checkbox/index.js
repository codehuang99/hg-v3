import Checkbox from "./src/Checkbox.vue";
import checkboxGroup from "./src/checkboxGroup.vue";

// 为组件提供 install 安装方法，供按需引入
Checkbox.install = function (Vue) {
  Vue.component(Checkbox.name, Checkbox);
};

checkboxGroup.install = function (Vue) {
  Vue.component(checkboxGroup.name, checkboxGroup);
};

// 默认导出组件
export { Checkbox, checkboxGroup };
