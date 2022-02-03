<template>
  <div role="form">
    <slot></slot>
  </div>
</template>
<script>
export default {
  emits: ["submit"],
  mounted: function () {
    this.$el.addEventListener("keydown", (e) => {
      if (e.key == "Enter" && !e.shiftKey) {
        this.$emit("submit", e);
      }
    });
  },
};
</script>
<style lang="stylus"></style>