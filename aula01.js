var nome = "joao"; //string
var idade = 24; //numjber int
var peso = 32.5; //number - float
var acordado = true; //boolean
var cidade = ["curitiba" , "pinhais" , "campolargo"]; //array

if(idade == 20)
{
    console.log("verdade");
}else
{
    console.log("falso");
}


console.log(cidade[1]);

cidade.push("araucaria");

console.log(cidade);

//loops








var ini = 0;
var fim = cidade.length - 1;
while( ini <= fim)
{
    console.log(cidade[ini]);
    ini += 1;
}


