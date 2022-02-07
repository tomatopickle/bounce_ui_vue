<template>
  <div
    :class="getClass"
    v-bind:style="{
      width: this.width,
      height: this.height,
      backgroundImage: `url(${this.src})`,
    }"
  >
    <b-flex bare>
      <slot name="prepend"></slot>
      <div style="flex-grow: 1" class="card-content">
        <div class="card-text" :class="{ 'card-overflow': overflow }">
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
      </div>
      <slot name="append"></slot>
    </b-flex>
    <div v-if="loading" class="card-loading">
      <b-spinner></b-spinner>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    bare: Boolean,
    color: String,
    loading: Boolean,
    width: String,
    height: String,
    glass: Boolean,
    glassSidebar: Boolean,
    src: String,
    overflow: Boolean,
  },
  computed: {
    getClass() {
      var classes =
        "card" +
        (this.bare ? " card-bare" : "") +
        (this.color ? " card-" + this.color : "") +
        (this.src ? " img-card" : "") +
        (this.glass ? " card-glass" : "") +
        (this.glassSidebar ? " card-glass card-glass-sidebar" : "");
      return classes;
    },
  },
};
</script>
<style lang="stylus">
@import './styles/BCard.styl';
</style>
