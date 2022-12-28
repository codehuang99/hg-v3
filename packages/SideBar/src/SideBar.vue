<script>
export default {
  name: "hg-sidebar",
};
</script>
<script setup></script>

<template>
  <div class="SideBar">
    <slot></slot>
  </div>
</template>

<style scoped>
.SideBar {
  margin-top: 40px;
  width: 200px;
  background: #fff;
}
</style>
