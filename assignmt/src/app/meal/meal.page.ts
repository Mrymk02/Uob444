import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { DataService, Meal } from '../data.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.page.html',
  styleUrls: ['./meal.page.scss'],
})
export class MealPage implements OnInit {
  meals: Meal[]
  public title = '';
  public imageUrl = '';
  public ingredients = '';
  public dietType = '';
  public calories = '';

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private dataService: DataService) {
     this.meals = this.dataService.getMeals();
    }


  ngOnInit() {
      
  }

  addMeal() {
    const meal: Meal = {
      id: Math.floor(Math.random() * 1000) + 1,
      title: this.title,
      imageUrl: this.imageUrl,
      ingredients: this.ingredients.split(','),
      dietType: this.dietType,
      calories: Number(this.calories)
      
    };
    this.dataService.addMeal(meal);

    this.alertCtrl.create({
      header: 'Meal Added',
      message: `The meal ${meal.title} has been added to your system.`,
      buttons: ['OK']
    }).then(alert => alert.present());

    this.navCtrl.pop();
  }

}
