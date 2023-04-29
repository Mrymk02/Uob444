import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonModal, NavController } from '@ionic/angular';
import { DataService, Meal } from '../data.service';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.page.html',
  styleUrls: ['./meal.page.scss'],
})
export class MealPage implements OnInit {
  @ViewChild('insert_modal') insert_modal: IonModal = {} as IonModal;
  newMeal = {} as Meal;

  close_insert() {
    this.insert_modal.dismiss();
    this.newMeal = {} as Meal;
  }

  add_meal() {
    this.dataSrv.meals.push(this.newMeal);
    this.newMeal = {} as Meal;
    this.insert_modal.dismiss();
  }

  @ViewChild('member_meal') member_meal: IonModal = {} as IonModal;
  target_member_idx = -1;
  member_add_meal(meal: Meal) {
    if (this.target_member_idx != -1) {
      this.dataSrv.members[this.target_member_idx].meals.push(meal);
      this.target_member_idx = -1;
    }
  }

  constructor(public dataSrv: DataService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}


