import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectCounterService } from '../subject-counter.service';

@Component({
  selector: 'sub-logger',
  templateUrl: './sublogger.component.html',
  styleUrls: ['./sublogger.component.scss']
})
export class SubloggerComponent implements OnInit, OnDestroy {
  logArray = []
  subscription: Subscription;
  constructor(private sharingService: SubjectCounterService) { 
    this.subscription = this.sharingService.getStartTimer().subscribe(data => {
      let str;
      if(data.event == 'Start'){
         str = 'Started at ' + new Date().toLocaleString();
         this.logArray.push(str);
      }
      else if(data.event == 'Pause'){
        str = 'Paused at ' + new Date().toLocaleString();
        this.logArray.push(str);
      }
      else{
        this.logArray = [];
      }
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
