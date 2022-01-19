import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';
  user = 'Sumeyye';
  items= [
    { description:"Kahvaltı", action:"No"},
    { description:"Spor", action:"No"},
    { description:"Kod Yaz", action:"No"},
    { description:"Alışveriş", action:"No"}
  ];
}
