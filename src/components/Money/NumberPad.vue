<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons">
      <button @click="inputNumber">1</button>
      <button @click="inputNumber">2</button>
      <button @click="inputNumber">3</button>
      <button @click="remove">删除</button>
      <button @click="inputNumber">4</button>
      <button @click="inputNumber">5</button>
      <button @click="inputNumber">6</button>
      <button @click="clear">清空</button>
      <button @click="inputNumber">7</button>
      <button @click="inputNumber">8</button>
      <button @click="inputNumber">9</button>
      <button class="OK" @click="amountSubmit">OK</button>
      <button @click="inputNumber" class="zero">0</button>
      <button @click="inputNumber">.</button>
    </div>
  </div>
</template>
  
<script lang='ts'>
import Vue from 'vue';
import { Component,Prop } from 'vue-property-decorator';

@Component
export default class NumberPad extends Vue {
  @Prop({default:0})readonly amout!:number
  
  output = "0"

  created(){
    this.output = this.amout.toString()
  }

  inputNumber($event: MouseEvent) {
    let button = ($event.target as HTMLButtonElement);
    let input = button.textContent as string;

    //限制数值长度
    if (this.output.length >= 16) { return; }

    //初始值判断
    if (this.output === "0") {
      if ("0123456789".indexOf(input) >= 0) {
        this.output = input;
      } else {
        this.output += input;
      }
      return;
    }

    //检查是否有两个小数点
    if (this.output.indexOf(".") >= 0 && input === ".") { return; }

    //限制小数点后两位
    if (this.output.indexOf(".") >= 0) {
      let pointIndex = this.output.indexOf(".")
      let inputcache = this.output + input;
      this.output = inputcache.slice(0,pointIndex+3)
    }else{
      this.output += input;
    }
  }

  clear(){
    this.output = "0"
  }

  remove(){
    if (this.output.length === 1) {
      this.output = "0"
    }else{
      this.output = this.output.slice(0,-1)
    }
  }

  amountSubmit(){
    if (this.output !== "0") {
      this.$emit("update:value",this.output)
      this.$emit("submit")

      this.output = "0"  
    }
  }
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
    min-height: 72px
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
        background-color: #aba2f1;
      }

      &.zero {
        width: 25% * 2;
      }

      &:nth-of-type(1) {
        background-color: #ffffff;
      }

      &:nth-of-type(2),
      &:nth-of-type(5) {
        background-color: #f8f0fd;
      }

      &:nth-of-type(3),
      &:nth-of-type(6),
      &:nth-of-type(9) {
        background-color: #e4dafd;
      }

      &:nth-of-type(4),
      &:nth-of-type(7),
      &:nth-of-type(10) {
        background-color: #d3ceff;
      }

      &:nth-of-type(8),
      &:nth-of-type(11),
      &:nth-of-type(13) {
        background-color: #d0c8fb;
      }

      &:nth-of-type(14) {
        background-color: #b2a7eb;
      }
    }
  }
}
</style>