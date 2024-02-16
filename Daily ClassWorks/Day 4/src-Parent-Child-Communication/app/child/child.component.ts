import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input()
  myInput:string="";

  @Output()
  myEventEmitter:EventEmitter<string>=new EventEmitter();
  myOutput:string="Hello Papa";

  ngOnInit() {
    alert(this.myInput);
  }
  sendChildData(){
    this.myEventEmitter.emit(this.myOutput);
  }
}
