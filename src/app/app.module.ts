import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AuthService } from '../providers/auth/auth-service';


import { ModalPage } from '../pages/modal/modal';
import { MercatoApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProdutosPage } from '../pages/produtos/produtos';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { SobrePage } from '../pages/sobre/sobre';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';
import { LaboratorioPage } from '../pages/laboratorio/laboratorio';
import { QRCodePage } from '../pages/qrcode/qrcode';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ArearestritaPage} from '../pages/arearestrita/arearestrita';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { SigninWithEmailPage } from '../pages/signinwithemail/signinwithemail';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';
//import { ContactService } from '../providers/contact-service/contact-service';
import { HttpModule } from '@angular/http';
import { DistribuicaoPage } from '../pages/distribuicao/distribuicao';

import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { InAppBrowser } from '@ionic-native/in-app-browser';


const firebaseConfig = {
  apiKey: "AIzaSyB_9G-t_0BvBhu1HtuPuEUfZjWTFKjKuqg",
  authDomain: "mercato-7bc91.firebaseapp.com",
  databaseURL: "https://mercato-7bc91.firebaseio.com",
  projectId: "mercato-7bc91",
  storageBucket: "mercato-7bc91.appspot.com",
  messagingSenderId: "511827707619"
};

@NgModule({
  declarations: [
    MercatoApp,
    HomePage,
    ProdutosPage,
    SigninPage,
    SignupPage,
    SobrePage,
    ModalPage,
    QRCodePage,
    ConfiguracaoPage,
    LaboratorioPage,
    SigninPage,
    SigninWithEmailPage,
    SignupPage,
    DistribuicaoPage,
    ArearestritaPage,
    ResetpasswordPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MercatoApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    HttpModule,
    AngularFireDatabaseModule,
    NgxQRCodeModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MercatoApp,
    ModalPage,
    HomePage,
    ProdutosPage,
    SigninPage,
    SignupPage,
    SobrePage,
    QRCodePage,
    ConfiguracaoPage,
    LaboratorioPage,
    DistribuicaoPage,
    SigninPage,
    SigninWithEmailPage,
    SignupPage,
    ArearestritaPage,
    ResetpasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    AuthServiceProvider,
    //ContactService,
    GooglePlus,
    Facebook,
    InAppBrowser,
    TwitterConnect,
    AuthService
  ]
})
export class AppModule {}
