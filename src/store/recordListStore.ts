import store from "@/store"

type State = {
  recordItemList:Recordltem[]
}

const recordListStore = {
  state:{
    recordItemList:[],
  } as State,
  mutations:{
    fetchRecord(state:State){
      state.recordItemList = JSON.parse(window.localStorage.getItem("recordList") || "[]") as Recordltem[]
    },
    createRecord(state:State,newRecord:Recordltem){
      newRecord.createdTime = (new Date(Date.now())).toISOString();
      state.recordItemList.push(JSON.parse(JSON.stringify(newRecord)))
      store.commit("saveRecord");
    },
    saveRecord(state:State){
      window.localStorage.setItem("recordList",JSON.stringify(state.recordItemList));
    },
  }
}

export default recordListStore;