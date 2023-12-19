import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firestore, getDoc, doc} from '@angular/fire/firestore';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.page.html',
  styleUrls: ['./registered.page.scss'],
})
export class RegisteredPage implements OnInit {

  public activity: any;
  public myArray: any[] = [];
  constructor(private activ: ActivatedRoute, private firestore: Firestore) {  
    console.log("id: "+this.id);  
  }
  public id = String(this.activ.snapshot.paramMap.get('id'));


  async ngOnInit() {
    const activityRef = doc(this.firestore, 'activites', this.id);
    const activityDoc = await getDoc(activityRef);
     
    // && Array.isArray(activityDoc.data().['participants']
    if (activityDoc.exists()) {
      // Assign the activity data to the class property
      this.activity = activityDoc.data();
      this.myArray = this.activity.participants;
      console.log(this.activity);
      console.log(this.myArray);

    } } catch (error: any) {
    console.error('Error fetching activity:', error);
  }
}
