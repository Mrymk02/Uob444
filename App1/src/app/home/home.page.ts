import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public DataSrv : DataService, public storage : Storage, public alertCtrl : AlertController) 
  {
    storage.create();
  }

  gOnInit()
  {
    this.storage.get('array').then(result => 
      {
        if(result != null) 
        {
          this.DataSrv.List = result;
        }
        else
        {
          this.DataSrv.populateList().subscribe(data => 
          {
            this.DataSrv.List = data as any[];
          });
        }
      });
  }

  save()
  {
    this.storage.get('array').then(result =>{
      if(result){
        result=this.DataSrv.List;
        this.storage.set('array',result).then((data) => {
          alert("Saved Successful");
        });
      }
      else{
        this.storage.set('array',this.DataSrv).then((data) => {
          alert("Saved Successful");
        });
      }
    });
  }

  async get(){
    const alert=await this.alertCtrl.create({
     header: "Where to get data from?",
     message: "Would you like to get data from file or local storage?",
     buttons: [{
      text: 'From File',
      handler:() => {
          this.DataSrv.populateList().subscribe((data: any[]) => {
            this.DataSrv.List=data;
          });
     }
    },
     {
      text: 'From Storage',
      handler:() => {
          this.storage.get('array').then(result => {
            if(result != null) {
              this.DataSrv.List=result;
            }
            else{
              this.DataSrv.populateList().subscribe((data: any[]) => {
                this.DataSrv.List=data;
              });
          }
      });
     }
     },
    {
      text: 'Cancel'
    }]
    });
    alert.present();
  }
}
