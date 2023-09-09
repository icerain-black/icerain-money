const itemKey = "recordList"

let recordListModule = {
  fetch(){
    return JSON.parse(window.localStorage.getItem(itemKey) || "[]") as Recordltem[];
  },

  save(data:Recordltem[]){
    window.localStorage.setItem(itemKey,JSON.stringify(data));
  }
}

export default recordListModule;