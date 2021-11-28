<template>
  <div class="spinner_parent">
    <svg
      class="spinner"
      viewBox="0 0 50 50"
      :style="{ width: this.size, height: this.size }"
    >
      <circle
        class="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke-width="5"
      ></circle>
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    size: String,
  },
};
</script>
<style lang="stylus">
.spinner_parent {
  position: relative;
}

.btn.loading {
  color: transparent !important;
  pointer-events: none;
}

.spinner {
  animation: rotate 2s linear infinite;
  width: 50px;
  height: 50px;

  & .path {
    stroke: #424242;
    stroke-linecap: round;
    animation: dash 1s ease-in-out infinite;
  }

  .dark & .path {
    stroke: white;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }

  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}

.btn.loading .spinner_parent {
  width: 100%;
  position: absolute;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);

  .spinner {
    width: 25px;
    height: 25px;
  }
}

.card {
  .spinner_parent {
    width: max-content;
    height: max-content;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%);
  }

  .spinner .path {
    stroke: var(--primary);
  }
}

.spinner_parent {
  &.primary {
    .spinner .path {
      stroke: var(--primary);
    }
  }

  &.success {
    .spinner .path {
      stroke: var(--success);
    }
  }

  &.danger {
    .spinner .path {
      stroke: var(--danger);
    }
  }
}

.btn-primary, .btn-danger, .btn-success {
  .spinner .path {
    stroke: white;
  }
}
</style>