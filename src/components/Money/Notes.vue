<template>
  <div class="notes">
    <label>备注
      <input type="text" placeholder="在这里添加备注">
    </label>
  </div>
</template>
  
<script lang='ts'>
export default {
  name: "Notes"
}
</script>
  
<style lang="scss" scoped>
.notes {
  >label {
    display: flex;
    background-color: #f5f5f5;
    align-items: center;
    padding-left: 16px;
    font-size: 14px;

    >input {
      display: block;
      margin-left: 16px;
      background-color: transparent;
      border: none;
      color: #999999;
      flex-grow: 1;
      line-height: 60px;
      padding-right: 16px;

      &:focus {
        outline: none;
      }
    }
  }
}
</style>