import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.page.html',
  styleUrls: ['./add-meal.page.scss'],
})
export class AddMealPage {
  title: string = '';
  imageUrl: string = '';
  ingredients: string = '';
  dietType: string = '';
  calories: number = 0;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public DataSrv: DataService
  ) {}

  addMeal() {
    const meal: Meal = {
      id: Math.floor(Math.random() * 1000) + 1,
      title: this.title,
      imageUrl: this.imageUrl,
      ingredients: this.ingredients.split(','),
      dietType: this.dietType,
      calories: this.calories
    };


    this.alertCtrl.create({
      header: 'Meal Added',
      message: `The meal ${meal.title} has been added to your system.`,
      buttons: ['OK']
    }).then(alert => alert.present());

    this.navCtrl.pop();
  }
}
