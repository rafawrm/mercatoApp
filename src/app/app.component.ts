import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireAuth } from 'angularfire2/auth';

import { HomePage } from '../pages/home/home';
import { ProdutosPage } from '../pages/produtos/produtos';
import { SigninPage } from '../pages/signin/signin';
import { SobrePage } from '../pages/sobre/sobre';
import { QRCodePage } from '../pages/qrcode/qrcode';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';
import { LaboratorioPage } from '../pages/laboratorio/laboratorio';
import { ArearestritaPage } from '../pages/arearestrita/arearestrita';

@Component({
  templateUrl: 'app.html'
})
export class MercatoApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public afAuth: AngularFireAuth) {
    this.initializeApp();
    //se autenticado executa acoes abaixo
    //afAuth.authState.subscribe(user => {
      //if (user) {
       // this.rootPage = ProdutosPage;
      //} else {
        //this.rootPage = SigninPage;
      }
    
   // }
    // used for an example of ngFor and navigation
    //this.pages = [
      //{ title: 'Home', component: HomePage, icon: "home"},
     // { title: 'Produtos', component: ProdutosPage, icon: "basket"},
     // { title: 'Laboratório', component: LaboratorioPage, icon: "flask" }

   // ];

  //)};

  goToQRCode(params){
    if (!params) params = {};
    this.nav.setRoot(QRCodePage);
  }
  goToLaboratorio(params){
    if (!params) params = {};
    this.nav.setRoot(LaboratorioPage);
  }
  goToProdutos(params){
    if (!params) params = {};
    this.nav.setRoot(ProdutosPage);
  }
  goToHome(params){
    if (!params) params = {};
    this.nav.setRoot(HomePage);
  }
  goToSignin(){
    if (this.afAuth.auth.currentUser == null) {
      this.nav.push(SigninPage);
    } else {
      this.nav.push(ArearestritaPage);
    }
  }
  goToConfiguracao(params){
    if (!params) params = {};
    this.nav.setRoot(ConfiguracaoPage);
  }goToSobre(params){
    if (!params) params = {};
    this.nav.setRoot(SobrePage);
    }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}