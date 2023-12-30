import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FBService , members} from '../fb.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {

  RegisterForm: FormGroup;
    isEditMode =false;
      constructor(public formbuilder: FormBuilder, public Fb: FBService) {
      this.RegisterForm=formbuilder.group({ 
        StudentID: ['', Validators.compose([Validators.required, Validators.pattern(/^20[0-2][0-9]{1}[0-9]{5}$/)])],
        FirstName: ['', Validators.compose([Validators.required, Validators.pattern(/[a-zA-Z]/), Validators.minLength(3), Validators.maxLength(30)])],
        LastName: ['', Validators.compose([Validators.required, Validators.pattern(/[a-zA-Z]/), Validators.minLength(3), Validators.maxLength(30)])],
        Age: ['', Validators.compose([Validators.required, Validators.pattern(/^(1[7-9]{1}|[2-6]{1}[0-9]{1})$/)])],
        Gender: ['', Validators.required],
        Major: ['', Validators.compose([Validators.required, Validators.pattern(/[a-zA-Z]/), Validators.minLength(2), Validators.maxLength(30)])],
        PhoneNumber: ['', Validators.compose([Validators.required, Validators.pattern(/^((\+|00)973\s?)?[36][0-9]{7}$/)])],
        Email: ['', Validators.compose([Validators.required, Validators.pattern(/^20[0-2][0-9]{1}[0-9]{5}@stu\.uob\.edu\.bh$/)])],
        // StudentID: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9]*')])],
        // FirstName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9]*'), Validators.minLength(3), Validators.maxLength(30)])],
        // LastName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9]*'), Validators.minLength(3), Validators.maxLength(30)])],
        // Age: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9]*')])],
        // Gender: ['', Validators.compose([Validators.required])],
        // Major: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9]*'), Validators.minLength(2), Validators.maxLength(30)])],
        // PhoneNumber: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9]*')])],
        // Email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')])],
      });
     }
       toggleEditMode(){
      this.isEditMode = !this.isEditMode;
    }
       Register(member: any){
      if(this.RegisterForm.valid){
      this.Fb.addMembers(member).then((res) => {
         alert("Added successfully");
       }).catch((err) => {
         console.log("Error in adding");
       });
     };
    } 
      EditMember(member: members){
      this.Fb.updateMembers(member).then((res) => {
        alert("Updated successfully");
      }).catch((err) => {
        console.log("Error in updateing");
      });
      this.toggleEditMode();
    }
    
    RemoveMember(member: members){
      this.Fb.deleteMembers(member).then((res) => {
        alert("Deleted successfully");
      }).catch((err) => {
        console.log("Error in deleting");
      });     
    }
      ngOnInit() {
    }
    }
