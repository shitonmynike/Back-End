// caneta bic
// encapsulamento

class Caneta {
    // atributos -> propriedades -> adjetivo
    cor = "azul";
    vazia = false;


    

    // metodo -> função -> verbi -> ação
    constructor(cor)
    {
        this.cor = cor;
    }

    escrever(){
        console.log("escreveu bastante");
        this.vazia = true;
    }

    


}

class Caneta2 extends Caneta {
    botaoApertado = false;
    escrevr(){
        super.escrever();
        console.log("escreveu bastante2");
        this.vazia = true;
    }

}

class Caneta3 extends Caneta2 {
    
}

// instancia
var bic1 = new Caneta("Azul");
var bic2 = new Caneta("Vermelho");
var bic3 = new Caneta("Preto");
var bic4 = bic3;
var bic5 = new Caneta2("Verde");

/*
bic2.cor = "Preta";
bic4.cor = "Vermelha";
*/


if (bic1 == bic2)
{
    console.log("verdade");
}else
{
    console.log("falso");
}

// invocando o metodo
bic1.escrever();


console.log(bic1 , bic2 , bic3 , bic4);
console.log(bic5);