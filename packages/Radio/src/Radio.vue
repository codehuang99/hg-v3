<script>
export default {
  name: "hg-radio",
};
</script>
<script setup>
import { defineProps, inject, computed, defineEmits } from "vue";

const props = defineProps({
  label: {
    type: [String, Boolean, Number],
  },
  modelValue: [String, Boolean, Number],
});
const groupValue = inject("groupValue");
const updateGroupValue = inject("updateGroupValue");

const emits = defineEmits(["update:modelValue"]);

const radioValue = computed({
  get: () => {
    if (groupValue) {
      return groupValue.value;
    } else {
      return props.modelValue;
    }
  },
  set: (val) => {
    if (groupValue) {
      updateGroupValue(val);
    } else {
      emits("update:modelValue", val);
    }
  },
});

const isChecked = computed(() => {
  // console.log(radioValue.value, props.label);
  return radioValue.value === props.label;
});
</script>

<template>
  <label class="radio">
    <span class="radio--outer">
      <span class="radio--inner" :class="{ 'is-checked': isChecked }"></span>
      <input
        class="radio-native"
        type="radio"
        :value="label"
        v-model="radioValue"
      />
    </span>
    <span class="radio--label">
      <slot></slot>
    </span>
  </label>
</template>

<style scoped>
.radio--outer {
  white-space: nowrap;
  outline: none;
  display: inline-block;
  line-height: 1;
  position: relative;
  vertical-align: middle;
}

.radio--inner {
  border: 1px solid #dcdfe6;
  border-radius: 100%;
  width: 14px;
  height: 14px;
  background-color: #fff;
  position: relative;
  cursor: pointer;
  display: inline-block;
  box-sizing: bordebox;
}

.radio--inner.is-checked {
  border-color: #409eff;
  background: #409eff;
}

.radio--inner::after {
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background-color: #fff;
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.15s ease-in;
}

.radio--inner.is-checked::after {
  transform: translate(-50%, -50%) scale(1);
}

.radio--label {
  margin-left: 4px;
  font-size: 14px;
}

.radio {
  margin-right: 20px;
  cursor: pointer;
}

.radio:last-child {
  margin-right: 0;
}

.radio-native {
  opacity: 0;
  display: none;
}
</style>
