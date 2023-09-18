<template>
  <Layout>
    <Types :typeDataSourse="recordTypeList" :initSelectedValue="recordTypeSelectedValue" @update:value="changeRecordType"
      classPrefix="record">
    </Types>
    <ol v-if="recordResult.length !== 0">
      <li v-for="(date, index) in recordResult" :key="index">
        <h1 class="title">
          {{ transformDate(date.title) }}
          <span>
            ￥{{ date.total }}
          </span>
        </h1>
        <ol>
          <li class="record" v-for="(item, index) in date.recordItem" :key="index">
            <span>{{ tagString(item.tags) }}</span>
            <span class="notes">{{ item.notes }}</span>
            <span>￥{{ item.amonut }}</span>
          </li>
        </ol>
      </li>
    </ol>
    <div v-else class="no-result">
      无账本记录
    </div>
  </Layout>
</template>
  
<script lang='ts'>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import dayjs from "dayjs"

import Types from '@/components/Types.vue';

import recordTypeList from "@/constants/recordTypeList"


@Component({
  components: {
    Types
  }
})
export default class Statistics extends Vue {

  get recordList() {
    return this.$store.state.recordListStore.recordItemList as Recordltem[]
  }

  get recordResult() {
    let { recordList } = this;

    let newList = JSON.parse(JSON.stringify(recordList)) as Recordltem[];
    newList = newList.filter(item => item.type === this.recordTypeSelectedValue)
    if (newList.length === 0) {
      return []
    }
    newList.sort((a, b) => {
      return dayjs(b.createdTime).valueOf() - dayjs(a.createdTime).valueOf()
    })

    type HashMap = {
      title: string,
      recordItem: Recordltem[],
      total?: number
    }

    let hashMap: HashMap[] = [{
      title: dayjs(newList[0].createdTime).format('YYYY-MM-DD'),
      recordItem: [newList[0]]
    }]

    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = hashMap[hashMap.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createdTime), "day")) {
        last.recordItem.push(current)
      } else {
        hashMap.push({
          title: dayjs(current.createdTime).format("YYYY-MM-DD"),
          recordItem: [current]
        })
      }
    }

    hashMap.forEach(item => {
      item.total = item.recordItem.reduce((sum, record) => {
        return sum += record.amonut
      }, 0)
    })
    return hashMap
  }

  recordTypeList: TypeDataSourse[] = recordTypeList

  recordTypeSelectedValue = "-"

  changeRecordType(type: string) {
    this.recordTypeSelectedValue = type;
  }

  tagString(tags: string[]) {
    return tags.length === 0 ? "无" : tags.join(",");
  }

  transformDate(date: string) {
    let now = dayjs();
    let time = dayjs(date)
    if (now.isSame(time, "day")) {
      return "今天"
    } else if (time.isSame(now.subtract(1, "day"), "day")) {
      return "昨天"
    } else if (time.isSame(now.subtract(2, "day"), "day")) {
      return "前天"
    } else if (time.isSame(now, "year")) {
      return time.format("M月D日")
    } else {
      return time.format("YYYY年M月D日")
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .types-record {
    background-color: #c3c3c3;

    >.types-item-record {
      &.selected {
        background-color: white;

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

%item {
  display: flex;
  line-height: 24px;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
}

.title {
  font-size: 20px;
  @extend %item;
}

.record {
  @extend %item;
  background-color: white;

  .notes {
    margin-right: auto;
    margin-left: 16px;
    color: #999999;
  }
}

.no-result{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
}
</style>
