<template>
  <!--Binding css variables to use as height/width of :before -> the slider -->
  <div class="toggle-slider">
    <label tabindex="0" @keydown="enterKey($event)" class="switch">
      <input v-model="isActive" type="checkbox" @click="setNewToggleState" />
      <span class="track">
        <span class="handle"></span>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  props: { modelValue: Boolean },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    setNewToggleState() {
      this.$emit("update:modelValue", !this.isActive);
    },
    enterKey(e) {
      if (e.key == "Enter") {
        this.setNewToggleState();
      }
    },
  },
  mounted() {
    this.isActive = this.modelValue;
  },
  watch: {
    modelValue() {
      this.isActive = this.modelValue;
    },
  },
};
</script>

<style lang="stylus">
@import './styles/BSwitch.styl';
</style>
