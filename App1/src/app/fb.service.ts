// @ts-nocheck
import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
// AngularFire
import { collection, collectionData, CollectionReference, DocumentReference } from '@angular/fire/firestore';
import { getDocs, doc, deleteDoc, updateDoc, docData, setDoc, addDoc, query } from '@angular/fire/firestore';
import { DocumentData } from 'firebase/firestore';
import { Observable } from 'rxjs';
  
export interface member 
{
  sid: string;
  fname: string;
  lname: string;
  age: string;
  gender: string;
  major: string;
  phone: string;
  email: string;
}

export interface activity 
{
  title: string;
  date: string;
  duration: string;
  venue: string;
  participants: string;
  topic: string;
}

@Injectable({
  providedIn: 'root'
})

export class FbService {

  constructor( public firestore : Firestore ) 
  {
    // Get a reference to members collection
    this.memberCollection = collection( firestore, 'members' );
    // Get the data
    this.getMembers();

    // Get a reference to activities collection
    this.activityCollection = collection( firestore, 'activities' );
    // Get the data
    this.getActivities();
  }

// Member :

  // 1. Object
    member: member =  { sid: "", fname: "", lname: "", age: "", gender: "", major: "", phone: "", email: "" };
  // 2. Array of any
    public members: any[] = [];
  // 3. Observable array of Courses
    public members$: Observable<member[]>;
  // 4. Collection reference
    memberCollection: CollectionReference<DocumentData>;
  // 5. Get all members
    async getMembers()
    {
      this.member$ = collectionData ( query(collection(this.firestore,'members')), {}) as Observable<member[]>;
    }
  // 6. Register a member
    registerMember( member: member ): Promise<DocumentReference>
    {
      return addDoc( this.memberCollection, member );
    }
  // 7. Edit a member
    editMember( member: member ): Promise<DocumentData>
    {
      return updateDoc( doc( this.memberCollection, member.sid ), member );
    }
  // 8. Delete a member
    deleteMember( member: member ): Promise<void>
    {
      deleteDoc( doc( this.memberCollection, member.sid ) );
    }


  // Activity :

  // 1. Object
    activity: activity =  { title: "", date: "", duration: "", venue: "", participants: "", topic: "" };
  // 2. Array of any
    public activities: any[] = [];
  // 3. Observable array of Courses
    public activities$: Observable<activity[]>;
  // 4. Collection reference
    activityCollection: CollectionReference<DocumentData>;
  // 5. get all activities
    async getActivities()
    {
      this.activities$ = collectionData ( query(collection(this.firestore,'activities')), {}) as Observable<activity[]>;
    }
  // 6. Add an activity
    async addActivity( activity: activity )
    {
      await addDoc( this.activityCollection, activity );
    }
  // 7. Delete an activity
    async deleteActivity( activity: activity )
    {
      await deleteDoc( doc( this.activityCollection, activity.title ) );
    }
  // 8. Edit an activity
    async editActivity( activity: activity )
    {
      await updateDoc( doc( this.activityCollection, activity.title ), activity );
    }
    
}
