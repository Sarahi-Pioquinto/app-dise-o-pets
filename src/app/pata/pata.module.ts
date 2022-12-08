import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PataPageRoutingModule } from './pata-routing.module';

import { PataPage } from './pata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PataPageRoutingModule
  ],
  declarations: [PataPage]
})
export class PataPageModule {}
