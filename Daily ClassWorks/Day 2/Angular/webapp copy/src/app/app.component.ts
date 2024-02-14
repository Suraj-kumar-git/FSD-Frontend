import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webapp';
  num:number=0;
  str:string="";
  names:string[] =['Apple', 'Banana', 'Orange', 'Mango'];
  textColor:string="red";
  background:string="black";
  isSpecial:boolean=true;
  nonBind:String="Suraj";
}
