<script>
export default {
  name: "h-selector-input",
};
</script>

<script setup>
import { defineProps, defineEmits } from "vue";
defineProps({
  label: {
    type: String,
    default: "请选择",
  },
  value: {
    type: String,
  },
});

const emits = defineEmits(["searchOptions"]);

//实时进行输入框输入搜索
const handleSearch = (e) => {
  emits("searchOptions", e.target.value);
};
</script>

<template>
  <div class="selectorInput">
    <label class="label" for="inputs">{{ label }}</label>
    <input
      type="text"
      class="input"
      :value="value"
      id="inputs"
      @input="handleSearch"
    />
    <span class="iconfont icon-xiala"></span>
  </div>
</template>

<style scoped>
.selectorInput {
  position: relative;
  width: 200px;
  box-sizing: border-box;
}
.label {
  position: absolute;
  top: 11px;
  left: 13px;

  color: gray;
}
span {
  position: absolute;
  top: 15px;
  right: -15px;
}
.input {
  width: 200px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #d9d9d9;
  padding-left: 18px;
}
</style>
