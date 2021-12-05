<template>
  <div :class="getClass">
    <div class="list-item-content">
    <h4>
      <slot name="heading"></slot>
    </h4>
    <p>
      <slot></slot>
    </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    clickable: Boolean,
  },
  data: function () {
    return {
      last: false,
    };
  },
  mounted: function () {
    this.last = !this.$el.nextElementSibling;
  },
  computed: {
    getClass() {
      var classes = "b-list-item" + (this.clickable ? " item-clickable" : "")
      + (this.last ? " item-last" : "");
      return classes;
    },
  },
};
</script>
<style lang="stylus">
@import './styles/BListItem.styl';
</style>