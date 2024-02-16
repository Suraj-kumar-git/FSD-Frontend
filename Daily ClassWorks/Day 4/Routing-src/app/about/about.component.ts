import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  params:any=[];
  constructor(private route:ActivatedRoute){
    route.queryParams.subscribe((param)=>{this.params=param
      console.log(this.params);})
    
  }
}
