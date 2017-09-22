import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import 'rxjs/add/operator/map'
 
@Component({
  selector: 'page-arearestrita',
  templateUrl: 'arearestrita.html'
})
export class ArearestritaPage {
  information: any[];
 
  constructor(public navCtrl: NavController, private http: Http, public modalCtrl: ModalController ) {
    let localData = http.get('assets/information.json').map(res => res.json().items);
    localData.subscribe(data => {
      this.information = data;
    })
  }
 
  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }
 
  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }

  presentModal() {
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }
 
}
