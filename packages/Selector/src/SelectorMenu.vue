<script>
export default {
  name: "h-selector-menu",
};
</script>
<script setup>
import { defineProps, defineEmits, computed } from "vue";
const prop = defineProps({
  data: {
    type: Array,
    default() {
      return [
        {
          id: 1,
          text: "vue",
          value: "vue",
        },
        {
          id: 2,
          text: "react",
          value: "react",
        },
        {
          id: 3,
          text: "aulgar",
          value: "aulgar",
        },
      ];
    },
  },
  searchValue: String,
});

const emits = defineEmits(["setItemValue"]);

//点击item之后传递一个value值到外面
const clickItem = (val) => {
  emits("setItemValue", val);
};

const searchData = computed(() => {
  if (!prop.searchValue) {
    return prop.data;
  }
  return prop.data.filter((item) => {
    return item.text.toLowerCase().includes(prop.searchValue.toLowerCase());
  });
});
</script>

<template>
  <div class="selectorMenu">
    <template v-if="searchData.length">
      <div
        class="menu_item"
        v-for="item in searchData"
        :key="item.id"
        @click="clickItem(item)"
      >
        {{ item.text }}
      </div>
    </template>
    <template v-else> 没有数据存在 </template>
  </div>
</template>

<style scoped>
.selectorMenu {
  display: none;
  width: 222px;
  border: 1px solid gray;
}
.menu_item {
  padding: 10px;
}
.menu_item:hover {
  background: gray;
  cursor: pointer;
}
</style>
