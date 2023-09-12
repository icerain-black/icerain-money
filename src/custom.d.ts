type Recordltem = {
  tags:string[],
  notes:string,
  type:"-"|"+",
  amonut:number,
  createdTime:Date
}

type tagData = {
  id:string,
  name:string
}

type tagList = {
  data:tagData[];
  fetch:() => tagData[];
  create:(tagName:string) => "success" | "duplication";
  save:() => void;
  updata:(id:string,name:string) => void;
  remove:(id:string) => "success" | "fail";
}

interface Window{
  tagList:tagData[];
  createTag:() => void;
  removeTag:tagList["remove"];
  updateTag:tagList["updata"];
}