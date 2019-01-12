import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilInvestidorPage } from './perfil-investidor';

@NgModule({
  declarations: [
    PerfilInvestidorPage,
  ],
  imports: [
    IonicPageModule.forChild(PerfilInvestidorPage),
  ],
})
export class PerfilInvestidorPageModule {}
