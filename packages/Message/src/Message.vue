<script>
export default {
  name: "hg-message",
};
</script>
<script setup>
import { computed, defineProps, ref, defineExpose } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "success",
  },
  message: String,
  duration: Number,
});
//使用v-show才能使用动画
const isShow = ref(false);
//计算top
const top = ref(0);

const changeShow = () => {
  return new Promise((r) => {
    isShow.value = !isShow.value;
    setTimeout(() => {
      r();
    }, 300);
  });
};

const className = computed(() => {
  return {
    [`${props.type}`]: props.type,
  };
});

const setTop = (val) => {
  top.value = val;
  return val;
};

defineExpose({
  changeShow,
  height: 40,
  margin: 20,
  setTop,
});
</script>

<template>
  <transition name="h-message-fade">
    <div
      class="message"
      :class="className"
      v-show="isShow"
      :style="{ top: top + 'px' }"
    >
      <div class="message__content">
        {{ message }}
        <span class="close-btn">
          <span class="iconfont icon-chacha"></span>
        </span>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.message {
  width: 380px;
  position: fixed;
  top: 10px;
  left: 50%;
  height: 40px;
  margin-left: -190px;
  z-index: 99999;
  text-align: center;
  line-height: 40px;
  border-radius: 5px;
  transition: top 0.3s ease-out;
}
.message.success {
  background: #f0f9eb;
  color: #529b2e;
}
.message.warning {
  background: #fdf6ec;
  color: #b88230;
}
.message.danger {
  background: #fef0f0;
  color: #c45656;
}
.message.info {
  background: #f4f4f5;
  color: #73767a;
}
/* //进入退出动画过度 */
.h-message-fade-enter-active {
  transition: all 0.3s ease-in;
}
.h-message-fade-leave-active {
  transition: all 0.3s ease-out;
}
/* //进入和退出动画 */
.h-message-fade-enter-from,
.h-message-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.close-btn {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.iconfont {
  font-size: 13px;
}
</style>
