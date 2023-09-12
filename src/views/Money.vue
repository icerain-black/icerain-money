<template>
  <Layout class-prefix="layout">
    <NumberPad :amout="record.amonut" @update:value="updateAmount" @submit="recordListSubmit"/>
    <Types :type="record.type" @update:value="updateTypes"/>
    <div class="formItem-wapper">
      <FormItem title="备注" tip="请输入备注" @update:value="updateNotes"/>
    </div>
    <Tags :tagList="tagList" @updateTags="updateTags" @update:value="updateSelectedTags"/>
  </Layout>
</template>
  
<script lang='ts'>
import Vue from "vue"
import { Component,Watch} from 'vue-property-decorator';

import NumberPad from "@/components/Money/NumberPad.vue"
import FormItem from "@/components/FormItem.vue"
import Tags from "@/components/Money/Tags.vue"
import Types from "@/components/Money/Types.vue"

import recordListModule from "@/modules/recordListModule"
import tagListModule from "@/modules/tagListModule";


@Component({
  components:{
    NumberPad,
    FormItem,
    Tags,
    Types
  }
})
export default class Money extends Vue{
  tagList = tagListModule.fetch();

  record:Recordltem = {
    tags:[],
    notes:"",
    type:"-",
    amonut:0,
    createdTime:new Date()
  }

  updateTags(tagName:string){
    let message = tagListModule.create(tagName);
    if (message === "duplication") {
      alert("标签重复！");
      return;
    }
    this.tagList = tagListModule.fetch();
  }

  updateSelectedTags(tags:string[]){
    console.log(tags)
    this.record.tags = tags;
  }

  updateNotes(notes:string){
    this.record.notes = notes;
  }

  updateTypes(type:"-"|"+"){
    this.record.type = type;
  }

  updateAmount(amount:string){
    this.record.amonut = +amount;
  }

  recordListSubmit(){
    recordListModule.create(this.record)
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