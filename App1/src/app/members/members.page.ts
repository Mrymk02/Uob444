import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FBService, Members } from '../fb.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {
  memberForm: FormGroup;
  constructor(public FB: FormBuilder, public fb: FBService) {
    this.memberForm = this.FB.group({
      sID: ['', Validators.compose([Validators.required, Validators.pattern(/^20[0-2][0-9]{1}[0-9]{5}$/)])],
      Fname: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)])],
      Lname: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)])],
      age:['', Validators.compose([Validators.required, Validators.pattern(/^(1[7-9]{1}|[2-7]{1}[0-9]{1})$/)])],
      gender: ['', Validators.required],
      major: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^20[0-2][0-9]{1}[0-9]{5}@stu\.uob\.edu\.bh$/)])],
      pass: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z0-9]{8,}$/)])],
      phone: ['', Validators.compose([Validators.required, Validators.pattern(/^((\+|00)(973\s?))?[36][0-9]{7}$/)])]
    });
  }

   AddMember(member: Members){
    if (this.memberForm.valid) {
      this.fb.addMembers(member).then( (res)=>{
        alert ("Added Successfully");
      }).catch( (err)=>{
       console.log("Error in adding");
      })
      this.fb.signUp(member);

    }
     }

  
  UpdateMembers(member:Members){
       this.fb.updateMembers(member).then( (res)=>{
         alert("Updated Successfully");
       }).catch( (err)=>{
        console.log("error in update");
       })
     }
     DeleteMembers(member:Members){
      this.fb.deleteMembers(member).then( (res)=>{
       alert("Deleted Successfully");
       console.log(this.fb.members$);
      }).catch( (err)=>{
       console.log("error in delete");
      })
     }
    

  ngOnInit() {
  }

}
