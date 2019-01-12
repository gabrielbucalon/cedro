import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ModalModule } from 'angular-custom-modal';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PerfilInvestidorPage } from '../pages/perfil-investidor/perfil-investidor';
import { PerfilService } from '../perfil.service';
import { ResultadoFormularioPage } from '../pages/resultado-formulario/resultado-formulario'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PerfilInvestidorPage,
    ResultadoFormularioPage
  ],
  imports: [
    BrowserModule,
    ModalModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PerfilInvestidorPage,
    ResultadoFormularioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PerfilService
  ]
})
export class AppModule { }
