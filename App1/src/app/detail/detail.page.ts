import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, public DataSrv: DataService) { }
  /* i is the index of the laptop in the array, 
  to avoid error when no laptop is selected we :
  assigned it to type any +  gave it a value of -1 */
  i:any=-1;

  ngOnInit() 
  {
    // if no laptop is selected
    if(this.DataSrv.index == -1)
    // select the first laptop
      this.DataSrv.index = 0; 
    
    else
    {
      // save laptop index retrieved from url to the index in data service
      this.i = this.activatedRoute.snapshot.paramMap.get('index');
      this.DataSrv.index = this.i;
    }
  }
}
