import { ThisReceiver } from "@angular/compiler";

export class Model{
  user;
  items:any;

  constructor(){

    this.user="Sumeyye";
    this.items = [

      new TodoItems("Spor",false),
      new TodoItems("Kitap oku",false),
      new TodoItems("Kod Yaz",true),
      new TodoItems("Alışveriş",false),
      new TodoItems("Temizlik",false),
      new TodoItems("Yemek",false),
      new TodoItems("İngilizce çalış",false),
      new TodoItems("Sinema",false),

    ];
  }
}

//const m= new Model(); // Model içindeki constructor çalışacak.

export class TodoItems{

  description;
  action;

  constructor(description:string,action:boolean){

    this.description=description;
    this.action=action;
  }
}

