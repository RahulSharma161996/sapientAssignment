import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectCounterService {
   event = new BehaviorSubject( {
    'event': 'init',
    'value': 0
  });
  constructor() { }

  setStartTimer(state: any) {
    this.event.next(state);
  }

  getStartTimer(): Observable<any> {
    return this.event.asObservable();
  }
}
