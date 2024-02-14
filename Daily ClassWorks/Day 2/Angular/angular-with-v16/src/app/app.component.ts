import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Angular v16.1.5';
  var='We are working with the variables.'
  id:number=10;
  hello(){
    alert('Hello, this is an alert message.')
  }
}
