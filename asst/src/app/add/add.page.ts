import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  DT = -1; 
  SP = -1;
  TF = 0;

  newMember = {name:"", age: 0,  gender: "", phone: "", diet: "", subPlan: "", TotalFees: 0 };

  constructor(public DataSrv: DataService,public alertCtrl: AlertController) { }

  subPlan = 
  [
    { value: 100, name: '1 month' },
    { value: 280, name: '3 month' },
    { value: 500, name: '6 month' }
  ];

  dietType = 
  [
    { value: 0, name: 'Normal Diet' },
    { value: 50, name: 'Low Carbs' },
    { value: 30, name: 'Low Fat' }
  ];

  add() {
    
    this.TF = this.subPlan[this.SP].value + this.dietType[this.DT].value;
    this.newMember.TotalFees = this.TF;
    this.DataSrv.member.push(this.newMember);
    alert("inserted!");
  }
  ngOnInit() {
  }

}
