import { Component, OnInit } from '@angular/core';
import { FBService, Members, Activities } from '../fb.service';
import { getAuth, onAuthStateChanged} from "firebase/auth";
import { Auth } from '@angular/fire/auth';
import { getDocs, doc, deleteDoc, updateDoc, docData, setDoc, addDoc, query, Firestore, getDoc, arrayUnion, where,collection } from '@angular/fire/firestore';


@Component({
  selector: 'app-view-activity',
  templateUrl: './view-activity.page.html',
  styleUrls: ['./view-activity.page.scss'],
})
export class ViewActivityPage implements OnInit {
  
  Email: any;
  constructor(public fb: FBService, public auth:Auth, public firestore: Firestore) {
    this.initializeAct();

    onAuthStateChanged(this.auth, (user) => {
      if (user) {

        this.Email = user.email;
        console.log("User: "+user.email);
      } else {
        alert("You have to sign in first to be able to join activity!: ");
      }
    });
   }
   public id = "";

   async callMember(actID: string) {
     const q = query(collection(this.firestore, "members"), where("email", "==", this.Email));
     const querySnapshot = await getDocs(q);
   
     if (!querySnapshot.empty) {
       const docSnap = querySnapshot.docs[0];
       const mem = docSnap.data();
       this.id = docSnap.id;
   
       console.log("Document data:", mem);
       console.log("Document ID:", this.id);
   
       await updateDoc(doc(this.firestore, "members", this.id), {
         activities: arrayUnion(actID)
       });
   
       alert('You have joined this activity');
     } else {
       console.log("No such document!");
     }
   }

  async join(act: Activities) {
    const ref = doc(this.firestore, "activites", act.id);
    const getdo = await getDoc(ref);
  
    if (getdo.exists()) {
      const Data = getdo.data();
  
      if (Data) {
        if(Array.isArray(Data['participants'])){
          if (Data['participants'].length === Data['cap']) {
            alert('Sorry this activity is full, join another activity');
          } else {
            await updateDoc(ref, {
              participants: arrayUnion(this.Email)
            });
            this.callMember(act.id); 
          }
        }else if (!Array.isArray(Data['participants'])) {
          await updateDoc(ref, {
            participants: arrayUnion(this.Email)
          });
          this.callMember(act.id);
        }
        else {
          console.error('Invalid data structure: participants is not an array');
        }
      }
    } else {
      console.error('Document does not exist');
    }
  }
  
  actTitles: string[] = [];
  myactivities: Activities[] = [];
  
  async initializeAct() {
    this.actTitles = [];
    this.myactivities = [];
  
    const querySnapshot = await getDocs(collection(this.firestore, "activites"));
  
    querySnapshot.forEach((doc) => {
      const dat = doc.data() as { title: string }; // Type assertion
      this.actTitles.push(dat.title);
      this.myactivities.push(doc.data() as Activities);
    });
  }
  
  getAct(ev: any) {
    // Reset items back to all items
    this.initializeAct();
  
    // set val to the searchbar value
    let val = ev.target.value;
  
    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.actTitles = this.actTitles.filter((act) => {
        return act.toLowerCase().includes(val.toLowerCase());
      });
  
      // Filter myactivities based on filtered actTitles
      this.myactivities = this.myactivities.filter((act) => {
        return this.actTitles.includes(act.title);
      });
    }
  }

  ngOnInit() {
  }

}
