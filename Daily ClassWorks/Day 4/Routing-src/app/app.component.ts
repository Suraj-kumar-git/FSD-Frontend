import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'main_project';
  username="Suraj";
  address={
    'city':'Muzaffarpur',
    'state':'Bihar',
    'country':'India'
  };
}
