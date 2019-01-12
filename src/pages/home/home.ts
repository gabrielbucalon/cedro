import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { PerfilInvestidorPage } from '../perfil-investidor/perfil-investidor';
import { ResultadoFormularioPage } from '../resultado-formulario/resultado-formulario';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  verificaCheck: FormGroup;
  checkTermo: boolean = false;
  constructor(public navCtrl: NavController, fb: FormBuilder, public toastCtrl: ToastController) {
    this.verificaCheck = fb.group({
      checkTermo: [false, Validators.required],
    });
  }

  perfilInvestidor(){
    this.navCtrl.push(PerfilInvestidorPage)
  }

  onSubmit() {
    if (this.checkTermo == true) {
      this.navCtrl.push(ResultadoFormularioPage)
    } else {
      const toast = this.toastCtrl.create({
        message: 'POR FAVOR, aceite o termo para continuar.',
        duration: 3000,
        position: 'top',
      });
      toast.present();
    }
  }

  aceito(){
    if(this.checkTermo == false){
      this.checkTermo = true;
    }else {
      this.checkTermo = false;
    }
  }
}
