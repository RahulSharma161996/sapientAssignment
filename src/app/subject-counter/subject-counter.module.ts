import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectCounterComponent } from './subject-counter.component';
import { RouterModule, Routes } from '@angular/router';
import { SubactiontimerComponent } from './subactiontimer/subactiontimer.component';
import { SubloggerComponent } from './sublogger/sublogger.component';
import { SubdisplaytimerComponent } from './subdisplaytimer/subdisplaytimer.component';
import { SubcounterComponent } from './subcounter/subcounter.component';
import { FormsModule } from '@angular/forms';

const route: Routes = [{
  path: '', component: SubjectCounterComponent
}]

@NgModule({
  declarations: [SubjectCounterComponent,
    SubactiontimerComponent,
    SubcounterComponent,
    SubloggerComponent,
    SubdisplaytimerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    FormsModule
  ]
})
export class SubjectCounterModule { }
