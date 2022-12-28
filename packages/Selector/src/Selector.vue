<script>
export default {
  name: "hg-selector",
};
</script>
<script setup>
import SelectorInput from "../src/SelectorInput.vue";
import SelectorMenu from "../src/SelectorMenu.vue";

// 在vue3中直接使用v开头的自定义指令就可以了
import vFocus from "./directives/focus.js";

//避免爷孙多次使用props
import { reactive, useAttrs, defineEmits, toRefs } from "vue";
const attrs = useAttrs();

const emits = defineEmits(["change"]);

const state = reactive({
  inputValue: "",
  searchValue: "",
});
const { inputValue, searchValue } = toRefs(state);

const setItemValue = (item) => {
  state.inputValue = item.text;
  emits("change", item.value);
};

const searchOptions = (val) => {
  state.searchValue = val;
};
</script>

<template>
  <div class="selector" v-focus>
    <!-- 需求分析：input组件、menu组件、提示组件 -->
    <!-- input组件使用了props和v-focus -->
    <SelectorInput
      :label="attrs.label"
      :value="inputValue"
      @searchOptions="searchOptions"
    ></SelectorInput>
    <SelectorMenu
      :data="attrs.data"
      @setItemValue="setItemValue"
      :searchValue="searchValue"
    ></SelectorMenu>
  </div>
</template>

<style scoped></style>
