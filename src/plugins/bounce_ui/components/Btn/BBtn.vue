<template>
  <button
    :readonly="loading"
    :tabindex="loading ? -1 : tabindex || 1"
    :data-ripple="this.ripple"
    :disabled="disabled"
    @pointerdown="handleClick($event)"
    :class="getClass"
  >
    <b-spinner v-if="loading"></b-spinner>
    <slot></slot>
  </button>
</template>
<script>
import rippleEffect from "./ripples";
export default {
  props: {
    color: String,
    disabled: Boolean,
    tabindex: Number,
    size: String,
    circle: Boolean,
    loading: Boolean,
    block: Boolean,
    icon: Boolean,
    outline: Boolean,
    ghost: Boolean,
    glass: Boolean,
    ripple: Boolean,
    focusBorder: Boolean,
    bounce: Boolean,
  },
  computed: {
    getClass() {
      var classes =
        "btn" +
        (this.block ? " btn-block" : "") +
        (this.color ? " btn-" + this.color : "") +
        (this.size ? " btn-" + this.size : "") +
        (this.ripple ? " btn-ripple" : "") +
        (this.bounce ? " btn-bounce" : "") +
        (this.icon ? " btn-icon" : "") +
        (this.ghost ? " btn-ghost" : "") +
        (this.glass ? " btn-glass" : "") +
        (this.focusBorder ? " btn-focus-border" : "") +
        (this.block ? " btn-block" : "") +
        (this.loading ? " loading" : "") +
        (this.outline ? " btn-outline" : "") +
        (this.circle ? " btn-circle" : "");
      return classes;
    },
  },
  methods: {
    handleClick(e) {
      if (this.ripple) {
        rippleEffect(e);
      }
    },
  },
};
</script>
<style lang="stylus">
@import './styles/BBtn.styl';
</style>