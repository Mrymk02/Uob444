import { Component, OnInit } from '@angular/core';
import { DataService, ListOfMembers } from '../data.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  // variables to store user's input
  name = '';
  age = 0;
  gender = '';
  phone = '';
  DT = -1; 
  SP = -1;
  TF = 0;

  // an empty array of type ListOdMembers
  newMember : ListOfMembers = {} as ListOfMembers;

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

  constructor(
    public DataSrv: DataService,
    public alertCtrl: AlertController,
    public router: Router,
    private db: AngularFirestore 
  ) { }

  async add() {
    // storing input into the empty array
    
    this.newMember.name = this.name;
    this.newMember.age = this.age;
    this.newMember.gender = this.gender;
    this.newMember.phone = this.phone;
    this.newMember.diet = this.dietType[this.DT].name;
    this.newMember.dietVal = this.dietType[this.DT].value;
    this.newMember.subPlan = this.subPlan[this.SP].name;
    this.newMember.subPlanVal = this.subPlan[this.SP].value;

    // calculating the total fees
    this.TF = this.subPlan[this.SP].value + this.dietType[this.DT].value;
    // storing total fees into the empty array
    this.newMember.TotalFees = this.TF;

    // Save the new member object in Firebase
    this.db.collection('members').add(this.newMember);

    // an alert message with actions push or return home
    let alert = this.alertCtrl.create({
      header:'Insert Member',
      message: `Name: ${this.newMember.name}<br><br>  Age: ${this.newMember.age}<br><br> Gender: ${this.newMember.gender}<br><br> Phone Number: ${this.newMember.phone}<br><br> Diet Type: ${this.newMember.diet}<br><br> Subscription Plan: ${this.newMember.subPlan}<br><br> Total Fees: ${this.newMember.TotalFees} BD`,
      buttons: 
      [
        {
          text: 'OK',
          handler: () => 
          {     
            this.router.navigateByUrl('/home'); 
          }
        },
        {
          text: 'Cancel',
          handler: () => 
          {     
            this.router.navigateByUrl('/home'); 
          }
        }
      ]
    });
    // show alert
    (await alert).present();
  }

  ngOnInit() { }

}