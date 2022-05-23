
console.log('Estamos en el archivo de la Calculadora ');

let numeroUno= Number(prompt('Ingresa un número para realizar tu cálculo'))
let numeroDos= Number(prompt('Ingresa otro número para realizar tu cálculo'))

console.log('El primer número es:', numeroUno);
console.log('El segundo número es:', numeroDos);

function escribir (r){
    console.log(r);
}

function Sumar (a,b)
let resultado = a + b;
escribir(resultado)

Sumar(numeroUno, numeroDos)


/*let numuno = document.getElementById('numuno').value;
let numdos = document.getElementById('numdos').value; 


function calcular (){

let numuno = document.getElementById('numuno').value;
let numdos = document.getElementById('numdos').value; 

console.log(numuno);
console.log(numdos);

}

function sumar (){
    console.log(numuno);
    console.log(numdos);
    
    }

    function restar (){

        console.log(numuno);
        console.log(numdos);
        
        }*/

/*var numuno,numdos,sumar,restar,multiplicar,dividir;

let resultado= document.getElementById('resultado');
let resultadoUno= document.getElementById('resultadouno');
let resultadoDos= document.getElementById('resultadodos');

function calcular(){

numuno = document.getElementById('numuno').value;
numdos = document.getElementById('numdos').value; 

numuno = Number(numuno);
numdos = Number(numdos);
console.log(numuno)
console.log(numdos)

suma = numuno + numdos;

console.log(`La suma de los dos valores es:`, ${suma});
resultado.innerHTML= `La suma de los dos valores es:` ${sumar};
resultadoUno.innerHTML=`La suma de los dos valores es:` + suma;
resultadoDos.innerHTML= `La suma de los dos valores es:` + suma;
}
        

