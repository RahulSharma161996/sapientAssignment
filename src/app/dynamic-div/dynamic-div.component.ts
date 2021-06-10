import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicDivComponent implements OnInit {
  lastScroll;
  height;
  startingDiv;
  lastAddition = 0;
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.height = window.innerHeight;
    this.startingDiv = Array(Math.ceil(this.height / 200) + 1);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.lastScroll == undefined) {
      this.lastScroll = window.scrollY;
    }
    else {
      if (this.lastScroll <= window.scrollY) {
        this.lastScroll = window.scrollY;
        if (this.lastScroll - this.lastAddition > 190){
          this.lastAddition = this.lastScroll;
          this.startingDiv.push(null);
        }
      }
    }
  }
  showAlert(i) {
    alert("Button '"+i+ "' is  clicked")
  }
}
