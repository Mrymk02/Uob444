import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FBService, Activities } from '../fb.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {

  actvForm: FormGroup;
  constructor(public FB: FormBuilder, public fb: FBService) { 
    this.actvForm = this.FB.group({
      title: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z\s0-9]+$/)])],
      cap:['', Validators.compose([Validators.required, Validators.pattern(/^[0-9]{3}$/)])],
      date: ['', Validators.required],
      duration: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z0-9\s]+$/)])],
      venue:['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z0-9\s]+$/)])],
      // participants: ['', Validators.compose([Validators.required, Validators.pattern(/^[0-9\s]+$/)])],
      topic: ['', Validators.required],
  });
  }

  onSubmit(val:any) {
    if (this.actvForm.valid) {
      console.log('Form data submitted successfully!', val.value);
      // Add logic to send data to Firebase or perform other actions
    } else {
      console.log('Form is invalid', val.errors);
    }
  }


  AddActivities(activity: Activities){
    if (this.actvForm.valid) {
      this.fb.addActivities(activity).then( (res)=>{
       alert("Added Successfully");
      }).catch( (err)=>{
       console.log("Error in adding");
      })
    }
     }

  
  UpdateActivities(activity:Activities){
       this.fb.updateActivities(activity).then( (res)=>{
         alert("Updated Successfully");
       }).catch( (err)=>{
        console.log("error in update");
       })
     }
     DeleteActivities(activity:Activities){
      this.fb.deleteActivities(activity).then( (res)=>{
       alert("Deleted Successfully");
       console.log(this.fb.activities$);
      }).catch( (err)=>{
       console.log("error in delete");
      })
     }
    


  ngOnInit() {
  }

}
