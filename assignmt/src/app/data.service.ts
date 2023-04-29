import { Injectable } from '@angular/core';
type Diet = 'Normal' | 'Low fat' | 'Low carbs';


export interface Member {
  name: string;
  age: number;
  gender: 'Male' | 'Female';
  plan: '1' | '3' | '6';
  diet: Diet;
  meals: Array<Meal>;
}

export interface Meal {
  id?: number;
  title: String;
  image: String;
  ingredients: String;
  diet: Diet;
  calories: number;
}

@Injectable({
  providedIn: 'root'
})
//


export class DataService {
  members: Array<Member> = [
    {
      name: 'Bahaa Hani',
      age: 21,
      gender: 'Male',
      plan: '1',
      diet: 'Low carbs',
      meals: [
        {
          title: 'Vimto',
          image: 'vimto.jpg',
          ingredients: 'water, vimto, sugar',
          diet: 'Low carbs',
          calories: 30,
        },
      ],
    },
    {
      name: 'Maryam Kameshki',
      age: 22,
      gender: 'Female',
      plan: '6',
      diet: 'Normal',
      meals: [],
    },
    {
      name: 'May Mannaei',
      age: 23,
      gender: 'Female',
      plan: '3',
      diet: 'Low fat',
      meals: [],
    },
  ];

  fee(m: Member): number {
    let dietPricing = new Map([
      ['Normal', 0],
      ['Low carb', 50],
      ['Low fat', 30],
    ]);
    let planPricing = new Map([
      ['1', 100],
      ['3', 280],
      ['6', 500],
    ]);
    return dietPricing.get(m.diet)! + planPricing.get(m.plan)!;
  }

  meals: Array<Meal> = [
    {
      title: 'Sambosa',
      image: 'sambosa.jpg',
      ingredients: 'Bread, Cheese',
      diet: 'Normal',
      calories: 120,
    },
    {
      title: 'Mandi Lahm',
      image: 'mandi_lahm.jpg',
      ingredients: 'Mandi, Lahm',
      diet: 'Low fat',
      calories: 500,
    },
    {
      title: 'Vimto',
      image: 'vimto.jpg',
      ingredients: 'Water, Vimto, Sugar',
      diet: 'Low carbs',
      calories: 30,
    },
    {
      title: 'Gemat',
      image: 'gemat.jpg',
      ingredients: 'Wheat, Water',
      diet: 'Normal',
      calories: 35,
    },
    {
      title: 'Pasta',
      image: 'pasta.jpg',
      ingredients: 'Pasta, Tomato, Cheese, Basil',
      diet: 'Normal',
      calories: 250,
    },
    {
      title: 'Caesar Salad',
      image: 'salad.jpg',
      ingredients: 'Lettuce, Parmesan Cheese, Chicken, Caesar Sauce',
      diet: 'Normal',
      calories: 150,
    },
    {
      title: 'Biryani',
      image: 'biryani.jpg',
      ingredients: 'Rice, Chicken, Spices',
      diet: 'Normal',
      calories: 450,
    },
  ];

  constructor() {}
}
