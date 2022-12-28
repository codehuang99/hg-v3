import MessageComp from "./Message.vue";
import { createApp, ref, watch } from "vue";

const messageArr = ref([]);

const map = {
  SUCCESS: "success",
  WARNING: "warning",
  DANGER: "danger",
  INFO: "info",
};

const Message = (options) => {
  //将组件挂载到body
  const messageApp = createApp(MessageComp, options);
  showMessage(messageApp);
};

//两种调用方法，一个是message({type}),一种是message.success({})
Object.values(map).forEach((type) => {
  Message[type] = (options) => {
    options.type = type;
    return Message(options);
  };
});

//显示---挂载到body
function showMessage(app) {
  const oEm = document.createDocumentFragment();
  //这里可以获取到组件暴露出来的方法
  const vm = app.mount(oEm);
  messageArr.value.push(vm);
  document.body.appendChild(oEm);

  setTops(vm);
  vm.changeShow();
  watch(messageArr, () => setTops(vm));
  hideMessage(app, vm);
}

//隐藏--取消挂载
function hideMessage(app, vm, duration) {
  vm.timer = setTimeout(async () => {
    await vm.changeShow();
    app.unmount(); //取消挂载
    messageArr.value = messageArr.value.filter((item) => item !== vm);
    clearTimeout(vm.timer);
    vm.timer = null;
  }, duration || 3000);
}

//计算top
function setTops(vm) {
  const { height, margin, setTop } = vm;
  const currentIndex = messageArr.value.findIndex((item) => item === vm);
  setTop(margin * (currentIndex + 1) + height * currentIndex);
}

export default Message;
