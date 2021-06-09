import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarksheetComponent } from './marksheet.component';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const route: Routes = [
  {path: '', component: MarksheetComponent}
]



@NgModule({
  declarations: [MarksheetComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    FontAwesomeModule
  ]
})
export class MarksheetModule { }
