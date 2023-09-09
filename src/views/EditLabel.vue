<template>
  <Layout>
    <div class="EditLable">
      <span>EditLabel page</span>
    </div>
  </Layout>   
</template>
  
<script lang='ts'>
import Vue from "vue";
import { Component } from 'vue-property-decorator'; 

import tagListModule from "@/modules/tagListModule";

@Component({})
export default class EditLable extends Vue{
  created(){
    let tagList = tagListModule.fetch();
    let tag = tagList.filter(item => item.id === this.$route.params.id)[0]
    if (tag) {
      console.log(tag)
    }else{
      this.$router.replace({
        name:"404"
      })
    }
  }
}
</script>
  
<style lang="scss" scoped>
  
</style>