<template lang="">
  <a type="button" class="button" @click.stop>
    <slot></slot>
  </a>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.button {
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0 7px;
}
</style>
