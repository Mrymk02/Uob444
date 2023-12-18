import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Course, FbService } from '../fb.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  newCourse: Course = {} as Course;
  
  constructor( public fb:FbService )
  {

  }

  AddCourse()
  {
    this.fb.addCourse(this.newCourse)
    .then( (res)=>{
      alert("Added Successfully");
    })
    .catch( (err)=>{
      console.log("Error in adding");
    })
  }

  UpdateCourse(course:Course)
  {
    this.fb.updateCourse(course)
    .then( (res)=>{
      alert("Updated Successfully");
    })
    .catch( (err)=>{
      console.log("error in update");
    })
  }

  DeleteCourse(course:Course)
  {
    this.fb.deleteCourse(course)
    .then( (res)=>{
      alert("Deleted Successfully");
    })
   .catch( (err)=>{
      console.log("error in delete");
    })
  }
}
