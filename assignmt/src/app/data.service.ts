import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';



// structure
export interface ListOfMembers 
{
  id: any;
  name: string;
  age: number;
  gender: string;
  phone: string;
  diet: string;
  dietVal: number;
  subPlan: string;
  subPlanVal: number;
  TotalFees: number;
}

// structure
export interface Meal 
{
  id: number;
  title: string;
  imageUrl: string;
  ingredients: string[];
  dietType: string;
  calories: number;
}

@Injectable({
  providedIn: 'root'
})
//

export class DataService {
  public member: ListOfMembers[] = [];
  membersCollection: AngularFirestoreCollection<ListOfMembers>;
  members: Observable<ListOfMembers[]>;

  constructor(private afs: AngularFirestore) {
    this.membersCollection = this.afs.collection<ListOfMembers>('members');
    this.members = this.membersCollection.valueChanges();

    this.members.subscribe((members: ListOfMembers[]) => {
      this.member = members;
    });
  }

  addMember(member: ListOfMembers) {
    return this.membersCollection.add(member);
  }

  updateMember(id: string, member: ListOfMembers) {
    return this.membersCollection.doc(id).update(member);
  }

  deleteMember(id: string) {
    return this.membersCollection.doc(id).delete();
  }



  public index = -1;
  
  // public member= 
  // [
  //   { name: 'Reem', age: 36, gender: 'Female', phone: '+973 39697849', diet: 'Low Fat', dietVal:30, subPlan: '6 months', subPlanVal:500, TotalFees: 530 },
  //   { name: 'Fahad', age: 21, gender: 'Male', phone: '+966 349837758', diet: 'Normal Diet', dietVal:0, subPlan: '1 month', subPlanVal:100, TotalFees: 100 },
  //   { name: 'Salem', age: 17, gender: 'Male', phone: '+971 555031121', diet: 'Low Carbs', dietVal:50, subPlan: '3 months', subPlanVal:280, TotalFees: 330 }
  // ];
  // addMembersToFirestore() {
  //   // Loop through the array and add each member to the Firestore collection
  //   for (const member of this.member) {
  //     this.afs.collection('members').add(member)
  //       .then((docRef) => {
  //         console.log('Document written with ID: ', docRef.id);
  //       })
  //       .catch((error) => {
  //         console.error('Error adding document: ', error);
  //       });
  //   }
  // }
  
  meals: Meal[] = [];
}
