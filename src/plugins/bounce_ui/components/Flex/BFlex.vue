<template>
  <div class="flex-box">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {},
};
</script>
<style>
.flex-box {
  display: flex;
  padding: 8px;
  align-items: center;
}
</style>