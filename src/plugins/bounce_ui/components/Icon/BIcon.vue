<template>
  <span :class="getClass">
    <slot v-if="!name"></slot>
    <!-- <span v-html="getSVG" v-else></span> -->
    <span v-else :class="`${this.name}`" :style="{fontSize:this.size || ''}"></span>
  </span>
</template>
<script>
export default {
  props: {
    left: Boolean,
    right: Boolean,
    name: String,
    fill: String,
    color: String,
    size: String,
  },
  computed: {
    getClass() {
      var classes =
        "icon" +
        (this.left ? " icon-left" : "") +
        (this.right ? " icon-right" : "");
      return classes;
    },
    getSVG() {
      return `<span class="mdi mdi-${this.name}" style="font-size:${this.size || '20px'}"></span>`
    },
  },
};
</script>
<style>
.icon.icon-left {
  float: left;
  margin-right: 5px;
}
.icon.icon-right {
  float: right;
  margin-left: 5px;
}
.icon {
  font-size: 1.25rem;
  height: max-content;
}
.icon i,
.icon span {
  font-size: 1.25rem;
  display: block;
}
</style>