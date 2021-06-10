import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() startCount;
  @Input() pauseCount;
  constructor() { }

  ngOnInit(): void {
    this.startCount = 0;
    this.pauseCount = 0;
  }

}
