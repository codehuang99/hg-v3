<script>
export default {
  name: "hg-dialog",
};
</script>
<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  title: {
    type: String,
    default: "Basic Modal",
  },
  modelValue: {
    type: Boolean,
  },
});

const emits = defineEmits(["cancel", "confirm", "update:modelValue"]);

const handleClose = () => {
  emits("cancel");
};

const handleComfirm = () => {
  emits("confirm");
};

const handleMask = () => {
  emits("update:modelValue", false);
};
</script>

<template>
  <div class="dialog" v-if="modelValue">
    <div class="mask" @click="handleMask"></div>
    <div class="ui-dialog">
      <div class="title">{{ title }}</div>
      <div class="content">
        <slot name="content"></slot>
      </div>
      <div class="bottom">
        <button class="close" @click="handleClose">取消</button>
        <button class="comfirm" @click="handleComfirm">确定</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
}
.mask {
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.3);
}
.ui-dialog {
  width: 500px;
  background: #fff;
  border: 1px solid black;
  position: fixed;
  left: 400px;
  top: 60px;
  color: black;
}
.title {
  height: 60px;
  line-height: 60px;
  padding-left: 30px;
  border-bottom: 1px solid gray;
}
.content {
  padding: 30px;
  border-bottom: 1px solid gray;
}
.bottom {
  display: flex;
  justify-content: flex-end;
  padding: 20px;
}
</style>
