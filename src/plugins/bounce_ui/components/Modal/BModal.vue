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
import ally from "ally.js";
var escHandler, focusHandler;
var focusedElementBeforeDialogOpened, disabledHandle, tabHandle, hiddenHandle;
export default {
  props: {
    custom: Boolean,
    persistent: Boolean,
    modelValue: Boolean,
    width: String,
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
      focusedElementBeforeDialogOpened = document.activeElement;
      const dialog = this.$el;
      dialog.addEventListener(
        "animationend",
        (focusHandler = () => {
          var element = ally.query.firstTabbable({
            context: dialog,
            defaultToContext: true,
          });
          element.focus();
          disabledHandle = ally.maintain.disabled({
            filter: dialog,
          });

          hiddenHandle = ally.maintain.hidden({
            filter: dialog,
          });

          tabHandle = ally.maintain.tabFocus({
            context: dialog,
          });
        })
      );
    },
    modalClosed() {
      document.body.removeEventListener("keyup", escHandler);
      this.$el.removeEventListener("animationend", focusHandler);
      tabHandle.disengage();
      hiddenHandle.disengage();
      disabledHandle.disengage();
      focusedElementBeforeDialogOpened.focus();
    },
  },
  mounted() {
    document.body.addEventListener(
      "keyup",
      (escHandler = (e) => {
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