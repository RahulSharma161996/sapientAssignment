import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectCounterService } from '../subject-counter.service';

@Component({
  selector: 'sub-displaytimer',
  templateUrl: './subdisplaytimer.component.html',
  styleUrls: ['./subdisplaytimer.component.scss']
})
export class SubdisplaytimerComponent implements OnInit, OnDestroy {
  timer;
  action;
  countdowntimer;
  remainingTime;
  subscription: Subscription;
  constructor(private sharingService: SubjectCounterService) {
    this.subscription = this.sharingService.getStartTimer().subscribe(data => {
      if (data.event == 'init' || data.event == 'reset') {
        this.timer = data.value
        this.action = data.event
      }
      else if (data.event == 'Start') {
        if(this.action== 'init' || this.action == 'reset'){
          this.timer = data.value
          this.action = data.event
        }
        this.startTimer();
      }
      else if (data.event == 'Pause') {
        this.action = data.event
        clearInterval(this.countdowntimer);
      }
    })
  }

  ngOnInit(): void {
  }


  startTimer() {
    this.countdowntimer = setInterval(() => {
      if (this.timer <= 0)
        clearInterval(this.countdowntimer)
      else {
        this.timer = this.timer - 1;
      }
    }, 1000)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
