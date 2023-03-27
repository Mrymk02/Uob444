import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  public index = -1;

  constructor(public ActiveRoute:ActivatedRoute, public DataSrv: DataService) 
  {
    // gets the index from the url
    this.index = Number( this.ActiveRoute.snapshot.paramMap.get("i") );
  }

  ngOnInit( ) 
  { }

}
