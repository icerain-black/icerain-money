<template>
  <Layout>
    <Types :typeDataSourse="recordTypeList" :initSelectedValue="recordTypeSelectedValue" @update:value="changeRecordType"
      classPrefix="record">
    </Types>
    <Types :typeDataSourse="intervalTypeList" :initSelectedValue="intervalTypeSelectedValue"
      @update:value="changeIntervalType" classPrefix="interval">
    </Types>
  </Layout>
</template>
  
<script lang='ts'>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import Types from '@/components/Types.vue';

import intervalTypeList from "@/constants/intetvalTypeList"
import recordTypeList from "@/constants/recordTypeList"

@Component({
  components: {
    Types
  }
})
export default class Statistics extends Vue {

  recordTypeList: TypeDataSourse[] = recordTypeList

  intervalTypeList: TypeDataSourse[] = intervalTypeList

  recordTypeSelectedValue = "-"
  intervalTypeSelectedValue = "day"

  changeRecordType(type: string) {
    this.recordTypeSelectedValue = type
  }

  changeIntervalType(type: string) {
    this.intervalTypeSelectedValue = type
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .types-record {
    background-color: white;

    >.types-item-record {
      &.selected {
        background-color: #c3c3c3;

        &::after {
          display: none;
        }
      }
    }
  }
  .types-interval{
    >.types-item-interval{
      height: 48px;
    }
  }
}
</style>
