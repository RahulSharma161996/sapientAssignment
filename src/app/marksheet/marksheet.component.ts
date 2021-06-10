import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faLongArrowAltDown, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.scss']
})
export class MarksheetComponent implements OnInit {
  marksheet: any;
  headings = [];
  backup: any;
  faLongArrowAltUp = faLongArrowAltUp;
  faLongArrowAltDown = faLongArrowAltDown;
  sorting = {
    'header': '',
    'count': 0,
  }
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/student.json").subscribe(data =>{
      let backup: any = data;
      this.marksheet = data;
      this.backup = backup.slice(0);;
      this.headings = Object.keys(data[0]);
    })
  }

  sort(heading){
    // count 1 = ASC, Count 2 = DSC
    if(this.sorting.header == '' || this.sorting.header != heading){
      this.sorting.header = heading;
      this.sorting.count = 1;
    }
    else{
    this.sorting.count = this.sorting.count != 2 ? this.sorting.count + 1: this.sorting.count = 0;
    }
    if(this.sorting.count != 0){
      if(this.sorting.count == 1)
      this.marksheet.sort((a,b) => 0 - (a[this.sorting.header] > b[this.sorting.header] ? -1 : 1));
      else
      this.marksheet.sort((a,b) => 0 - (a[this.sorting.header] > b[this.sorting.header] ? 1 : -1));
    }
    else{
      this.marksheet = this.backup.slice(0);
    }
  }
}
