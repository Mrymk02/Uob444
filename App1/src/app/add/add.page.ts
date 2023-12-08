import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DataService, laptop } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'add.page.html',
  styleUrls: ['add.page.scss'],
})

export class AddPage 
{
  constructor(public alertCtrl: AlertController, public DataSrv: DataService) {}
  
  // values to show in the range slider
  rangeR=0;
  rangeW=0;

  // determine which view to show "list" or "New"
  show="";

  // get current date
  currentDate= new Date;

  // new laptop values will be stored here
  brand = ""; 
  cpu = ""; 
  gpu = ""; 
  ram = ""; 
  weight = ""; 
  screen = ""; 
  storage = true; 
  os = true; 
  img = "";
  date = new Date();
  
  // add new laptop to the list
  async add() 
  {
    // pushes new laptop to the list
    this.DataSrv.List.push({Brand: this.brand, CPU: this.cpu, GPU: this.gpu, RAM: this.ram, Weight: this.weight, Screen: this.screen, Storage: this.storage, OS: this.os, Image: this.img, ManuDate: this.date.toString()});

    // alert to confirm laptop added to the list successfully with the new laptop values 
    let alert = await this.alertCtrl.create
    ({
      header: 'Alert',
      subHeader: 'Laptop Added',
      message: `Brand: ${this.brand} - CPU: ${this.cpu} - GPU: ${this.gpu} - RAM: ${this.ram} - Weight: ${this.weight} - Screen: ${this.screen} - Storage: ${this.storage} - OS: ${this.os} - ManuDate: ${this.date}`,
      buttons: ['OK']
    });
    alert.present();
  }

  // remove the item from the list
  async delete(i: number) 
  {
    this.DataSrv.List.splice(i,1);
    // alert to confirm laptop deleted from the list successfully
    let alert = await this.alertCtrl.create
    ({
      header:"Confirm delete?",
      message:"Laptop deleted successfully",
      buttons: ['OK']
    });
    alert.present();
  }

  // edit list item brand name
  async edit(i:any){
    let alrt = await this.alertCtrl.create
    ({
      header:"Edit Laptop",
      message:"Enter new Brand name",
      buttons:
        [{
            // save changes
            text: 'OK',
            // takes the value of user's input and stores it in data
              handler: (data) => 
              {
                // data is the value of the input, .Brand is the name of the input
                this.DataSrv.List[i].Brand = data.Brand
                this.DataSrv.List[i].CPU = data.CPU
                this.DataSrv.List[i].GPU = data.GPU
                this.DataSrv.List[i].RAM = data.RAM
                this.DataSrv.List[i].Weight = data.Weight
                this.DataSrv.List[i].Screen = data.Screen
                this.DataSrv.List[i].Storage = data.Storage
                this.DataSrv.List[i].OS = data.OS
                this.DataSrv.List[i].ManuDate = data.ManuDate
              }
          },
          {
            // discard changes
            text: 'Cancel',
              handler: () => 
              {            
                console.log('Cancel clicked');              
              }
        }],

      // inputs to edit laptop details
      inputs: 
        [{
          name:'Brand',
          type: 'text',
          placeholder: 'Brand',  
          value: this.DataSrv.List[i].Brand 
        },
        {
          name:'CPU',
          type: 'text',
          placeholder: 'CPU',  
          value: this.DataSrv.List[i].CPU  
        },
        {
          name:'GPU',
          type: 'text',
          placeholder: 'GPU',  
          value: this.DataSrv.List[i].GPU  
        },
        {
          name:'RAM',
          type: 'text',
          placeholder: 'RAM',  
          value: this.DataSrv.List[i].RAM  
        },
        {
          name:'Weight',
          type: 'text', 
          placeholder: 'Weight', 
          value: this.DataSrv.List[i].Weight  
        },
        {
          name:'Screen',
          type: 'text',  
          placeholder: 'Screen',
          value: this.DataSrv.List[i].Screen  
        },
        {
          name:'Storage',
          type: 'text', 
          placeholder: 'Storage', 
          value: this.DataSrv.List[i].Storage  
        },
        {
          name:'OS',
          type: 'text',
          placeholder: 'OS',  
          value: this.DataSrv.List[i].OS  
        },
        {
          name:'ManuDate',
          type: 'text',
          placeholder: 'ManuDate',
          value: this.DataSrv.List[i].ManuDate  
        }]
    });
    alrt.present();
  }

}