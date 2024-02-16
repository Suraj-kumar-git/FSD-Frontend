import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'main_project';
  parentData:string='Hi child, This is your Papa.!';
  childData:string="";
  getChildData(data:any){
    alert('Child Data receive: '+data);
    this.childData=data;
  }
}
