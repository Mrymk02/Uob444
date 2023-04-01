import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Meal } from '../data.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.page.html',
  styleUrls: ['./meal.page.scss'],
})
export class MealPage implements OnInit {

  public title = '';
  public imageUrl = '';
  public ingredients = '';
  public dietType = '';
  public calories = '';

  public newMeal: Meal[] =[];

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
      
  }

  addMeal() {
    const meal = {
      id: Math.floor(Math.random() * 1000) + 1,
      title: this.title,
      imageUrl: this.imageUrl,
      ingredients: this.ingredients.split(','),
      dietType: this.dietType,
      calories: Number(this.calories)
    };

    this.newMeal.push(meal);

    this.alertCtrl.create({
      header: 'Meal Added',
      message: `The meal ${meal.title} has been added to your system.`,
      buttons: 
      [
        {
        text: 'View Meal',
        handler: () => 
        {     
          this.viewMeal();
        }
      },
      {
        text: 'Close',
        handler: () => 
        {     

        }
      }
    ]
    }).then(alert => alert.present());

    this.navCtrl.pop();
  }

  viewMeal()
  {

  }

}
