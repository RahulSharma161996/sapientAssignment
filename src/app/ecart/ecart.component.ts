import { Component, OnInit } from '@angular/core';
import { EcartService } from './ecart.service';
import { faTh, faThList, faFilter } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-ecart',
  templateUrl: './ecart.component.html',
  styleUrls: ['./ecart.component.scss']
})
export class EcartComponent implements OnInit {
  products = [];
  view = 'grid';
  faTh = faTh;
  faFilter = faFilter;
  faThList = faThList;
  backup = [];
  isLoading = true;
  constructor(private ecartService: EcartService) { }

  ngOnInit(): void {
    this.ecartService.getProducts().subscribe(res => {
      this.products = res;
      this.isLoading = false;
      this.backup = res;
    })
  }

  toggleView(data){
    this.view = data;
  }

  filter(a,b){
      let lowerLimit = a;
      let upperLimit = b;
      this.products = this.backup.filter(item => {
        if(b == 'infinite')
        return item.price > lowerLimit
        else
        return item.price > lowerLimit && item.price < upperLimit
      })

  }

  clearFilter(){
    this.products = this.backup;
  }

}
