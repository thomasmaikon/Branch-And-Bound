import { Children } from "react";

export class Mochila {
    limitePeso: number
    limiteValor: number

    constructor(maxPeso: number, maxValor: number) {
        this.limitePeso = maxPeso
        this.limiteValor = maxValor
    }
}

export class Item {
    nome: string;
    peso: number;
    valor: number;

    constructor(nome: string, peso: number, valor: number) {
        this.nome = nome
        this.peso = peso
        this.valor = valor
    }
}

export class No {
    nomeNo: string;

    item: Item

    podarNo: boolean = false;

    valorAtual: number = 0;
    pesoAtual: number = 0;

    esquerda: No
    direita: No

    constructor() {

    }

    adicionarPeso(peso: number): No {
        this.pesoAtual += +peso;
        return this;
    }

    adicionarValor(valor: number): No {
        this.valorAtual += +valor;
        return this;
    }

    adicionarItem(item: Item): No {
        this.item = item
        return this
    }


    gerarArvore(itens: Item[], mochila: Mochila): No {
        this.nomeNo = 'raiz';

        const childdren = this.ramificar(itens, mochila);

        this.esquerda = childdren.esquerda
        this.direita = childdren.direita
        
        debugger
       
        return this
    }

    ramificar(itens: Item[], mochila: Mochila): No {
        const item = itens[0]
        const qtdItens = itens.length
        const sumPesoTotal = +item.peso + +this.pesoAtual

        this.direita = new No().
            adicionarPeso(this.pesoAtual).
            adicionarValor(this.valorAtual).
            adicionarItem(item)

        this.direita.nomeNo = ' - ' + item.nome

        if (+qtdItens > 1) {
            this.direita.ramificar(itens.slice(1), mochila)
        }

        if (+sumPesoTotal > +mochila.limitePeso) {
            //branch.PodarNo(true) -- nao vai ter mais nos filhos, entao retorna ele mesmo
            this.podarNo = true;
            return this;
        }


        this.esquerda = new No().
            adicionarPeso(sumPesoTotal).
            adicionarValor(+item.valor + +this.valorAtual).
            adicionarItem(item)

        this.esquerda.nomeNo = ' + ' + item.nome

        if (+qtdItens > 1) {
            this.esquerda.ramificar(itens.slice(1), mochila)
        }

        return this
    }

    converterEmArvore() {
        const filhos = []
        if (this.esquerda != null) {
            filhos.push(this.esquerda.converterEmArvore())
        }

        if (this.direita != null) {
            filhos.push(this.direita.converterEmArvore())
        }

        return {
            name: this.nomeNo,
            children: filhos
        };
    }
}