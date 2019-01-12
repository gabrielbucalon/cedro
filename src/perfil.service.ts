import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';


@Injectable()
export class PerfilService {
    constructor(public http: HttpClient) { }
    quartaPergunta: any = [
        '1 - Nunca operei',
        '2 - Opero pouco e não tenho familiaridade',
        '3 - Opero eventualmente e conheços os riscos associados',
        '4 - Opero frequentemente e conheços os riscos associados'
    ]

    titleComportamento: string = "1 - Qual seu comportamento em relação aos seus investimentos?";
    private comportamento: any = [
        'PRESERVAR MEU DINHEIRO SEM CORRER RISCOS',
        'GANHAR MAIS DINHEIRO ASSUMINDO RISCOS MODERADOS',
        'GANHAR MAIS DINHEIRO ASSUMINDO RISCOS AGRESSIVOS'
    ]

    titleTempoInvestimento: string = '2 - Por quanto tempo você deseja manter os seus investimentos?'
    private tempoInvestimentos: any = [
        'ATÉ 1 ANO',
        'DE 1 A 3 ANOS',
        'DE 1 A 3 ANOS'
    ]

    titleInvestimentoPorAno: string = '3 - Quanto % desses investimentos você pode precisar em um ano?';
    private investimentosPorAno: any = [
        'ACIMA DE 75%',
        'DE 26% A 74%',
        'ATÉ 25%'
    ]

    getInvestimentoPorAno() {
        return this.investimentosPorAno;
    }

    getQuartaPergunta() {
        return this.quartaPergunta;
    }

    getComportamento() {
        return this.comportamento;
    }

    getTempoInvestimento() {
        return this.tempoInvestimentos;
    }
}