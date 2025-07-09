<template>
  <button
      ref="_buttonRef"
      class="ms-button"
      :disabled=disabled
      :autofocus=autofocus
      :type=nativeType
      :class="{
        [`ms-button--${type}`]: type,
        [`ms-button--${size}`]: size,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
      }">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import {type ButtonProps} from "./type";
import {onMounted, ref} from "vue";

const _buttonRef = ref<HTMLButtonElement>();
onMounted(()=>{
})
//宏函数
defineOptions({
  name: 'MsButton'
})
withDefaults(defineProps<ButtonProps>(),{
  nativeType: 'button'
})
defineExpose({
  buttonRef: _buttonRef
})
</script>

<script lang="ts">
export default {
  name: 'MsButton'
}
</script>

<style lang="scss" scoped>
@use "./Button.scss";
</style>
