<template>
  <Layout class-prefix="layout">
    <NumberPad :amout="record.amonut" @update:value="updateAmount" @submit="recordListSubmit"/>
    <Types :typeDataSourse="recordTypeList" 
      :initSelectedValue="record.type"
      @update:value="changeRecordType" 
      classPrefix="record"
    ></Types>
    <div class="formItem-wapper">
      <FormItem title="备注" :value="record.notes" tip="请输入备注" @update:value="updateNotes"/>
    </div>
    <Tags :tagList="tagList" @addTag="addTag" @update:value="updateSelectedTags"/>
  </Layout>
</template>
  
<script lang='ts'>
import { Component} from 'vue-property-decorator';
import {mixins} from "vue-class-component"

import NumberPad from "@/components/Money/NumberPad.vue"
import FormItem from "@/components/FormItem.vue"
import Tags from "@/components/Money/Tags.vue"
import Types from '@/components/Types.vue';

import TagHelper from "@/mixin/tagHelper";

import recordTypeList from "@/constants/recordTypeList"

@Component({
  components:{
    NumberPad,
    FormItem,
    Tags,
    Types
  },
})
export default class Money extends mixins(TagHelper){
  get tagList(){
    return this.$store.state.tagList;
  }

  recordTypeList:TypeDataSourse[] = recordTypeList

  record:Recordltem = {
    tags:[],
    notes:"",
    type:"-",
    amonut:0,
    createdTime:new Date().toISOString()
  }

  updateSelectedTags(tags:string[]){
    this.record.tags = tags;
  }

  updateNotes(notes:string){
    this.record.notes = notes;
  }

  changeRecordType(type: string) {
    this.record.type = type as "-"|"+"
  }

  updateAmount(amount:string){
    this.record.amonut = +amount;
  }

  recordListSubmit(){
    this.$store.commit("createRecord",this.record);
    this.record.notes = "";
  }

}
</script>

<style lang="scss">
  .layout-content{
    display: flex;
    flex-direction: column-reverse;
  }

  .formItem-wapper{
    padding: 12px 0;
  }
</style>