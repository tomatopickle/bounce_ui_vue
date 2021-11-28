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
.flex-box * {
  margin-left: 5px;
  margin-right: 5px;
}
.flex-box :first-child {
  margin-left: 0;
}
.flex-box :last-child {
  margin-right: 0;
}
</style>