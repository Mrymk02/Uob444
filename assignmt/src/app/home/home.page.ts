import { Component, ViewChild } from '@angular/core';
import { AlertController, IonModal } from '@ionic/angular';
import { DataService, Meal, Member } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('insert_modal') insert_modal: IonModal = {} as IonModal;
  newMember = {} as Member;

  close_insert() {
    this.insert_modal.dismiss();
    this.newMember = {} as Member;
  }

  async add_member() {
    const alert = await this.alertCtrl.create({
      header: 'subscribed successfully',
      message: `total fee: ${this.dataSrv.fee(this.newMember)}`,
      buttons: ['OK'],
    });
    await alert.present();
    this.insert_modal.dismiss();
    this.dataSrv.members.push(this.newMember);
    this.newMember = {} as Member;
  }

  remove_member(m: Member) {
    let idx = this.dataSrv.members.indexOf(m);
    this.dataSrv.members.splice(idx, 1);
    this.detail_modal.dismiss();
  }

  member_remove_meal(member: Member, meal: Meal) {
    let idx = member.meals.indexOf(meal);
    member.meals.splice(idx, 1);
  }

  @ViewChild('detail_modal') detail_modal: IonModal = {} as IonModal;
  selected_member = {} as Member;

  constructor(public dataSrv: DataService, public alertCtrl: AlertController) {}
}
