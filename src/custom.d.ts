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
  remove:(id:string) => void;
}