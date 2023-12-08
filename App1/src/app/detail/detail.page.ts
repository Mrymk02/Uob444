import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  i = 0;
  j = 0;
  hideShow = false;

  constructor(public DataSrv : DataService, public activedRoute : ActivatedRoute, public storage: Storage) 
  {
    storage.create();
  }

  ngOnInit() 
  {
    this.activedRoute.paramMap.subscribe((params) => 
    {
      const data = params.get('index');
      if (data) 
      {
        const parts = data.split('&');
        this.i = Number(parts[0]);
        this.j = Number(parts[1]);
      }
    });
  }

  CPU = "";
  RAM = "";
  Storage = "";

  add(index : number)
  {
    this.DataSrv.List[this.i].nav[this.j].nav[index].nav.push
    ({
      cpu:this.CPU,
      ram: this.RAM,
      storage: this.Storage
    });

    // reset input
    this.CPU = "";
    this.RAM = "";
    this.Storage = "";
  }

  save()
  {
    this.hideShow=false
  }

  delete(index : number)
  {
    this.DataSrv.List[this.i].nav[this.j].nav[index].nav.splice(index, 1);
  }

}
