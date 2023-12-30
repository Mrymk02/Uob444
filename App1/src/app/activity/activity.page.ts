import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FbService, activities } from '../fb.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit 
{
  topics = ["Cultural", "Scientific", "Competition", "Organization", "General"];
  activityForm: FormGroup;
  isEditMode = false;

  constructor( public formbuilder: FormBuilder, public Fb: FbService ) 
  {
    this.activityForm = formbuilder.group
    ({
      Title: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9]*')])],
      Date: ['', Validators.required],
      duration: ['', Validators.required],
      venue: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9]*')])],
      NumParticipants: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9]*')])],
      Topic: ['', Validators.required],
    });
  }

  // add activity
  Register(activity: activities)
  {
    if(this.activityForm.valid)
    {
      this.Fb.addActivity(activity)
        .then((res) => 
        {
          alert("Added Successfully");
        })
        .catch((err) => 
        {
          console.log(err, "error in adding");
        });
    }
  }

  // edit activity
  EditActivity(activity: activities)
  {
    this.Fb.updateActivity(activity)
      .then((res) => 
      {
        alert("Updated Successfully");
      })
      .catch((err) => 
      {
        console.log(err, "error in updateing");
      });

      this.toggleEditMode();
  }

  // toggle edit mode
  toggleEditMode()
  {
    this.isEditMode = !this.isEditMode;
  }
  
  // remove activity
  RemoveActivity(activity: activities)
  {
    this.Fb.deleteActivity(activity)
      .then((res) => 
      {
        alert("Deleted Successfully");
      })
      .catch((err) => 
      {
        console.log("error in deleteing");
      });
  }

  ngOnInit() 
  {

  }

}
