<template>
  <div class="b-tab-content-parent">
      <template v-for="(tab, i) in tabs">
        <div class="tab-content" :key="i" v-if="i == value">
          <slot :name="i"> </slot>
        </div>
      </template>
  </div>
</template>
<script>
export default {
  props: {
    value: Number,
    tabs: Array,
  },
  data: () => {
    return {};
  },
  created() {},
};
</script>
