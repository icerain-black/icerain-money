<template>
  <ul class="types">
    <li class="selected">支出</li>
    <li>收入</li>
  </ul>
</template>
  
<script lang='ts'>
export default {
  name: "Types"
}
</script>
  
<style lang="scss" scoped>
.types {
  display: flex;
  font-size: 24px;
  background-color: #c4c4c4;

  >li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    flex-grow: 1;
    position: relative;

    &.selected::after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      height: 4px;
      background-color: #333;
    }
  }
}
</style>