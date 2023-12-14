// @ts-nocheck
import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
// AngularFire
import { collection, collectionData, CollectionReference, DocumentReference } from '@angular/fire/firestore';
import { getDocs, doc, deleteDoc, updateDoc, docData, setDoc, addDoc, query } from '@angular/fire/firestore';
import { DocumentData } from 'firebase/firestore';
import { Observable } from 'rxjs';

export interface Course 
{
  id?: string;
  Code?: string;
  Name?: string;
}

@Injectable ({ providedIn: 'root' })

export class FBService 
{
  constructor(public firestore: Firestore) 
  {
    // get a reference to the courses collection
    this.courseCollection = collection(this.firestore, 'Courses');
    
    this.getCourses();		 // get courses as observable
    this.getCoursesCopy();		 // get courses by copy into array
  }

  // 1. Object
  course: Course = { id:"", Code: 'ITCS444', Name: "Mobile"};
  
  // 2. Array of any
  public courses: any[] = [];
  
  // 3. Observable array of Courses
  public courses$: Observable<Course[]>;
  
  // 4. Collection reference
  courseCollection: CollectionReference<DocumentData>;

  async getCourses()
  {
    const q = query(collection(this.firestore,'Courses'));
    this.courses$ = collectionData(q, {      idField: 'id',    }) as 		Observable<Course[]>;
  }

  async getCoursesCopy()
  {    
    const querySnapshot = await getDocs(collection(this.firestore, "Courses"));
    
    querySnapshot.forEach((doc) => 
    {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      this.courses.push (doc.data());
    });
  }
  
  // Create Data in Firestore with Add()
  addCourse(course): Promise<DocumentReference>
  {
    return addDoc( collection(this.firestore, 'Courses'), course);
  }
  
  // Create Course in Firestore with updateDoc()
  updateCourse(course:Course): Promise<DocumentReference>
  {
    return updateDoc(doc(this.firestore, 'Courses', course.id), 
    { 
      id: course.id,
      Code: course.Code,
      Name: course.Name
    });
  }
  
  // Delete Document Data in Firestore with deleteDoc()
  deleteCourse(course:Course): Promise<void> 
  {
    return deleteDoc(doc(this.firestore, 'Courses', course.id));
  }
}
