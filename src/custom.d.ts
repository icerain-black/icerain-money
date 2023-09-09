type Recordltem = {
  tags:string[],
  notes:string,
  type:"-"|"+",
  amonut:number,
  createdTime:Date
}

type tagList = {
  data:string[];
  fetch:() => string[];
  create:(tag:string) => "success" | "duplication";
  save:() => void;
}