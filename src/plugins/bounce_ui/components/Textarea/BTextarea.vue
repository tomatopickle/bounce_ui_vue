<template>
  <div class="form-control">
    <div
      class="input-prepend"
      v-bind:style="{
        paddingTop: !this.label ? '' : `23px`,
        paddingBottom: !this.label ? `3px` : '',
      }"
    >
      <slot name="prepend"></slot>
    </div>
    <div class="input-parent">
      <label v-show="!!this.label" class="label">
        <span class="label-text">{{ this.label }}</span>
      </label>
      <div
        v-bind:style="{
          top: !this.label ? '8px' : '32px',
        }"
        class="input-inner-prepend"
      >
        <slot name="inner-prepend"></slot>
      </div>
      <div
        class="input-inner-append"
        v-bind:style="{
          top: !this.label ? '8px' : '32px',
        }"
      >
        <slot name="inner-append"></slot>
      </div>
      <textarea
        col="1"
        row="1"
        v-bind:value="modelValue"
        v-on="$attrs"
        v-on:input="$emit('update:modelValue', $event.target.value)"
        :disabled="disabled"
        :placeholder="this.placeholder"
        :class="getClass"
        :type="type"
        :style="{ minHeight: this.height }"
      >
      </textarea>
    </div>
    <div
      class="input-append"
      v-bind:style="{
        paddingTop: !this.label ? '' : `23px`,
        paddingBottom: !this.label ? `2px` : '',
      }"
    >
      <slot name="append"></slot>
    </div>
  </div>
</template>
<script>
import { setResizeListeners } from "./helpers/autoResize.js";
export default {
  props: {
    color: String,
    circle: Boolean,
    disabled: Boolean,
    ghost: Boolean,
    label: String,
    placeholder: String,
    transparent: Boolean,
    size: String,
    modelValue: String,
    type: String,
    noResize: Boolean,
    height: String,
  },
  computed: {
    getClass() {
      var classes =
        "input textarea js-autoresize " +
        (this.color ? " input-" + this.color : "") +
        (this.ghost ? " input-ghost" : "") +
        (this.transparent ? " input-transparent" : "") +
        (this.circle ? " input-circle" : "");
      return classes;
    },
  },
  mounted() {
    if (!this.noResize) {
      setResizeListeners(this.$el, ".js-autoresize");
    }
  },
};
</script>
<style lang="stylus">
@import './styles/BTextArea.styl';
</style>
