import { Injectable } from '@angular/core';

// structure
export interface ListOfMembers 
{
  name: string;
  age: number;
  gender: string;
  phone: string;
  diet: string;
  subPlan: string;
  TotalFees: number;
}

@Injectable({
  providedIn: 'root'
})

export class DataService 
{
  public member= 
  [
    { name: 'Reem', age: 36, gender: 'Female', phone: '+973 39697849', diet: 'Low Fat', subPlan: '6 months', TotalFees: 530 },
    { name: 'Fahad', age: 21, gender: 'Male', phone: '+966 349837758', diet: 'Normal Diet', subPlan: '1 month', TotalFees: 100 },
    { name: 'Salem', age: 17, gender: 'Male', phone: '+971 555031121', diet: 'Low Carbs', subPlan: '3 months', TotalFees: 330 }
  ];

  constructor( ) 
  { }
}
