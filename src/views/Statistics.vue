<template>
  <Layout>
    <Types :typeDataSourse="recordTypeList" :initSelectedValue="recordTypeSelectedValue" @update:value="changeRecordType"
      classPrefix="record">
    </Types>
    <Types :typeDataSourse="intervalTypeList" :initSelectedValue="intervalTypeSelectedValue"
      @update:value="changeIntervalType" classPrefix="interval">
    </Types>
    <ol>
      <li v-for="(date, index) in recordResult" :key="index">
        <span class="title">
          {{ transformDate(date.title) }}
        </span>
        <ol>
          <li class="record" v-for="(item, index) in date.record" :key="index">
            <span>{{ tagString(item.tags) }}</span>
            <span class="notes">{{ item.notes }}</span>
            <span>￥{{ item.amonut }}</span>
          </li>
        </ol>
      </li>
    </ol>
  </Layout>
</template>
  
<script lang='ts'>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import dayjs from "dayjs"

import Types from '@/components/Types.vue';

import intervalTypeList from "@/constants/intetvalTypeList"
import recordTypeList from "@/constants/recordTypeList"


@Component({
  components: {
    Types
  }
})
export default class Statistics extends Vue {

  get recordList() {
    return this.$store.state.recordItemList as Recordltem[]
  }

  get recordResult() {
    let { recordList } = this;
    let hashMap: { [key: string]: { title: string, record: Recordltem[] } } = {};
    for (let i = 0; i < recordList.length; i++) {
      let [date, time] = recordList[i].createdTime.split("T")
      hashMap[date] = hashMap[date] || { title: date, record: [] };
      hashMap[date].title = date
      hashMap[date].record.push(recordList[i])
    }
    return hashMap
  }

  recordTypeList: TypeDataSourse[] = recordTypeList

  intervalTypeList: TypeDataSourse[] = intervalTypeList

  recordTypeSelectedValue = "-"
  intervalTypeSelectedValue = "day"

  changeRecordType(type: string) {
    this.recordTypeSelectedValue = type;
  }

  changeIntervalType(type: string) {
    this.intervalTypeSelectedValue = type;
  }

  tagString(tags: string[]) {
    return tags.length === 0 ? "无" : tags.join(",");
  }

  transformDate(date:string){
    let now = dayjs();
    let time = dayjs(date)
    if (now.isSame(time,"day")) {
      return "今天"
    }else if (time.isSame(now.subtract(1,"day"),"day")) {
      console.log("dd")
      return "昨天"
    }else if (time.isSame(now.subtract(2,"day"),"day")) {
      return "前天"
    }else if (time.isSame(now,"year")) {
      return time.format("M月D日")
    }else{
      return time.format("YYYY年M月D日")
    }
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

  .types-interval {
    >.types-item-interval {
      height: 48px;
    }
  }
}

%item{
  display: flex;
  line-height: 24px;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
}

.title {
  @extend %item;
}

.record {
  @extend %item;
  background-color:white;

  .notes{
    margin-right: auto;
    margin-left: 16px;  
    color:#999999;
  }
}
</style>
