import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  template: '<h1>Hello I am a employee</h1>',
  styles: ['h1{color:green}']
})
export class EmployeeComponent {
  eid:number=12;
  ename:string="Suraj";
  salary:number=45000;
}
