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
