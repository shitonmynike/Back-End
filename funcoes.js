
var n1 = 4;
var n2 = 5;


/**
 * Soma dois numeros
 * @author joao
 * @param {number} n1 
 * @param {number} n2 
 * @returns 
 */
function soma(n1, n2)
{
    var n3 = 2;
    var n4 = 10;
    var res = n1 + n2 + n3;
    

    function abc()
    {
        return n1 + n3 + n4;
    }
    console.log(abc());
    return res;
}

var res = soma(2, 3);

console.log(res);

// funcao anonima
var mult = function(n1 , n2)
{
    return n1 * n2;
}

console.log(mult(3, 5));

 // console.log(mult);

/**
 * 
 * @param {number} n1 
 * @param {number} n2 
 * @param {function} op 
 * @returns 
 */
function calc(n1, n2, op)
{
    return op(n1, n2);
}

console.log(calc(2, 5, mult));

function Pesssoa()
{
    this.idade = 23;
}

var edir = new Pesssoa();
console.log(edir);

// js == es
// js5 -> es6 -> es2015

const nome = "joao";

let idade = 123;
idade = 321;

console.log(idade);

module.exports = soma;




