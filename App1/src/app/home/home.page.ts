import { Component } from '@angular/core';
import { DataService, laptop } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage 
{
  constructor(public DataSrv: DataService) {}
  // alert buttons
  alertButtons=["Ok"];
}