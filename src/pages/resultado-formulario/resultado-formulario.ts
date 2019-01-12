import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-resultado-formulario',
  templateUrl: 'resultado-formulario.html',
})
export class ResultadoFormularioPage {

  perfilInvestidor: {
    comportamento: string,
    tempoInvestimento: string,
    investimentoPorAno: string
    perguntas: {
      titulosDeRenda: string,
      fundosDeInvestimentos: string,
      acoesVista: string,
      aluguelAcoesTermos: string,
    }
  }

  test: any = [ ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.perfilInvestidor  = navParams.get('item');
     this.test = JSON.stringify(this.perfilInvestidor);
     console.log(this.perfilInvestidor)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadoFormularioPage');
  }

}
