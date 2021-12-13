<template>
  <div class="checkbox">
    <input
      v-model="checkBoxVal"
      :id="id"
      v-on:input="$emit('update:modelValue', !checkBoxVal)"
      type="checkbox"
    />
    <label :for="id">{{ label }}</label>
  </div>
</template>
<script>
export default {
  props: {
    modelValue: Boolean,
    label: String,
  },
  data() {
    return {
      id: Math.floor(Math.random() * (100 * 5555 * 1000)).toString(),
      checkBoxVal: false,
    };
  },
  mounted() {
    this.checkBoxVal = this.modelValue;
    console.log(this.modelValue);
  },
  methods: {
    updateStuff() {
      console.log(this.checkBoxVal);
      this.$emit("update:modelValue", true);
    },
  },
};
</script>
<style lang="stylus">
@import './styles/BCheckbox.styl';
</style>
