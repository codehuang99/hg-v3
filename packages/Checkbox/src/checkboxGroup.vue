<script>
export default {
  name: "hg-checkbox-group",
};
</script>

<script setup>
import { computed, defineProps, defineEmits, provide } from "vue";
const props = defineProps({
  modelValue: [Array],
});

const emits = defineEmits(["update:modelValue"]);

const proxyValue = computed(() => props.modelValue);
const updateGroupValue = (e) => {
  emits("update:modelValue", e);
};
provide("proxyValue", proxyValue);

provide("updateGroupValue", updateGroupValue);
</script>

<template>
  <div class="checkboxGroup">
    <slot></slot>
  </div>
</template>

<style scoped></style>
