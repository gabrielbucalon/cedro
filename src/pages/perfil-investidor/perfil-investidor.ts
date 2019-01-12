import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResultadoFormularioPage } from '../resultado-formulario/resultado-formulario';
//Serviço do investidor
import { PerfilService } from '../../perfil.service';

@IonicPage()
@Component({
  selector: 'page-perfil-investidor',
  templateUrl: 'perfil-investidor.html',
})
export class PerfilInvestidorPage {
  verificaCheck: FormGroup;
  //obj
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
  } = {
      comportamento: '',
      tempoInvestimento: '',
      investimentoPorAno: '',
      perguntas: {
        titulosDeRenda: '',
        fundosDeInvestimentos: '',
        acoesVista: '',
        aluguelAcoesTermos: '',
      }
    } //obj
  salvar: boolean = false;

  primeiraPergunta: string = '';
  segundaPergunta: string = '';
  terceiraPergunta: string = '';

  resultComportamento: any = [];
  resultTempoInvestimento: any = [];
  resultInvestimentoPorAno: any = [];
  resultQuartaPergunta: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private perfil: PerfilService, fb: FormBuilder, public toastCtrl: ToastController) {
    this.resultComportamento = this.perfil.getComportamento();
    this.resultTempoInvestimento = this.perfil.getTempoInvestimento();
    this.resultInvestimentoPorAno = this.perfil.getInvestimentoPorAno();
    this.resultQuartaPergunta = this.perfil.getQuartaPergunta();
    this.primeiraPergunta = this.perfil.titleComportamento;
    this.segundaPergunta = this.perfil.titleTempoInvestimento;
    this.terceiraPergunta = this.perfil.titleInvestimentoPorAno;

    this.verificaCheck = fb.group({
      salvar: [false, Validators.required],
    });
  }

  onSubmit() {
    this.navCtrl.push(ResultadoFormularioPage, {
      item: this.perfilInvestidor
    })
  }

  aluguel() {
    if (this.perfilInvestidor.comportamento == '' &&
      this.perfilInvestidor.investimentoPorAno == '' &&
      this.perfilInvestidor.perguntas.acoesVista == '' &&
      this.perfilInvestidor.perguntas.aluguelAcoesTermos == '' &&
      this.perfilInvestidor.perguntas.fundosDeInvestimentos == '' &&
      this.perfilInvestidor.perguntas.titulosDeRenda == '' &&
      this.perfilInvestidor.tempoInvestimento == '') {
    } else {
      if (this.salvar == false) {
        this.salvar = true
      }
    }
  }

  volta() {
    console.log(this.perfilInvestidor)
    this.navCtrl.push(HomePage)
  }
}
