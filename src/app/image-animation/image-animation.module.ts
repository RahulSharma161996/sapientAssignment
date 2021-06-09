import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageAnimationComponent } from './image-animation.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  {path: '', component: ImageAnimationComponent}
]

@NgModule({
  declarations: [
    ImageAnimationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class ImageAnimationModule { }
