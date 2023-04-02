import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { DataService, Meal } from '../data.service';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.page.html',
  styleUrls: ['./meal.page.scss'],
})
export class MealPage implements OnInit {
  public mealForm : FormGroup;

  public ind = -1;
  public title = '';
  public imageUrl = '';
  public ingredients = '';
  public dietType = '';
  public calories = '';
  public string ='';

  public newMeal: Meal[] =[];

  // show or hide view
  public show: boolean = false;


  constructor
  ( private navCtrl: NavController,
    private alertCtrl: AlertController,
    private fb: FormBuilder ) 
  {
    this.mealForm = this.fb.group
    ({
      'til':['', Validators.required],
      'img':['', Validators.required],
      'ing':['', Validators.required],
      'diet':['', Validators.required],
      'cal':['', Validators.required]
    })
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

    this.alertCtrl.create({
      header: 'Meal Added',
      message: `The meal ${meal.title} has been added to your system.`,
      buttons: 
      [
        {
        text: 'View All Meals',
        handler: () => 
        {     
          this.show = true;
        }
      },
      {
        text: 'Close',
        handler: () => 
        {     
          this.show = false;
        }
      }
    ]
    }).then(alert => alert.present());

    // this.navCtrl.pop();

    this.newMeal.push(meal);
  }

  viewMeal(i:any)
  {
    // console.log(this.mealForm.valid);
    this.ind = i;
    this.string = 'ID: ' + this.newMeal[i].id + '    Title: ' + this.newMeal[i].title + '    Image Url: ' + this.newMeal[i].imageUrl + '    Ingredients: ';

    for (let index = 0; index < this.newMeal[i].ingredients.length; index++) {
      this.string += (index+1) + ') ' + this.newMeal[i].ingredients[index] + '    ';
    }

    this.string += 'Diet Type: ' + this.newMeal[i].dietType + '    Calories: ' + this.newMeal[i].calories;

    alert(this.string);
  }

}
