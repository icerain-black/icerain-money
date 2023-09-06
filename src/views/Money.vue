<template>
  <Layout class-prefix="layout">
    <div class="numberPad">
      <div class="output">100</div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="OK">OK</button>
        <button class="zero">0</button>
        <button>.</button>
      </div>
    </div>
    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>
    <div class="notes">
      <label>备注
        <input type="text" placeholder="在这里添加备注">
      </label>
    </div>
    <div class="tags">
      <ul class="current">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
      <div class="new">
        <button class="add-tag">新增标签</button>
      </div>
    </div>
  </Layout>
</template>
  
<script lang='ts'>
export default {
  name: "Money"
}

</script>

<style lang="scss">
  .layout-content{
    display: flex;
    flex-direction: column-reverse;
  }

</style>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.tags {
  font-size: 14px;
  padding:16px;

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

.notes{
  >label{
    display: flex;
    background-color: #f5f5f5;
    align-items: center;
    padding-left: 16px;
    font-size: 14px;
    >input{
      display: block;
      margin-left: 16px;
      background-color: transparent;
      border: none;
      color: #999999;
      flex-grow: 1;
      line-height: 60px;
      padding-right: 16px;
      &:focus{
        outline: none;
      }
    }
  }
}

.types{
  display: flex;
  font-size: 24px;
  background-color: #c4c4c4;
  >li{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    flex-grow: 1;
    position: relative;

    &.selected::after{
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

.numberPad{
  >.output{
    @extend %inser-shadow;
    font-size: 36px;
    font-family: Consolas monospace;
    padding: 9px 16px;
    text-align: right;
  }

  >.buttons{
    
    >button{
      @extend %clearFix;
      display: block;
      width: 25%;
      height: 64px;
      float: left;
      border: none;
      background-color: transparent;

      &.OK{
        height: 64 * 2px;
        float: right;
        background-color: darken($color: #f2f2f2, $amount: 5% * 6);
      }

      &.zero{
        width: 25% * 2;
      }

      &:nth-of-type(1){
        background-color: #f2f2f2;
      }

      &:nth-of-type(2),&:nth-of-type(5){
        background-color: darken($color: #f2f2f2, $amount: 5% * 1);
      }

      &:nth-of-type(3),&:nth-of-type(6),&:nth-of-type(9){
        background-color: darken($color: #f2f2f2, $amount: 5% * 2);
      }

      &:nth-of-type(4),&:nth-of-type(7),&:nth-of-type(10){
        background-color: darken($color: #f2f2f2, $amount: 5% * 3);
      }

      &:nth-of-type(8),&:nth-of-type(11),&:nth-of-type(13){
        background-color: darken($color: #f2f2f2, $amount: 5% * 4);
      }

      &:nth-of-type(14){
        background-color: darken($color: #f2f2f2, $amount: 5% * 5);
      }
    }
  }
}
</style>