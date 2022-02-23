<template>
  <div class="b-tab">
    <span class="selection"></span>
    <div v-for="(tab, i) in tabs" :key="i" class="option">
      <input type="radio" :id="tab.value" name="sample" :value="tab.value" />
      <label :for="tab.value">
        <b-icon v-if="tab.icon" style="float: left" :name="tab.icon"></b-icon
        ><span>{{ tab.name }}</span></label
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tabs: Array,
    modelValue: Number,
  },
  data: function () {
    return {
      el: null,
    };
  },
  mounted: function () {
    const el = this.$el;
    this.moveBackgroundPillToElement(
      el.querySelectorAll(".option")[this.modelValue],
      this.modelValue
    );
    el.addEventListener("change", this.updatePillPosition());
    // Prevent pill from detaching from element when window resized
    window.addEventListener("resize", this.updatePillPosition());
    el.querySelectorAll(".option input").forEach((elem) => {
      elem.addEventListener("change", this.updatePillPosition);
    });
  },
  methods: {
    updatePillPosition() {
      const el = this.$el;
      el.querySelectorAll(".option input").forEach((elem, index) => {
        if (elem.checked) this.moveBackgroundPillToElement(elem, index);
      });
    },

    moveBackgroundPillToElement(elem, index) {
      const el = this.$el;
      el.querySelector(".selection").style.transform =
        "translateX(" + elem.offsetWidth * index + "px)";
      this.$emit("update:modelValue", index);
    },
  },
  watch: {
    modelValue() {
      const el = this.$el;
      this.moveBackgroundPillToElement(
        el.querySelectorAll(".option")[this.modelValue],
        this.modelValue
      );
    },
  },
};
</script>
<style lang="stylus">
@import './styles/BTab.styl';
</style>


