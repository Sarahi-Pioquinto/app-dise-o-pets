import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PataPage } from './pata.page';

const routes: Routes = [
  {
    path: '',
    component: PataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PataPageRoutingModule {}
