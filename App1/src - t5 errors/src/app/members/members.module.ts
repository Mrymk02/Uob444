import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { MembersPageRoutingModule } from './members-routing.module';

import { MembersPage } from './members.page';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembersPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [MembersPage]
})
export class MembersPageModule {}
