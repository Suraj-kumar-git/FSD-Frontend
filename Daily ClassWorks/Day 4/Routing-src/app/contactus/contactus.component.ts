import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  username: string="";
  constructor(private route:ActivatedRoute){
    route.params.subscribe(param=>this.username=param['username']);
  }
}
