import { Injectable } from '@angular/core';
import { DocumentData } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData, CollectionReference, DocumentReference } from '@angular/fire/firestore';
import { getDocs, doc, deleteDoc, updateDoc, docData, setDoc, addDoc, query, where } from '@angular/fire/firestore';

export interface members
{
  id : string; 
  StudentID : string, 
  FirstName : string, 
  LastName : string, 
  Age : string, 
  Gender : string, 
  Major : string, 
  PhoneNumber : string, 
  Email : string 
}

export interface activities
{ 
  id : string,
  Title : string,
  Date : Date, 
  duration : string, 
  venue : string, 
  NumOfParticipants : string,
  Topic : string
}

@Injectable ({ providedIn: 'root' })

export class FBService 
{
  //////////////// Observable array ////////////////
  public members$: Observable<members[]> | undefined;
  public activities$: Observable<activities[]> | undefined;
  //////////////// Observable array ////////////////


  //////////////// Collection reference ////////////////
  membersCollection: CollectionReference<DocumentData>;
  activitiesCollection: CollectionReference<DocumentData>;
  //////////////// Collection reference ////////////////


//////////////////////////////////////// constructor ////////////////////////////////////////
  constructor( public firestore: Firestore ) 
  {
    // get a reference to the members collection
    this.membersCollection = collection(this.firestore, 'members');
    // get a reference to the activities collection
    this.activitiesCollection = collection(this.firestore, 'activities');
    // get members as observable
    this.getMembers();
    // get activities as observable
    this.getActivities();   
  }
//////////////////////////////////////// constructor ////////////////////////////////////////


// get members as observable
  async getMembers()
  {
    const q = query(collection(this.firestore,'members'));
    this.members$ = collectionData(q, {idField: 'id',}) as Observable<members[]>;
  }

// get activities as observable
  async getActivities()
  {
    const q = query(collection(this.firestore,'activities'));
    this.activities$ = collectionData(q, {idField: 'id',}) as Observable<activities[]>;
  }

// Create Data in Firestore with Add()
  addMembers(member: members): Promise<DocumentReference>
  {
    return addDoc(collection(this.firestore, 'members'), member);
  }
    
// Create members in Firestore with updateDoc()
  updateMembers(member:members): Promise<void>
  {
    return updateDoc(doc(this.firestore, 'members', member.id), 
    {
     StudentID : member.StudentID, 
     FirstName : member.FirstName, 
     LastName : member.LastName, 
     Age : member.Age, 
     Gender : member.Gender, 
     Major : member.Major, 
     PhoneNumber : member.PhoneNumber, 
     Email : member.Email
    });
  }
     
// Delete Document Data in Firestore with deleteDoc()
  deleteMembers(member:members): Promise<void> 
  {
    return deleteDoc(doc(this.firestore, 'members', member.id));
  }

// Create Data in Firestore with Add()
  addActivities(activity: activities): Promise<DocumentReference>
  {
    return addDoc( collection(this.firestore, 'activities'), activity);
  }
    
// Create activities in Firestore with updateDoc()
  updateActivities(activity:activities): Promise<void>
  {
    return updateDoc(doc(this.firestore, 'activities', activity.id), {
     Title: activity.Title,
     Date : activity.Date, 
     duration: activity.duration, 
     venue: activity.venue, 
     NumOfParticipants: activity.NumOfParticipants,
     Topic: activity.Topic
    });
  }
          
// Delete Document Data in Firestore with deleteDoc()
  deleteActivities(activity:activities): Promise<void> 
  {
    return deleteDoc(doc(this.firestore, 'activities', activity.id));
  }
}
        