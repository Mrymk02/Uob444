import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, collectionData, CollectionReference, DocumentReference } from '@angular/fire/firestore';
import { getDocs, doc, deleteDoc, updateDoc, docData, setDoc, addDoc, query } from '@angular/fire/firestore';
import { Data } from '@angular/router';
import { DocumentData } from 'firebase/firestore';
import { Observable } from 'rxjs';
import {
    Auth,
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    sendSignInLinkToEmail
  } from '@angular/fire/auth';
import { Router } from '@angular/router';
  

export interface Members {
   id: string;
   sID: string;
   Fname: string;
   Lname: string;
   age: string;
   gender: string;
   major: string;
   email: string;
   pass: string;
   phone: string;
   activities: string[]
  }
  export interface Activities {
    id: string;
    title: string;
    date: Data;
    duration: string;
    venue: string;
    topic: string;
    cap: number;
    participants: string[]
   }
  
@Injectable({
  providedIn: 'root'
})
export class FBService {

  public members$: Observable<Members[]> | undefined;
  public memberCollection: CollectionReference<DocumentData>;

  public activities$: Observable<Activities[]> | undefined;
  public activityCollection: CollectionReference<DocumentData>;

  constructor(public firestore: Firestore, public auth:Auth, public router: Router) { 
    this.memberCollection = collection(this.firestore, 'members');
    this.getMembers();

    this.activityCollection = collection(this.firestore, 'activites');
    this.getActivities();
  }

  async getMembers(){
    const q = query(collection(this.firestore,'members'));
    this.members$ = collectionData(q, { idField: 'id', }) as Observable<Members[]>;
  }

  async getActivities(){
    const q = query(collection(this.firestore,'activites'));
    this.activities$ = collectionData(q, { idField: 'id', }) as Observable<Activities[]>;
  }

  addMembers(member: Members): Promise<DocumentReference>{
      return addDoc( collection(this.firestore, 'members'), member);
     }
     
  addActivities(activity: Activities): Promise<DocumentReference>{
      return addDoc( collection(this.firestore, 'activites'), activity);
     }
       
updateMembers(members:Members): Promise<void>{
    return updateDoc(doc(this.firestore, 'members', members.id), { 
       sID: members.sID,
       Fname: members.Fname,
       Lname: members.Lname,
       age: members.age,
       gender: members.gender,
       major: members.major,
       email: members.email,
       pass: members.pass,
       phone: members.phone,
       activitiies: members.activities
     });
    }

updateActivities(activity:Activities): Promise<void>{
  return updateDoc(doc(this.firestore, 'activites', activity.id), { 
     title: activity.title,
     date: activity.date,
     duration: activity.duration,
     venue: activity.venue,
     participants: activity.participants,
     topic: activity.topic,
     cap: activity.cap
   });
  }
  
  deleteMembers(members:Members): Promise<void> {
     return deleteDoc(doc(this.firestore, 'members', members.id));
    }

  deleteActivities(activity:Activities): Promise<void> {
      return deleteDoc(doc(this.firestore, 'activites', activity.id));
     }

    signUp(members:Members){
      const auth = getAuth();
      createUserWithEmailAndPassword(this.auth, members.email, members.pass).then((userCredential) => {
      // Signed up 
       const user = userCredential.user;
       alert("Sign up successfully");
       this.router.navigateByUrl('/view-activity');
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        });
    }

    message="";
    signIn(email: string, pass:string) {
      signInWithEmailAndPassword(getAuth(), email, pass).then((userCredential) => {
       // Signed in 
       const user = userCredential.user;
       alert("Logged in successfully");
       this.router.navigateByUrl('/view-activity');
      }).catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         this.message="Invalid email or password"

   });
   }

   signOut(){
    signOut(getAuth())
      .then((userCredential) => {
        alert("Signed out!");
        this.router.navigateByUrl('/home');
       })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
   }
    
}
