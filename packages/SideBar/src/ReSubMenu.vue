<script>
export default {
  name: "hg-reSubMenu",
};
</script>

<script setup>
import { defineProps } from "vue";
import MenuItem from "./MenuItem.vue";
import SubMenuItem from "./SubMenuItem.vue";
defineProps({
  data: Object,
});
</script>

<template>
  <div class="resubMenu">
    <SubMenuItem>
      <template #title>{{ data.title }}</template>
      <template v-for="item2 in data.children">
        <template v-if="!item2.children">
          <MenuItem :key="item2.id">
            {{ item2.title }}
          </MenuItem>
        </template>
        <hg-reSubMenu v-else :data="item2" :key="item2"> </hg-reSubMenu>
      </template>
    </SubMenuItem>
  </div>
</template>

<style scoped></style>
