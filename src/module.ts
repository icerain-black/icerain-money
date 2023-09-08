const itemKey = "recordList"

let model = {
  getRecordList(){
    return JSON.parse(window.localStorage.getItem(itemKey) || "[]") as Recordltem[];
  },

  saveRecordList(data:Recordltem[]){
    window.localStorage.setItem(itemKey,JSON.stringify(data));
  }
}

export default model;