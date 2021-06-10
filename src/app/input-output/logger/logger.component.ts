import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss']
})
export class LoggerComponent implements OnInit, OnChanges {
  @Input() logs;
  logArray = []
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(data){
    let action;
    if(!data.logs.firstChange && data.logs){
      if(data.logs.currentValue == 'Start'){
        action = 'Started'
      }
      else if(data.logs.currentValue == 'Pause'){
        action = 'Paused'
      }
      else{
        this.logArray = [];
        return false;
      }
      let str = action + ' at ' + new Date().toLocaleString();
      this.logArray.push(str);
    }
  }

}
