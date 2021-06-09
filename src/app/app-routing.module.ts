import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'animation', pathMatch: 'full'},
  {path: 'animation', loadChildren: () => import('./image-animation/image-animation.module').then(m => m.ImageAnimationModule)},
  {path: 'ecart', loadChildren: () => import('./ecart/ecart.module').then(m => m.EcartModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
