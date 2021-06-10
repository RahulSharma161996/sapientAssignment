import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectCounterService } from '../subject-counter.service';

@Component({
  selector: 'sub-counter',
  templateUrl: './subcounter.component.html',
  styleUrls: ['./subcounter.component.scss']
})
export class SubcounterComponent implements OnInit, OnDestroy {
  startCount = 0;
  pauseCount = 0;
  subscription: Subscription;
  constructor(private sharingService: SubjectCounterService) { 
    this.subscription = this.sharingService.getStartTimer().subscribe(data => {
      if(data.event == 'Start'){
        this.startCount +=1;
      }
      else if(data.event == 'Pause'){
        this.pauseCount +=1;
      }
      else if(data.event == 'reset'){
        this.startCount = 0;
        this.pauseCount = 0;
      }
    })
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
