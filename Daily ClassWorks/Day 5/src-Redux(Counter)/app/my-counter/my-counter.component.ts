import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../actions/counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent {

  mycount:Observable<number>=new Observable<number>();
  constructor(private store:Store<{count:number}>) {
    this.mycount=store.select('count');
  }
  myincrement(){
    this.store.dispatch(increment());
  }
  mydecrement(){
    this.store.dispatch(decrement());
  }
  myreset(){
    this.store.dispatch(reset());
  }
}
