<template>
  <div class="notes">
    <label>备注
      <input type="text" v-model="notesText" @input="updateNotes"  placeholder="在这里添加备注">
    </label>
  </div>
</template>
  
<script lang='ts'>
import Vue from 'vue';
import { Component} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  notesText = ""

  updateNotes(){
    this.$emit("update:value",this.notesText)
  }
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