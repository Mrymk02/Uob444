import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertCtrl: AlertController) {}

  //q3
  counter=0;

  increment()
  {
    this.counter++;
  }

  //q6
  List=
  [
    {Name:"Maryam" ,Contact:"202002021"}
  ];

  name="";
  contact="";

  save()
  {
    this.List.push({Name:this.name ,Contact:this.contact});

    //alert("hello "+this.List[1].Name+" your contact "+this.List[1].Contact+" is saved successfully");
  }
  
  alertButton=["OK"];

  //q11
  remove(index=0)
  {
    this.List.splice(index,1);
  }

  //q12
  async saveIndex(ei=0)
  {
    let alert = await this.alertCtrl.create
    ({
      header: 'Alert',
      message: 'Enter New Name:',
      inputs:[{ name: 'Name',  placeholder: 'New Name',  type: 'text'}],
      buttons: 
      [{
        text: 'Cancel',
        handler: () => 
        {
          //nothing
        },
      },
      {
        text: 'OK',
        handler: (data) => 
        {
          //changes name
          this.List[ei].Name=data.Name;
        },
      }]
    });
alert.present();

  }

  // alertInputs=[""];
  // alertButtons= 
  // [
  //   {
  //     text: 'Cancel',
  //     role: 'cancel',
  //       handler: () => 
  //       {
  //         //nothing
  //       },
  //   },
  //   {
  //     text: 'OK',
  //     role: 'confirm',
  //       handler: () => 
  //       {
  //         //changes name
  //         this.List[this.i].Name=this.alertInputs[0];
  //       },
  //   },
  //  ];

  
}
