<template>
  <div v-show="modelValue">
    <transition name="modal">
      <div v-show="modelValue" :class="getClass" @click="closeFromBackdrop($event)">
        <div
          class="modal-content"
          v-bind:style="{
            width: this.getWidth(),
          }"
        >
          <slot></slot>
        </div>
      </div>
    </transition>
    <transition name="modal" :duration="200">
       <div @click="!persistent ? close() : ''" class="modal-backdrop"></div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    custom: Boolean,
    persistent: Boolean,
    modelValue:Boolean,
    width: String,
  },
  computed: {
    getClass() {
      var classes = "modal" + (this.custom ? " modal-custom" : "");
      return classes;
    },
  },
  methods: {
    close() {
      this.$emit("update:modelValue", false);
    },
    closeFromBackdrop(e) {
      if (!this.persistent && e.target.classList.contains("modal")) {
        this.close();
      }
    },
    getWidth() {
      return this.custom ? "100%" : this.width || "250px";
    },
  },
  mounted() {
    var handler;
    document.body.addEventListener(
      "keyup",
      (handler = (e) => {
        if (e.key == "Escape" && !this.persistent) {
          this.close();
          document.body.removeEventListener("click", handler);
        }
      })
    );
  },
};
</script>
<style lang="stylus">
@import './styles/BModal.styl';
</style>