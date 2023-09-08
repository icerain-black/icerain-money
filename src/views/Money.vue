<template>
  <Layout class-prefix="layout">
    {{ record }}
    <NumberPad :amout="record.amonut" @update:value="updateAmount"/>
    <Types :type="record.type" @update:value="updateTypes"/>
    <Notes @update:value="updateNotes"/>
    <Tags :dataSourse="dataSourse" @updateTags="updateTags" @update:value="updateSelectedTags"/>
  </Layout>
</template>
  
<script lang='ts'>
import Vue from "vue"
import { Component} from 'vue-property-decorator';

import NumberPad from "@/components/Money/NumberPad.vue"
import Notes from "@/components/Money/Notes.vue"
import Tags from "@/components/Money/Tags.vue"
import Types from "@/components/Money/Types.vue"

type Record = {
  tags:string[],
  notes:string,
  type:"-"|"+",
  amonut:number
}

@Component({
  components:{
    NumberPad,
    Notes,
    Tags,
    Types
  }
})
export default class Money extends Vue{
  dataSourse = ["衣","食","住","行"]

  record:Record = {
    tags:[],
    notes:"",
    type:"-",
    amonut:0
  }

  updateTags(tag:string){
    this.dataSourse.push(tag)
  }

  updateSelectedTags(tags:string[]){
    this.record.tags = tags
  }

  updateNotes(notes:string){
    this.record.notes = notes
  }

  updateTypes(type:"-"|"+"){
    this.record.type = type
  }

  updateAmount(amount:string){
    this.record.amonut = +amount
  }

}
</script>

<style lang="scss">
  .layout-content{
    display: flex;
    flex-direction: column-reverse;
  }
</style>