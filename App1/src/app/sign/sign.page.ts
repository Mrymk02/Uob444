import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FBService } from '../fb.service';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.page.html',
  styleUrls: ['./sign.page.scss'],
})
export class SignPage implements OnInit {

  constructor( public fb: FBService) {

   }
  
  email="";
  password="";
   signIn() {
    this.fb.signIn(this.email, this.password);
  }

  ngOnInit() {
  }

}
