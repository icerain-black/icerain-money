<template>
  <div class="nav">
    <router-link to="/money">
      <Icon name="icon-licai"></Icon>
      管账
    </router-link>
    <router-link to="/labels">
      <Icon name="icon-24gf-tags"></Icon>
      标签
    </router-link>    
    <router-link to="/statistics">
      <Icon name="icon-tongji"></Icon>
      统计
    </router-link>    
  </div>
</template>
  
<script lang='ts'>
  export default {
    name:"Nav"
  }
</script>

<style lang="scss" scoped>
  .nav{
    border:1px solid red;
  }
</style>