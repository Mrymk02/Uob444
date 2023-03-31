import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  // enable or disable edit
  public edit: boolean = false;

  // an array for subscription plans
  subPlan = [
              { value: 100, name: '1 month' },
              { value: 280, name: '3 month' },
              { value: 500, name: '6 month' }
            ];

  // an array for diet types
  dietType = [
              { value: 0, name: 'Normal Diet' },
              { value: 50, name: 'Low Carbs' },
              { value: 30, name: 'Low Fat' }
             ];


  public index = -1;

  constructor(public ActiveRoute:ActivatedRoute, public DataSrv: DataService) 
  {
    // gets the index from the url
    this.index = Number( this.ActiveRoute.snapshot.paramMap.get("i") );
  }
  // indexes for the selected option
  DT = -1; 
  SP = -1; 

  // variable to calculate 
  TF = 0;

  save( )
  {
    if(this.DT != -1)
    {
      // update diet type
      this.DataSrv.member[this.index].diet = this.dietType[this.DT].name;
      this.DataSrv.member[this.index].dietVal = this.dietType[this.DT].value;
    }

    if(this.SP != -1)
    {
    // update sub plan
    this.DataSrv.member[this.index].subPlan = this.subPlan[this.SP].name;
    this.DataSrv.member[this.index].subPlanVal = this.subPlan[this.SP].value;
    }

    // calculating the total fees
    this.TF = this.DataSrv.member[this.index].subPlanVal + this.DataSrv.member[this.index].dietVal;
    // storing total fees into the empty array
    this.DataSrv.member[this.index].TotalFees = this.TF;
  }

  ngOnInit( ) 
  { }

}
