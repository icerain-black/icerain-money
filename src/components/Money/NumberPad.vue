<template>
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
</template>
  
<script lang='ts'>
export default {
  name: "NumberPad"
}
</script>
  
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.numberPad {
  >.output {
    @extend %inser-shadow;
    font-size: 36px;
    font-family: Consolas monospace;
    padding: 9px 16px;
    text-align: right;
  }

  >.buttons {

    >button {
      @extend %clearFix;
      display: block;
      width: 25%;
      height: 64px;
      float: left;
      border: none;
      background-color: transparent;

      &.OK {
        height: 64 * 2px;
        float: right;
        background-color: darken($color: #f2f2f2, $amount: 5% * 6);
      }

      &.zero {
        width: 25% * 2;
      }

      &:nth-of-type(1) {
        background-color: #f2f2f2;
      }

      &:nth-of-type(2),
      &:nth-of-type(5) {
        background-color: darken($color: #f2f2f2, $amount: 5% * 1);
      }

      &:nth-of-type(3),
      &:nth-of-type(6),
      &:nth-of-type(9) {
        background-color: darken($color: #f2f2f2, $amount: 5% * 2);
      }

      &:nth-of-type(4),
      &:nth-of-type(7),
      &:nth-of-type(10) {
        background-color: darken($color: #f2f2f2, $amount: 5% * 3);
      }

      &:nth-of-type(8),
      &:nth-of-type(11),
      &:nth-of-type(13) {
        background-color: darken($color: #f2f2f2, $amount: 5% * 4);
      }

      &:nth-of-type(14) {
        background-color: darken($color: #f2f2f2, $amount: 5% * 5);
      }
    }
  }
}</style>