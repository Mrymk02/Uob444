import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

export interface laptop 
{ 
  Brand: String, 
  CPU: String, 
  GPU: String, 
  RAM: Number, 
  Weight: Number, 
  Screen: Number, 
  Storage: boolean, 
  OS: boolean, 
  ManuDate: Date 
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage 
{
  constructor(public alertCtrl: AlertController) {}
  
  // values to show in the range slider
  rangeR=0;
  rangeW=0;

  // determine which view to show "list" or "New"
  show="";

  // get current date
  currentDate= new Date;

  // list of laptops
  List: laptop[] = 
  [
    {Brand: "Dell", CPU: "Intel i5", GPU: "Nvidia GeForce", RAM: 8, Weight: 1.3, Screen: 14, Storage: false, OS: true, ManuDate: this.currentDate},
    {Brand: "HP", CPU: "Intel i7", GPU: "Nvidia GeForce", RAM: 16, Weight: 1.5, Screen: 15, Storage: true, OS: true, ManuDate: this.currentDate},
    {Brand: "Lenovo", CPU: "Intel i5", GPU: "AMD Radeon", RAM: 8, Weight: 1.4, Screen: 12, Storage: true, OS: false, ManuDate: this.currentDate}
  ];

  // new laptop values will be stored here
  brand = ""; 
  cpu = ""; 
  gpu = ""; 
  ram = 0; 
  weight = 0; 
  screen = 12; 
  storage = true; 
  os = true; 
  date = new Date();
  
  // add new laptop to the list
  async add() 
  {
    // pushes new laptop to the list
    this.List.push({Brand: this.brand, CPU: this.cpu, GPU: this.gpu, RAM: this.ram, Weight: this.weight, Screen: this.screen, Storage: this.storage, OS: this.os, ManuDate: this.date});

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
    this.List.splice(i,1);
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
                this.List[i].Brand = data.Brand
                this.List[i].CPU = data.CPU
                this.List[i].GPU = data.GPU
                this.List[i].RAM = data.RAM
                this.List[i].Weight = data.Weight
                this.List[i].Screen = data.Screen
                this.List[i].Storage = data.Storage
                this.List[i].OS = data.OS
                this.List[i].ManuDate = data.ManuDate
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
          value: this.List[i].Brand 
        },
        {
          name:'CPU',
          type: 'text',  
          value: this.List[i].CPU  
        },
        {
          name:'GPU',
          type: 'text',  
          value: this.List[i].GPU  
        },
        {
          name:'RAM',
          type: 'text',  
          value: this.List[i].RAM  
        },
        {
          name:'Weight',
          type: 'text',  
          value: this.List[i].Weight  
        },
        {
          name:'Screen',
          type: 'text',  
          value: this.List[i].Screen  
        },
        {
          name:'Storage',
          type: 'text',  
          value: this.List[i].Storage  
        },
        {
          name:'OS',
          type: 'text',  
          value: this.List[i].OS  
        },
        {
          name:'ManuDate',
          type: 'text',  
          value: this.List[i].ManuDate  
        }]
    });
    alrt.present();
  }

}
