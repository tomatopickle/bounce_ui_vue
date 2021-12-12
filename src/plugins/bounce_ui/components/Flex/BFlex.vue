<template>
  <div
    :class="'flex-box' + (bare ? ' bare' : '') + (vertical ? ' vertical' : '')"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: { bare: Boolean, vertical: Boolean },
};
</script>
<style lang="stylus">
.flex-box:not(.bare){
  padding: 8px;
  & * {
    margin-left: 5px;
    margin-right: 5px;
  }
  & :first-child {
    margin-left: 0;
  }
  & :last-child {
    margin-right: 0;
  }
}
.flex-box {
  display: flex;
  align-items: center;
}
.flex-box.vertical {
  display: flex;
  flex-direction:column;
  align-items: unset;
}
</style>
