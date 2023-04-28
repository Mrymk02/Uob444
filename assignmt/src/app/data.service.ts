import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';



// structure
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
  top5Meals: [];
}

// structure
export interface Meal 
{
  id: number;
  title: string;
  imageUrl: string;
  ingredients: string[];
  dietType: string;
  calories: number;
}

@Injectable({
  providedIn: 'root'
})
//

export class DataService {
  public member: ListOfMembers[] = [];
  membersCollection: AngularFirestoreCollection<ListOfMembers>;
  members: Observable<ListOfMembers[]>;

  public meal: Meal[] = [];
  MealsCollection: AngularFirestoreCollection<Meal>;
  meals: Observable<Meal[]>;

  constructor(private afs: AngularFirestore) {
    this.membersCollection = this.afs.collection<ListOfMembers>('members');
    this.members = this.membersCollection.valueChanges();
    this.members.subscribe((members: ListOfMembers[]) => {
      this.member = members;
    });



    this.MealsCollection = this.afs.collection<Meal>('meals');
    this.meals = this.MealsCollection.valueChanges();

    this.meals.subscribe((meals: Meal[]) => {
      this.meal = meals;
    });



  }

  addMember(member: ListOfMembers) {
    return this.membersCollection.add(member);
  }

  updateMember(id: string, member: ListOfMembers) {
    return this.membersCollection.doc(id).update(member);
  }

  deleteMember(id: string) {
    return this.membersCollection.doc(id).delete();
  }



  public index = -1;
  
  addMeal(meal: Meal) {
    return this.MealsCollection.add(meal);
  }
}
