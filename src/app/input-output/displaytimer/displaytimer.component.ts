import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaytimer',
  templateUrl: './displaytimer.component.html',
  styleUrls: ['./displaytimer.component.scss']
})
export class DisplaytimerComponent implements OnInit, OnChanges {
  @Input() timer; 
  @Input() action;
  remainingtime;
  countdowntimer;
  constructor() { }

  ngOnInit(): void {
    this.timer = 0;
  }

  ngOnChanges(data){
    if(data.action && data.action.currentValue == 'Start'){
      this.startTimer();
    }
    if(data.action && data.action.currentValue == 'Pause'){
      clearInterval(this.countdowntimer);
    }
  }

  startTimer(){
     this.countdowntimer = setInterval(() =>{
      if(this.timer <= 0)
      clearInterval(this.countdowntimer)
      else{
        this.timer = this.timer - 1;
      }
    }, 1000)
  }

}
