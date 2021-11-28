<template>
  <div class="b-app">
    <div class="b-app-side">
      <slot name="prepend"></slot>
    </div>
    <div style="overflow: auto; flex-grow: 1">
      <b-modal class="full_loader" persistent v-model="loadingModal">
        <b-spinner
          :style="{ backgroundImage: `url(${this.src})` }"
          size="90px"
          class="primary"
        ></b-spinner>
        <br />
        <h1 class="loader_text">{{ loadingText }}</h1>
      </b-modal>
      <slot></slot>
    </div>
    <div class="b-app-side">
      <slot name="append"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    loading: Boolean,
    loadingText: String,
    src: String,
  },
  data: () => {
    return {
      loadingModal: false,
    };
  },
  mounted: function () {
    this.loadingModal = this.loading;
  },
  updated: function () {
    this.loadingModal = this.loading;
  },
};
</script>
<style lang="stylus">
.b-app {
  display: flex;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.b-app-side {
  position: sticky;
  top: 0;
  height: 100%;
}

.loader_text {
  color: #ffffffbd;
  font-weight: 500;
  font-size: 25px;
}

.full_loader {
  .spinner_parent {
    width: max-content;
    height: max-content;
    margin: auto;
    background-size: 45%;
    border-radius: 50%;
    padding: 0;
    background-position: center;
    background-repeat: no-repeat;
    animation: scaleIn 0.5s;
  }

  .modal-backdrop {
    background-color: #000000cf;
  }
}

@keyframes scaleIn {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}
</style>