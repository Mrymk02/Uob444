import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FBService, activities } from '../fb.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {
  
  isEditMode = false;

  AddForm :FormGroup;

    constructor(public formbuilder: FormBuilder, public Fb: FBService,) { 
      this.AddForm=formbuilder.group({
        Title: ['',Validators.compose([Validators.required,Validators.pattern('[a-zA-Z0-9]*')])],
        Date : ['',Validators.required], 
        duration: ['',Validators.required],
        venue: ['',Validators.compose([Validators.required,Validators.pattern('[a-zA-Z0-9]*')])], 
        NumParticipants: ['',Validators.compose([Validators.required,Validators.pattern('[a-zA-Z0-9]*')])],
        Topic: ['',Validators.required],
      });
    }
  toggleEditMode(){
      this.isEditMode = !this.isEditMode;
    }
    Add(activity: activities){
      if(this.AddForm.valid){
        this.Fb.addActivities(activity).then((res) => {
          alert("Added Successfully");
        }).catch((err) => {
          console.log("error in adding");
        });
      }
    }
    EditActivity(activity: activities){
      this.Fb.updateActivities(activity).then((res) => {
        alert("Updated Successfully");
      }).catch((err) => {
        console.log(err, "error in updateing");
      });
      this.toggleEditMode();
    }
   RemoveActivity(activity: activities)
   {
      this.Fb.deleteActivities(activity).then((res) => {
        alert("Deleted Successfully");
      }).catch((err) => {
        console.log("error in deleteing");
      });
    }

  ngOnInit( ) 
  { }
} 
