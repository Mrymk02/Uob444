import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ActivityPageRoutingModule } from './activity-routing.module';

import { ActivityPage } from './activity.page';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ActivityPageRoutingModule
  ],
  declarations: [ActivityPage]
})
export class ActivityPageModule {}
