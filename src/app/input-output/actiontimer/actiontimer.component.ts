import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-actiontimer',
  templateUrl: './actiontimer.component.html',
  styleUrls: ['./actiontimer.component.scss']
})
export class ActiontimerComponent implements OnInit {
  timerCount;
  isDisabled = false;
  data = {
    'event': 'init',
    'value': 0
  };
  @Output() buttonClicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  emitParent(event){
    this.isDisabled = true;
     this.data = {
      'event': event,
      'value': this.timerCount
    }
    this.buttonClicked.emit(this.data);
  }

  reset(){
    this.timerCount = null;
    this.isDisabled = false;
     this.data = {
      'event': 'reset',
      'value': 0
    }
    this.buttonClicked.emit(this.data);
  }

}
