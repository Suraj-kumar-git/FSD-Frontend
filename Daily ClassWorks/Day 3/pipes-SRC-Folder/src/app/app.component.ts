import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [UserService]
})
export class AppComponent {
  title = 'pipes';
  amount:number=5000;
  object:Object={name:'Suraj Kumar',age:23,course:{cname:"B.Tech",duration:4}};

  userList:User[]=[];
  constructor(private userService:UserService){
    alert("Component object created")
  }
  ngOnInit(){
    alert("ngOnInt() is called");
    this.getAll();
  }
  getAll(){
   this.userList= this.userService.getAllUsers();
  }
}
