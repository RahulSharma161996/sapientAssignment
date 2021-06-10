import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputOutputComponent } from './input-output.component';
import { RouterModule, Routes } from '@angular/router';
import { DisplaytimerComponent } from './displaytimer/displaytimer.component';
import { ActiontimerComponent } from './actiontimer/actiontimer.component';
import { LoggerComponent } from './logger/logger.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';

const route: Routes = [{
  path: '', component: InputOutputComponent
}]


@NgModule({
  declarations: [
    InputOutputComponent,
    DisplaytimerComponent,
    ActiontimerComponent,
    LoggerComponent,
    CounterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(route)
  ]
})
export class InputOutputModule { }
