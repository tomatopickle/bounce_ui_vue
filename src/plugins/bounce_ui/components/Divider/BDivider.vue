<template>
  <div :class="'divider' + (this.borderless ? ' borderless' : '')">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    borderless: Boolean,
  },
};
</script>
<style lang="stylus">
@import '../../styles/variables.styl';

.divider {
  overflow: hidden;
  text-align: center;
  margin-top: 7px;
  margin-bottom: 7px;
}

.divider:before, .divider:after {
  background-color: #E5E7EB;
  content: '';
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 50%;
}

.divider:before {
  right: 0.5em;
  margin-left: -50%;
}

.divider:after {
  left: 0.5em;
  margin-right: -50%;
}

.divider.borderless {
  &:before, &:after {
    background-color: transparent;
  }
}

.divider:empty {
  &:before, &:after {
    width: 100%;
    left: 0;
    right: 0;
  }
}

.dark {
  .divider:not(.borderless) {
    &:before, &:after {
      background-color: lighten($bg-dark, 25);
    }
  }
}
</style>