<script>
export default {
  name: "hg-menuItem",
};
</script>
<script setup></script>

<template>
  <div class="MenuItem">
    <slot></slot>
  </div>
</template>

<style scoped>
.MenuItem {
  width: 200px;
  background: #000c17;
  margin-bottom: 1px;
  padding: 10px 0;
  border: 1px solid black;
  color: #ffffffa6;
  cursor: pointer;
  text-align: center;
  z-index: 3;
}
.MenuItem:hover {
  background: #1890ff;
}
</style>
