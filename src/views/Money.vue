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
import { Component} from 'vue-property-decorator';

import NumberPad from "@/components/Money/NumberPad.vue"
import FormItem from "@/components/FormItem.vue"
import Tags from "@/components/Money/Tags.vue"
import Types from "@/components/Money/Types.vue"

@Component({
  components:{
    NumberPad,
    FormItem,
    Tags,
    Types
  },
  computed:{
    tagList(){
      return this.$store.state.tagList;
    }
  }
})
export default class Money extends Vue{
  tagList!:tagData[];

  record:Recordltem = {
    tags:[],
    notes:"",
    type:"-",
    amonut:0,
    createdTime:new Date()
  }

  updateTags(){
    this.$store.commit("createTag");
  }

  updateSelectedTags(tags:string[]){
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
    this.$store.commit("createRecord",this.record)
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