import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

// export interface laptop 
// { 
//   Brand:      String, 
//   CPU:        String, 
//   GPU:        String, 
//   RAM:        Number, 
//   Weight:     Number, 
//   Screen:     Number, 
//   Storage:    boolean, 
//   OS:         boolean, 
//   Image:      String, 
//   ManuDate:   Date 
// }

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http : HttpClient, public storage : Storage) 
  { 
    // create local storage
    storage.create();

    // subscribe to the observable
    this.populateList().subscribe(data => {this.List = data as any[]})
  }

  List: any[] = [];


  populateList() : Observable <any[]>
  {
    // return the observable
    return this.http.get<any[]>('assets/Import.json');
  }

}
