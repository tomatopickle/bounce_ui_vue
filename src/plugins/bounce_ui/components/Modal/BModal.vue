<template>
  <div v-show="modelValue">
    <transition name="modal">
      <div
        v-show="modelValue"
        :class="getClass"
        @click="closeFromBackdrop($event)"
      >
        <div
          tabindex="-1"
          role="dialog"
          aria-modal="true"
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
import * as focusTrap from "focus-trap";
export default {
  props: {
    custom: Boolean,
    persistent: Boolean,
    modelValue: Boolean,
    width: String,
  },
  data: () => {
    return {
      trap: null,
      focusHandler: null,
      escHandler: null,
    };
  },
  emits: ["closed", "update:modelValue"],
  computed: {
    getClass() {
      var classes = "modal" + (this.custom ? " modal-custom" : "");
      return classes;
    },
  },
  methods: {
    close() {
      this.$emit("update:modelValue", false);
      this.$emit("closed");
    },
    closeFromBackdrop(e) {
      if (!this.persistent && e.target.classList.contains("modal")) {
        this.close();
      }
    },
    getWidth() {
      return this.custom ? "100%" : this.width || "250px";
    },
    modalOpened() {
      // focusedElementBeforeDialogOpened = document.activeElement;
      this.trap = focusTrap.createFocusTrap(this.$el);
      const dialog = this.$el;
      dialog.addEventListener(
        "animationend",
        (this.focusHandler = () => {
          this.trap.activate();
        })
      );
    },
    modalClosed() {
      document.body.removeEventListener("keyup", this.escHandler);
      this.$el.removeEventListener("animationend", this.focusHandler);
      // focusedElementBeforeDialogOpened.focus();
      this.trap.deactivate();
      this.trap = null;
    },
  },
  mounted() {
    document.body.addEventListener(
      "keyup",
      (this.escHandler = (e) => {
        if (e.key == "Escape" && !this.persistent) {
          this.close();
        }
      })
    );
  },
  watch: {
    modelValue() {
      if (this.modelValue) {
        this.modalOpened();
      } else {
        this.modalClosed();
      }
    },
  },
};
</script>
<style lang="stylus">
@import './styles/BModal.styl';
</style>