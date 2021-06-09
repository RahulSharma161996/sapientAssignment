import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'animation', pathMatch: 'full'},
  {path: 'animation', loadChildren: () => import('./image-animation/image-animation.module').then(m => m.ImageAnimationModule)},
  {path: 'ecart', loadChildren: () => import('./ecart/ecart.module').then(m => m.EcartModule)},
  {path: 'marksheet', loadChildren: () => import('./marksheet/marksheet.module').then(m => m.MarksheetModule)},
  {path: 'dynamicdiv', loadChildren: () => import('./dynamic-div/dynamic-div.module').then(m => m.DynamicDivModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
