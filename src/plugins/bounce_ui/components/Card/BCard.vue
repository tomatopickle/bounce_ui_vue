<template>
  <div
    :class="getClass"
    v-bind:style="{
      width: this.width,
      height: this.height,
      backgroundImage: `url(${this.src})`,
    }"
  >
    <div class="card-text">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <div class="card-float">
        <slot name="float"></slot>
      </div>
    </div>
    <slot name="footer"></slot>
    <div v-if="loading" class="card-loading">
      <b-spinner></b-spinner>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    color: String,
    loading: Boolean,
    width: String,
    height: String,
    glass: Boolean,
    src: String,
    squircle: Boolean,
  },
  computed: {
    getClass() {
      var classes =
        "card" +
        (this.color ? " card-" + this.color : "") +
        (this.src ? " img-card" : "") +
        (this.glass ? " card-glass" : "") +
        (this.squircle ? " card-squircle" : "");
      return classes;
    },
  },
};
</script>
<style lang="stylus">
@import './styles/BCard.styl';
</style>