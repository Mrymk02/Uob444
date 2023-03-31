import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  // public index = -1;

  constructor(public DataSrv: DataService, public ActRoute:ActivatedRoute) 
  { 
    // this.index = Number( this.ActRoute.snapshot.paramMap.get("index") );
  }

  ngOnInit() {
  }

}
