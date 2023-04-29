import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { AngularFirestore} from '@angular/fire/compat/firestore';

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
public memberID: any;
  // index of the selected member
  public member: any;
  public memberDetails: any;
  public meal: any;
  public index = Number(this.activeRoute.snapshot.paramMap.get("i"));

  // Initialize an Observable to hold the member data
  members: Observable<any> | undefined;
  totalFeesChanged: any;
selectedCustomerId:any;
public favoriteMEals: any;
  constructor(
    private activeRoute: ActivatedRoute,
    public DataSrv: DataService,
    private firestore: AngularFirestore,
    private navctrl:NavController
  ) {

//this.activeRoute.snapshot.paramMap.get('id');

    this.selectedCustomerId =  this.index;
    if(this.selectedCustomerId){
      console.log(this.selectedCustomerId); // Add this line

      this.firestore.doc<any>('members/' + this.memberID).valueChanges().subscribe(res => {
        this.member = res;
      });
      const dietType = this.member.diet;
      this.memberDetails = this.member;
      //step 2 query the meals collection
      this.favoriteMEals = this.DataSrv.getFavoriteMeals(this.selectedCustomerId);
    }
    else{
      this.navctrl.navigateForward('/members');
  }
    

  }
  // public selectedCustomerId = 'VQzLGuGIr3W9O2PIQTvN';

  




getMember(){
  this.firestore.doc<any>('members/' + this.memberID).valueChanges().subscribe(res => {
    this.member = res;
  });
}




  
  ngOnInit() {

  }

  // indexes for the selected option
  DT = -1;
  SP = -1;

  // variable to calculate
  TF = this.DataSrv.member[this.index].TotalFees;

  save() {
    if (this.DT != -1) {
      // update diet type
      this.DataSrv.member[this.index].diet = this.dietType[this.DT].name;
      this.DataSrv.member[this.index].dietVal = this.dietType[this.DT].value;
    }

    if (this.SP != -1) {
      // update sub plan
      this.DataSrv.member[this.index].subPlan = this.subPlan[this.SP].name;
      this.DataSrv.member[this.index].subPlanVal = this.subPlan[this.SP].value;
    }

    // calculating the total fees
    this.TF =
      this.DataSrv.member[this.index].subPlanVal +
      this.DataSrv.member[this.index].dietVal;
    // storing total fees into the empty array
    this.DataSrv.member[this.index].TotalFees = this.TF;

    // Update the member data in Firebase
    const memberId = this.DataSrv.member[this.index]?.id;
    this.firestore
      .collection('members')
      .doc(memberId)
      .update(this.DataSrv.member[this.index]);
  }




  dlt() {
    // delete the member from Firebase
    const memberId = this.DataSrv.member[this.index]?.id;
    this.firestore.collection('members').doc(memberId).delete();

    // remove the member from the local array
    this.DataSrv.member.splice(this.index, 1);
  }

  updateTotalFees() {
    // Get the current member object from the data service
    const member = this.DataSrv.member[this.index];
  
    // Calculate the new total fees based on the updated values
    const newTotalFees = member.subPlanVal + member.dietVal;
  
    // If the new total fees are different from the current total fees,
    // update the current total fees and emit an event to notify listeners
    if (newTotalFees !== this.TF) {
      this.TF = newTotalFees;
      this.totalFeesChanged.emit(this.TF);
    }
  }
}