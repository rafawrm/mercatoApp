import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SobrePage } from '../sobre/sobre';
import { DistribuicaoPage } from '../distribuicao/distribuicao';

@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html'
})
export class ProdutosPage {

  constructor(public navCtrl: NavController) {
  }
  goToSobre(params){
    if (!params) params = {};
    this.navCtrl.push(SobrePage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToDistribuicao(params){
    if (!params) params = {};
    this.navCtrl.push(DistribuicaoPage);
  }
  
}