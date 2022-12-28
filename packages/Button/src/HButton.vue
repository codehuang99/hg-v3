<script>
export default {
  name: "hg-button",
};
</script>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "none",
  },
  size: {
    type: String,
    default: "middle",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false,
  },
});
const className = computed(() => {
  return {
    [`btn-${props.type}`]: props.type,
    ["btn-disabled"]: props.disabled,
    [`btn-circle`]: props.circle,
    [`btn-${props.size}`]: props.size,
  };
});
</script>

<template>
  <div class="Button">
    <button class="Btn" :class="className">
      <slot></slot>
    </button>
  </div>
</template>

<style scoped>
.Button {
  display: inline-block;
}
.Button + .Button {
  margin-left: 10px;
}
.Btn {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.Btn + .Btn {
  margin-left: 10px;
}
.Btn:focus,
.Btn:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}

.Btn:active {
  color: #3a8ee6;
  border-color: #3a8ee6;
  outline: 0;
}

.btn-disabled {
  color: #c0c4cc;
  background-color: #fff;
  border-color: #ebeef5;
  cursor: not-allowed;
  background-image: none;
}
.btn-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
.btn-primary:focus,
.btn-primary:hover {
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}
.btn-primary.btn-disabled,
.btn-primary.btn-disabled:active,
.btn-primary.btn-disabled:focus,
.btn-primary.btn-disabled:hover {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
  cursor: not-allowed;
  background-image: none;
}
.btn-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}
.btn-success:focus,
.btn-success:hover {
  background: #85ce61;
  border-color: #85ce61;
  color: #fff;
}

.btn-success.btn-disabled,
.btn-success.btn-disabled:active,
.btn-success.btn-disabled:focus,
.btn-success.btn-disabled:hover {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
}

.btn-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}
.btn-info:focus,
.btn-info:hover {
  background: #a6a9ad;
  border-color: #a6a9ad;
  color: #fff;
}
.btn-info.btn-disabled,
.btn-info.btn-disabled:active,
.btn-info.btn-disabled:focus,
.btn-info.btn-disabled:hover {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
}

.btn-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}
.btn-warning:focus,
.btn-warning:hover {
  background: #ebb563;
  border-color: #ebb563;
  color: #fff;
}
.btn-warning.btn-disabled,
.btn-warning.btn-disabled:active,
.btn-warning.btn-disabled:focus,
.btn-warning.btn-disabled:hover {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
}
.btn-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}
.btn-danger:focus,
.btn-danger:hover {
  background: #f78989;
  border-color: #f78989;
  color: #fff;
}
.btn-danger.btn-disabled,
.btn-danger.btn-disabled:active,
.btn-danger.btn-disabled:focus,
.btn-danger.btn-disabled:hover {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
}
.btn-circle {
  border-radius: 20px;
  padding: 12px 23px;
}
.btn-middle {
  padding: 10px 20px;
  font-size: 14px;
}
.btn-small {
  padding: 9px 15px;
  font-size: 12px;
}
.btn-mini {
  padding: 7px 15px;
  font-size: 12px;
}
</style>
