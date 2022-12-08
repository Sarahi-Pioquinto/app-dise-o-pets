import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotifiqueishonsPageRoutingModule } from './notifiqueishons-routing.module';

import { NotifiqueishonsPage } from './notifiqueishons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotifiqueishonsPageRoutingModule
  ],
  declarations: [NotifiqueishonsPage]
})
export class NotifiqueishonsPageModule {}
