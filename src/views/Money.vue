<template>
  <Layout class-prefix="layout">
    <NumberPad/>
    <Types/>
    <Notes/>
    <Tags :dataSourse="dataSourse" @updateTags="updateTags"/>
  </Layout>
</template>
  
<script lang='ts'>
import NumberPad from "@/components/Money/NumberPad.vue"
import Notes from "@/components/Money/Notes.vue"
import Tags from "@/components/Money/Tags.vue"
import Types from "@/components/Money/Types.vue"

import Vue from "vue"
import { Component} from 'vue-property-decorator';

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

  updateTags(tag:string){
    this.dataSourse.push(tag)
  }
}
</script>

<style lang="scss">
  .layout-content{
    display: flex;
    flex-direction: column-reverse;
  }
</style>