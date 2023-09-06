<template>
  <div class="tags">
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
    <div class="new">
      <button class="add-tag">新增标签</button>
    </div>
  </div>
</template>
  
<script lang='ts'>
export default {
  name: "Tags"
}
</script>
  
<style lang="scss" scoped>
.tags {
  font-size: 14px;
  padding: 16px;

  >.current {
    display: flex;
    font-size: 14px;
    flex-wrap: wrap;

    >li {
      $h: 24px;

      height: $h;
      border-radius: $h / 2;
      line-height: $h;
      background-color: #d9d9d9;
      padding: 0 16px;
      margin-right: 16px;
      margin-top: 6px;
    }
  }

  >.new {
    padding-top: 16px;

    .add-tag {
      border: none;
      color: #999;
      background: transparent;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }

}
</style>