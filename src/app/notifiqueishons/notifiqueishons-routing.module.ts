import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotifiqueishonsPage } from './notifiqueishons.page';

const routes: Routes = [
  {
    path: '',
    component: NotifiqueishonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotifiqueishonsPageRoutingModule {}
