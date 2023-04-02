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

  public newMeal: Meal[] =[];

  // show or hide view
  public show: boolean = false;


  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    public dataService: DataService) {
     this.meals = this.dataService.getMeals();
    }

    ionViewDidEnter() {
      this.meals = this.dataService.getMeals();
    }
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
      this.newMeal.push(meal)
      this.dataService.addMeal(meal);
      console.log(this.newMeal);
      console.log(this.dataService.meals);
    


    this.alertCtrl.create({
      header: 'Meal Added',
      message: `The meal ${meal.title} has been added to your system.`,
      buttons: 
      [
        {
        text: 'View Meal',
        handler: () => 
        {     
          this.show = true;
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
    this.show = !this.show;
  }

}
