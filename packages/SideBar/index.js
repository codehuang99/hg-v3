import SideBar from "./src/SideBar.vue";
import MenuItem from "./src/MenuItem.vue";
import ReSubMenu from "./src/ReSubMenu.vue";
import SubMenuItem from "./src/SubMenuItem.vue";

// 为组件提供 install 安装方法，供按需引入
SideBar.install = function (Vue) {
  Vue.component(SideBar.name, SideBar);
};
MenuItem.install = function (Vue) {
  Vue.component(MenuItem.name, MenuItem);
};
ReSubMenu.install = function (Vue) {
  Vue.component(ReSubMenu.name, ReSubMenu);
};
SubMenuItem.install = function (Vue) {
  Vue.component(SubMenuItem.name, SubMenuItem);
};

// 默认导出组件
export { SideBar, ReSubMenu, SubMenuItem, MenuItem };
