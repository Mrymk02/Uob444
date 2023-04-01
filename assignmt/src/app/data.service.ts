import { Injectable } from '@angular/core';

// structure
export interface ListOfMembers 
{
  name: string;
  age: number;
  gender: string;
  phone: string;
  diet: string;
  dietVal: number;
  subPlan: string;
  subPlanVal: number;
  TotalFees: number;
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

export class DataService 
{
  public index = -1;
  
  public member = 
  [
    { name: 'Reem', age: 36, gender: 'Female', phone: '+973 39697849', diet: 'Low Fat', dietVal:30, subPlan: '6 months', subPlanVal:500, TotalFees: 530 },
    { name: 'Fahad', age: 21, gender: 'Male', phone: '+966 349837758', diet: 'Normal Diet', dietVal:0, subPlan: '1 month', subPlanVal:100, TotalFees: 100 },
    { name: 'Salem', age: 17, gender: 'Male', phone: '+971 555031121', diet: 'Low Carbs', dietVal:50, subPlan: '3 months', subPlanVal:280, TotalFees: 330 }
  ];

  constructor( ) 
  { }
}
