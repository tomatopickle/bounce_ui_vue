<template>
  <div class="b-app">
    <div class="b-app-side">
      <slot name="prepend"></slot>
    </div>
    <div style="overflow:auto;"><slot></slot></div>
    <div class="b-app-side">
      <slot name="append"></slot>
    </div>
  </div>
</template>
<style lang="stylus">
.b-app {
  display: flex;
  height: 100vh;
  margin:0;
  padding: 0;
  overflow: hidden;
}

.b-app-side {
  position: sticky;
  top: 0;
  height: 100%;
}
</style>