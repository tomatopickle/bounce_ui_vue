<template>
  <div :class="getClass" :style="{width:this.width}">
    <h3>
      <slot name="header"></slot>
    </h3>
    <p class="list-content">
      <slot></slot>
    </p>
  </div>
</template>
<script>
export default {
  props: {
    width: String
  },
  data: function () {
    return {
    };
  },
  computed: {
    getClass() {
      var classes = "b-list";
      return classes;
    },
  },
};
</script>
<style lang="stylus">
@import './styles/BList.styl';
</style>