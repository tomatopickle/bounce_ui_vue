<template>
  <div :class="getClass" v-bind:style="{ backgroundImage: `url(${this.src})` }">
    <b-flex>
      <div>
        <slot name="branding"></slot>
      </div>
      <div style="flex-grow: 1">
        <slot name="main"></slot>
      </div>
      <div>
        <slot name="actions"></slot>
      </div>
    </b-flex>
  </div>
</template>
<script>
export default {
  props: {
    absolute: Boolean,
    color: String,
    src: String,
    sticky: Boolean,
  },
  computed: {
    getClass() {
      var classes =
        "nav" +
        (this.absolute ? " nav-absolute" : "") +
        (this.sticky ? " nav-sticky" : "");
      return classes;
    },
  },
};
</script>
<style lang="stylus">
@import './styles/BNav.styl';
</style>