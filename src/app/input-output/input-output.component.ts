import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {
  timer;
  action;
  logs = '';
  startCount = 0;
  pauseCount = 0;
  constructor() { }

  ngOnInit(): void {
  }

  actionTimerEvent(data){
    this.timer = data.value;
    this.action = data.event;
    this.logs = data.event;
    if(data.event == 'Start'){
      this.startCount += 1;
    }
    else if(data.event == 'Pause'){
      this.pauseCount += 1;
    }
    else if(data.event == 'reset'){
      this.startCount = 0;
      this.pauseCount = 0;
    }

  }

}
