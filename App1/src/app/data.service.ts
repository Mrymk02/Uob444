import { Injectable } from '@angular/core';

// defined data type as "laptop"
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
  Image: String,
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
      ManuDate: ""
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
      ManuDate: ""
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
      ManuDate: ""
    },
  ]
  constructor() { }
}
