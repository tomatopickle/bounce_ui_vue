<template>
  <div class="b-tab-content-parent">
    <template v-for="(tab, i) in $slots" :key="i">
      <div class="tab-content" v-if="i  == modelValue">
        <slot :name="i"> </slot>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    modelValue: Number,
    tabs: Array,
  },
  data: () => {
    return {};
  },
  created() {},
};
</script>
