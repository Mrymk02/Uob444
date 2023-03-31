import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddPage } from '../add/add.page';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public ModalCtrl: ModalController, public DataSrv: DataService) 
  {}


}
