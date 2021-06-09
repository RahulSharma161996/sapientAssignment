import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcartComponent } from './ecart.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  {path: '', component: EcartComponent}
]


@NgModule({
  declarations: [EcartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class EcartModule { }
