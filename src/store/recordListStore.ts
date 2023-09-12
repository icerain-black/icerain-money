const itemKey = "recordList"

let data:Recordltem[] = [];

const recordListStore: recordListStore = {
  fetchRecord(){
    data = JSON.parse(window.localStorage.getItem(itemKey) || "[]") as Recordltem[]
    return data;
  },
  createRecord(newRecord){
    newRecord.createdTime = new Date(Date.now());
    data.push(JSON.parse(JSON.stringify(newRecord)))
    this.saveRecord()
  },
  saveRecord(){
    window.localStorage.setItem(itemKey,JSON.stringify(data));
  }
}

recordListStore.fetchRecord()

export default recordListStore;