const itemKey = "recordList"

let recordListModule = {
  data:[] as Recordltem[],
  fetch(){
    this.data = JSON.parse(window.localStorage.getItem(itemKey) || "[]") as Recordltem[]
    return this.data;
  },

  create(data:Recordltem){
    data.createdTime = new Date(Date.now());
    this.data.push(JSON.parse(JSON.stringify(data)))
    this.save()
  },

  save(){
    window.localStorage.setItem(itemKey,JSON.stringify(this.data));
  }
}

export default recordListModule;