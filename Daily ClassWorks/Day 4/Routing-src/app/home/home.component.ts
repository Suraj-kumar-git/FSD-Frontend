import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  amount:number = 1500;
  constructor(private router: Router){

  }
  doPayment(){
    console.log('Navigating from home component to payment component');
    this.router.navigate(['/payment/'+this.amount]);
  }
}
