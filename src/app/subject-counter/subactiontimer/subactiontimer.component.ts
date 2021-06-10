import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SubjectCounterService } from '../subject-counter.service';

@Component({
  selector: 'sub-actiontimer',
  templateUrl: './subactiontimer.component.html',
  styleUrls: ['./subactiontimer.component.scss']
})
export class SubactiontimerComponent implements OnInit {
  timerCount;
  isDisabled = false;
  data = {
    'event': 'init',
    'value': 0
  };
  constructor(private sharingService: SubjectCounterService) { }

  ngOnInit(): void {
  }

  emitParent(event){
    this.isDisabled = true;
     this.data = {
      'event': event,
      'value': this.timerCount
    }
    this.sharingService.setStartTimer(this.data)
  }

  reset(){
    this.timerCount = null;
    this.isDisabled = false;
     this.data = {
      'event': 'reset',
      'value': 0
    }
    this.sharingService.setStartTimer(this.data)
  }

}
