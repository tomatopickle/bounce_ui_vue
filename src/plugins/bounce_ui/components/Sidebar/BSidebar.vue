<template>
  <div class="b-sidebar">
    <b-card :width="width || '100%'" height="100%">
      <template v-slot:header>
        <slot name="header"></slot>
      </template>
      <slot></slot>
      <template v-slot:footer>
        <div class="card-footer">
          <slot name="footer"></slot>
        </div>
      </template>
    </b-card>
  </div>
</template>
<script>
export default {
  props: {
    width: String,
  },
};
</script>
<style lang="stylus">
@import './styles/BSidebar.styl';
</style>
