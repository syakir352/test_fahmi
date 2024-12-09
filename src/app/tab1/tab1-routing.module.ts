import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children: []
  },
  {
    path: 'tabs',
    loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule),
  },
  {
    path: '',
    redirectTo: '/tabs',
    pathMatch: 'full',
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
