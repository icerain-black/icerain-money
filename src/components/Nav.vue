<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="icon-licai"></Icon>
      管账
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="icon-biaoqian"></Icon>
      标签
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="icon-tongji"></Icon>
      统计
    </router-link>
  </nav>
</template>
  
<script lang='ts'>
export default {
  name: "Nav"
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  flex-direction: row;
  font-size: 12px;
  background-color: #a2a6ff;

  .item {
    padding: 2px 0;
    width: 33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &.selected{
      color: $color-heightlight;
    }

    .icon {
      width: 32px;
      height: 32px;
    }
  }
}
</style>