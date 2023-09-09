const itemKey = "tagList"

let tagListModule:tagList = {
  data:[],
  fetch(){
    this.data = JSON.parse(window.localStorage.getItem(itemKey) || "[]") as string[];
    return this.data
  },
  create(tag:string){
    if (this.data.indexOf(tag) >= 0) {
      return "duplication"
    }
    this.data = this.fetch()
    this.data.push(tag);
    this.save();
    return "success"
  },

  save(){
    window.localStorage.setItem(itemKey,JSON.stringify(this.data));
  }
}

export default tagListModule;