import { Injectable } from '@angular/core';
import {User} from './user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
    alert('User service object created...');
  }
  users:User[] = [{"uid":101,"username":"Suraj Kumar","email":"surajkumar@gmail.com","address":"1234"},
  {"uid":102,"username":"2Suraj Kumar","email":"2surajkumar@gmail.com","address":"21234"},
  {"uid":103,"username":"3Suraj Kumar","email":"3surajkumar@gmail.com","address":"31234"},
  {"uid":104,"username":"4Suraj Kumar","email":"4surajkumar@gmail.com","address":"41234"}];
  getAllUsers(){
    alert("Get All Users called")
    return this.users;
  }
}


