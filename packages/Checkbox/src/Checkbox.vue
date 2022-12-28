<script>
export default {
  name: "hg-checkbox",
};
</script>

<script setup>
import { computed, defineProps, defineEmits, inject } from "vue";
const props = defineProps({
  label: {
    type: [String, Boolean, Number],
  },
  modelValue: [Boolean, Array, String],
});

const emits = defineEmits(["update:modelValue"]);

const proxyValue = inject("proxyValue");
const updateGroupValue = inject("updateGroupValue");

//checkbox的v-model语法糖是:checked和@change事件
const cheboxValue = computed({
  get: () => {
    //当有使用group的v-model时候取得是用户传给group的值
    if (proxyValue) {
      return proxyValue.value;
    } else {
      //如果只是使用checkbox组件，则是组件传过来的v-model值
      return props.modelValue;
    }
  },
  set: (val) => {
    //当有使用group的v-model时候我们必须更新最外层的v-model
    if (proxyValue) {
      updateGroupValue(val);
    } else {
      //如果不是则直接更新v-models
      emits("update:modelValue", val);
    }
  },
});

const isChecked = computed(() => {
  if (proxyValue) {
    return proxyValue.value.includes(props.label);
  } else {
    if (typeof props.modelValue === "boolean") {
      return props.modelValue;
    }
    return props.modelValue.includes(props.label);
  }
});
</script>

<template>
  <!-- 这里用label是因为label包裹着input，点击label会自动选择input -->
  <label class="checkbox">
    <span class="checkbox-outer">
      <span class="checkbox-inner" :class="{ 'is-checked': isChecked }"></span>
      <input
        type="checkbox"
        class="checkbox-native"
        :value="label"
        v-model="cheboxValue"
      />
    </span>

    <span class="checkbox__label">
      <slot></slot>
    </span>
  </label>
</template>

<style scoped>
.checkbox-outer {
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  display: inline-block;
  line-height: 1;
  position: relative;
  vertical-align: middle;
}

.checkbox-inner {
  display: inline-block;
  position: relative;
  border: 1px solid #dcdfe6;
  border-radius: 2px;
  box-sizing: border-box;
  width: 14px;
  height: 14px;
  background-color: #fff;
  z-index: 1;
  transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
    background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
}

.checkbox-inner:after {
  box-sizing: content-box;
  content: "";
  border: 1px solid #fff;
  border-left: 0;
  border-top: 0;
  height: 7px;
  left: 4px;
  position: absolute;
  top: 1px;
  transform: rotate(45deg) scaleY(0);
  width: 3px;
  transition: transform 0.15s ease-in 0.05s;
  transform-origin: center;
}

.checkbox-inner.is-checked {
  background-color: #409eff;
  border-color: #409eff;
}

.checkbox-inner.is-checked:after {
  transform: rotate(45deg) scaleY(1);
}

.checkbox-native {
  opacity: 0;
  display: none;
}

.checkbox__label {
  margin-left: 10px;
  display: inline-block;
  line-height: 19px;
  font-size: 14px;
}

.checkbox {
  color: #606266;
  /* font-weight: 500; */
  margin-right: 10px;
  cursor: pointer;
}
</style>
