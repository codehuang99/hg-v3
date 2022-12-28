<script>
export default {
  name: "hg-radio-group",
};
</script>
<script setup>
import {
  provide,
  defineProps,
  defineEmits,
  // computed,
  ref,
  watch,
} from "vue";

const props = defineProps({
  modelValue: [String, Number, Boolean],
});

const emits = defineEmits(["update:modelValue", "changes"]);

const proxyValue = ref(props.modelValue);
watch(
  () => props.modelValue,
  () => {
    proxyValue.value = props.modelValue;
  }
);

let updateGroupValue = (e) => {
  emits("changes", e);
  emits("update:modelValue", e);
};
provide("groupValue", proxyValue);
provide("updateGroupValue", updateGroupValue);
</script>

<template>
  <div class="radio-group">
    <slot></slot>
  </div>
</template>

<style scoped></style>
