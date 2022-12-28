// 导入组件
import HButton from "./Button";
import { Checkbox, checkboxGroup } from "./Checkbox";
import Dialog from "./Dialog";
import Input from "./Input";
import Message from "./Message";
import { Radio, RadioGroup } from "./Radio";
import Selector from "./Selector";
import { SideBar, ReSubMenu, SubMenuItem, MenuItem } from "./SideBar";

// 存储组件列表
const components = [
  HButton,
  Checkbox,
  checkboxGroup,
  Dialog,
  Input,
  Message,
  Radio,
  RadioGroup,
  Selector,
  SideBar,
  ReSubMenu,
  SubMenuItem,
  MenuItem,
];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return;
  // 遍历注册全局组件
  components.map((component) => Vue.component(component.name, component));
};

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  HButton,
  Checkbox,
  checkboxGroup,
  Dialog,
  Input,
  Message,
  Radio,
  RadioGroup,
  Selector,
  SideBar,
  ReSubMenu,
  SubMenuItem,
  MenuItem,
};
