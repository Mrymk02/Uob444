import { Injectable } from '@angular/core';

// defined data type as "laptop"
export interface laptop 
{
  Brand: string,
  CPU: string,
  GPU: string,
  RAM: Number,
  Weight: Number,
  Screen: Number,
  Storage: boolean,
  OS: boolean,
  Image: string,
  ManuDate: Date
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  // index of the laptop
  index = -1;

  // defualt color
  Color="primary";
  
  // array of type laptop with 3 items
  public List = 
  [
    {  
      Brand: "Dell",
      CPU: "i7",
      GPU: "NVIDIA",
      RAM: "8",
      Weight: "1.48 kg",
      Screen: "13 inches",
      Storage: true,
      OS: true,
      Image: "Dell.png",
      ManuDate: "11/09/2015 12:29 AM"
    },    
    {  
      Brand: "HP",
      CPU: "i5",
      GPU: "Intel HD",
      RAM: "8",
      Weight: "1.48 kg",
      Screen: "15 inches",
      Storage: true,
      OS: true,
      Image: "HP.png",
      ManuDate: "07/30/2022 7:15 PM"
    },
    {  
      Brand: "Lenovo",
      CPU: "i7",
      GPU: "NVIDIA",
      RAM: "8",
      Weight: "1.48 kg",
      Screen: "13 inches",
      Storage: true,
      OS: true,
      Image: "Lenovo.png",
      ManuDate: "09/15/2009 3:00 AM"
    },
  ]

  constructor() { }
}
