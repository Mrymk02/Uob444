import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { DataService, Meal } from '../data.service';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface ListOfMembers 
{
  id: any;
  name: string;
  age: number;
  gender: string;
  phone: string;
  diet: string;
  dietVal: number;
  subPlan: string;
  subPlanVal: number;
  TotalFees: number;
   top5Meals:Meal [];
}

@Component({
  selector: 'app-meal',
  templateUrl: './meal.page.html',
  styleUrls: ['./meal.page.scss'],
})
export class MealPage implements OnInit {
  public mealForm : FormGroup;

  public title = '';
  public imageUrl = '';
  public ingredients = '';
  public dietType = '';
  public calories = '';
  // public string ='';

  public newMeal: Meal[] =[];
  public meal: Meal[] = [];
  MealsCollection: AngularFirestoreCollection<Meal>;
  meals: Observable<Meal[]>;
 public mealsCollection!: AngularFirestoreCollection<Meal>;
 membersCollection: AngularFirestoreCollection<ListOfMembers>;
 members: Observable<ListOfMembers[]>;
 public member: ListOfMembers[] = [];

  
  selectedMeal!: Meal;

  // show or hide view
  public show: boolean = false;
  public added: boolean = true;





  constructor
  ( private navCtrl: NavController,
    private alertCtrl: AlertController,
    private fb: FormBuilder ,
    public DataSrv: DataService,
    public aws: AngularFirestore) 
  {
    this.mealForm = this.fb.group
    ({
      'til':['', Validators.compose([Validators.required, Validators.pattern('^[^ \t]+[-a-zA-Z ]+([-a-zA-Z]+)*$')])],
      'img':['', Validators.compose([Validators.required, Validators.pattern('^[^ \t]+[-a-zA-Z0-9]+([-a-zA-Z/.]+)*$')])],
      'ing':['', Validators.compose([Validators.required, Validators.pattern('^[^ ,]+[-a-zA-Z0-9, \n]+([-a-zA-Z \n]+)$')])],
      'diet':['', Validators.required],
      'cal':['', Validators.compose([Validators.required, Validators.pattern('^[1-9][0-9]{0,9}')])]
    })
    this.membersCollection = this.aws.collection<ListOfMembers>('members');
    this.members = this.membersCollection.valueChanges();
    this.members.subscribe((members: ListOfMembers[]) => {
      this.member = members;
    });



    this.MealsCollection = this.aws.collection<Meal>('meals');
    this.meals = this.MealsCollection.valueChanges();

    this.meals.subscribe((meals: Meal[]) => {
      this.meal = meals;
    });



  }


  getMeals(): Observable<Meal[]> {
    return this.aws.collection<Meal>('meals').valueChanges();
  }

  ngOnInit() {
    this.getMeals().subscribe(res => {
      this.newMeal = res;
    });  
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
    
// Store newMeal in Firebase
this.aws.collection(`meals`).add(this.newMeal);

  }
  
  async addMealToMember(meal: Meal, memberId: number) {
    const memberRef = this.aws.collection('members').doc(String(memberId));
    const mealsRef = this.aws.collection('meals');
  
    // Add the meal to Firebase
    const mealRef = await mealsRef.add(meal);
    
  }
  

  // viewMeal(i:any)
  // {
  //   // console.log(this.mealForm.valid);
  //   this.string = '(ID:) ' + this.newMeal[i].id + '\n    (Title:) = ' + this.newMeal[i].title + '\n    (Image Url:) = ' + this.newMeal[i].imageUrl + '\n    (Ingredients:) = \n';

  //   for (let index = 0; index < this.newMeal[i].ingredients.length; index++) {
  //     this.string += '        ' + (index+1) + ') ' + this.newMeal[i].ingredients[index] + '\n';
  //   }

  //   this.string += '    (Diet Type:) = ' + this.newMeal[i].dietType + '\n    (Calories:) = ' + this.newMeal[i].calories;

  //   alert(this.string);
  // }



  viewMealcard(index: number) 
  {
    this.selectedMeal = this.newMeal[index];
  }
}

