<<<<<<< HEAD:src - meal/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'add-meal',
    loadComponent: () => import('./add-meal/add-meal.page').then( m => m.AddMealPage)
  },  {
    path: 'meal',
    loadComponent: () => import('./meal/meal.page').then( m => m.MealPage)
  },

];
=======
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'add-meal',
    loadComponent: () => import('./add-meal/add-meal.page').then( m => m.AddMealPage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'add-meal',
    redirectTo: 'add-meal',
    pathMatch: 'full',
  }
];
>>>>>>> 75ad6101fce24598b5bab9bcbf685ed1b272cc95:assignment2/src/app/app.routes.ts
