<template>
  <div class="nav-wapper">
    <div class="content">
      <slot></slot>
    </div>
    <Nav></Nav>
  </div>
</template>
  
<script lang='ts'>
export default {
  name: "Layout"
}
</script>
  
<style lang="scss" scoped>
.nav-wapper {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .content {
    border: 1px solid blue;
    flex-grow: 1;
    overflow: auto;
  }
}
</style>