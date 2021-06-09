import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDivComponent } from './dynamic-div.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  {path: '', component: DynamicDivComponent}
]

@NgModule({
  declarations: [
    DynamicDivComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class DynamicDivModule { }
