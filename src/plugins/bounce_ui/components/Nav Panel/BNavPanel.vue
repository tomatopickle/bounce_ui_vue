<template>
  <div :class="getClass" :style="{ width: this.width || 'auto' }">
    <b-flex vertical bare>
      <div><slot name="header"></slot></div>
      <div class="controls" tabindex="0" @keyup="changeNav($event)">
        <div ref="indicator" class="indicatorBar"></div>
        <template v-for="(slot, slotName) in $slots" :key="slotName">
          <div
            class="nav-panel-option"
            v-on:pointerdown="select(slotName)"
            :ref="`opt-${slotName}`"
          >
            <slot
              v-if="slotName != 'header' && slotName != 'footer'"
              :name="slotName"
            ></slot>
          </div>
        </template>
      </div>
      <b-spacer></b-spacer>
      <div><slot name="footer"></slot></div>
    </b-flex>
  </div>
</template>
<script>
export default {
  props: { modelValue: Number, width: String },
  computed: {
    getClass() {
      return "nav-panel";
    },
  },
  updated() {
    this.$nextTick(() => {
      this.select(this.modelValue + 1);
    });
  },
  methods: {
    select(key) {
      var el = this.$refs[`opt-${key}`];
      this.$el.querySelector(".selected")?.classList.remove("selected");
      el.classList.add("selected");
      this.$refs.indicator.style.top = el.offsetTop + 2 + "px";
      this.$emit("update:modelValue", key - 1);
    },
    changeNav(e) {
      const optsLength =
        this.$el.querySelectorAll(".nav-panel-option").length - 1;
      let index = this.modelValue + 1;
      if (e.key == "ArrowDown") {
        index = index < optsLength ? index + 1 : 1;
      } else if (e.key == "ArrowUp") {
        index = index > 1 ? index - 1 : optsLength;
      }
      this.select(index);
    },
  },
};
</script>
<style lang="stylus">
@import './styles/BNavPanel.styl';
</style>
