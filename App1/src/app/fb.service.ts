import { Injectable } from '@angular/core';

// for Firebase
import { Firestore, collection, collectionData, CollectionReference, DocumentData, DocumentReference } from '@angular/fire/firestore';
import { getDocs, doc, deleteDoc, updateDoc, docData, setDoc, addDoc, query, where } from '@angular/fire/firestore';

// for observable
import { Observable } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class FbService 
{
  //////////////// Observable array ////////////////
  public members$: Observable<members[]> | undefined;
  public activities$: Observable<activities[]> | undefined;

  //////////////// Collection reference ////////////////
  membersCollection: CollectionReference<DocumentData>;
  activitiesCollection: CollectionReference<DocumentData>;

  //////////////// constructor ////////////////
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

  //////////////// get members as observable ////////////////
  async getMembers()
  {
    const q = query(collection(this.firestore,'members'));
    this.members$ = collectionData(q, {idField: 'id',}) as Observable<members[]>;
  }

  //////////////// get activities as observable ////////////////
  async getActivities()
  {
    const q = query(collection(this.firestore,'activities'));
    this.activities$ = collectionData(q, {idField: 'id',}) as Observable<activities[]>;
  }

  //////////////// register member to firestore ////////////////
  async addMember( member: members ): Promise<DocumentReference>
  {
    return addDoc(collection(this.firestore, 'members'), member);
  }
  
  ///// Update Document Data in Firestore with updateDoc() /////
  updateMember(member:members): Promise<void>
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

  ///// Delete Document Data in Firestore with deleteDoc() /////
  deleteMember(member:members): Promise<void> 
  {
    return deleteDoc(doc(this.firestore, 'members', member.id));
  }

  //////////////// add activity to firestore ////////////////
  addActivity(activity: activities): Promise<DocumentReference>
  {
    return addDoc( collection(this.firestore, 'activities'), activity);
  }

  //////////////// update activity to firestore ////////////////
  updateActivity(activity:activities): Promise<void>
  {
    return updateDoc(doc(this.firestore, 'activities', activity.id), 
    {
      Title : activity.Title,
      Date : activity.Date, 
      duration : activity.duration, 
      venue : activity.venue, 
      NumOfParticipants : activity.NumOfParticipants,
      Topic : activity.Topic
    });
  }

  //////////////// delete activity to firestore ////////////////
  deleteActivity(activity:activities): Promise<void> 
  {
    return deleteDoc(doc(this.firestore, 'activities', activity.id));
  }
}