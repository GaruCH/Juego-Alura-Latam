let numeroSecreto = 0;
let intentos = 1;
let numeroMaximo = 10;
let listaNumerosSorteados = [];

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(numeroSecreto);
    if (numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')

    } else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function condicionesInciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    limpiarCaja();
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    // Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == 10) {

        asignarTextoElemento('p', 'Ya se sortearon todos los números');
    } else {
        // Sí el numero generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function reiniciarJuego() {
    //limpiar cajas
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    // Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesInciales();
    //Deshabilitar el botón de nuevo juego
}

condicionesInciales();


/*
function Saludar() {
    console.log('¡Hola Mundo!');
}

Saludar();

let nombre = prompt("Ingresa tu nombre");

function saludo(nombre){
    console.log(`¡Hola, ${nombre}!`)
}

saludo(nombre);

let numero = parseInt(prompt("Ingresa un número..."));

function dobleNumero(numero) {
    return numero * 2;
}

console.log(`El doble de ${numero} es ${dobleNumero(numero)}`);

    let numero1 = parseInt(prompt("Ingresa el primer número..."));
    let numero2 = parseInt(prompt("Ingresa el segundo número..."));
    let numero3 = parseInt(prompt("Ingresa el tercer número..."));

function promedioNumero(numero1,numero2,numero3){
    return (numero1 + numero2 + numero3)/3;
}

console.log(`El promedio de ${numero1}, ${numero2} y ${numero3} es ${promedioNumero(numero1,numero2,numero3)}`);

let numero4 = parseInt(prompt("Ingresa un número..."));
let numero5 = parseInt(prompt("Ingresa un número..."));

function mayorOmenor(numero1,numero2){
    if(numero1 > numero2){
        return numero1;
    } else {
        return numero2;
    }
}

console.log(`El número mayor es ${mayorOmenor(numero4,numero5)}`);

let numero6 = parseInt(prompt("Ingresa un número..."));

function multiplicacion(numero6) {
    return numero6 * numero6;
}

console.log(`El cuadrado de ${numero6} es ${multiplicacion(numero6)}`);

*/

/*
let peso = parseInt(prompt("Ingresa tu peso en Kg..."));

let altura = parseFloat(prompt("Ingresa tu altura en M"));

function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2);
}

console.log(`Tu IMC es ${calcularIMC(peso, altura).toFixed(2)}`);

let numero1 = parseInt(prompt("Ingresa el número para cacular su factorial"));

function factorial(numero1) {
    
    if (numero1 === 0) {
        return 1;
    }else{
        return numero1 * factorial(numero1 - 1);
    }
}

let resultado = factorial(numero1);
console.log(resultado);


let saldo = parseFloat(prompt("Ingresa los pesos MXN a convertir a dolares"));

function convertirMXNaUSA(saldo){
    return saldo / 18.44;
}

console.log(`Tu saldo en dólares es ${convertirMXNaUSA(saldo).toFixed(2)}`);

let longitud = parseInt(prompt("Ingresa el longitud del rectangulo..."));

let ancho = parseInt(prompt("Ingresa el ancho del rectangulo..."));

function calcularAreaRectangulo(longitud, ancho){
    return longitud * ancho;
}

console.log(`El área del rectangulo es ${calcularAreaRectangulo(longitud, ancho)}`);

function calcularPerimetroRectangulo(longitud, ancho) {
    return (2*longitud) + (2*ancho);
}

console.log(`El perímetro del rectangulo es ${calcularPerimetroRectangulo(longitud, ancho)}`);



let radio = parseFloat(prompt("Ingresa el radio de la sala circular..."));

const pi = 3.14;

function calcularAreaCirculo(radio) {
    return pi * Math.pow(radio, 2);
}

console.log(`El área de la sala circular es ${calcularAreaCirculo(radio).toFixed(2)}`);

function calcularPerimetroCirculo(radio){
    return 2 * pi * radio;
}

console.log(`El perimetro de la sala circular es ${calcularPerimetroCirculo(radio).toFixed(2)}`);



let numero = parseInt(prompt("Ingrese un número para obtener su tabla de multiplicar"));
let maximo = parseInt(prompt("Ingrese hasta que numero desea la tabla de multiplicar"));

function generarTablaMultiplicar(numero, maximo) {
    if (maximo == 0) {
        return 1;
    } else {
        console.log(`${numero} x ${maximo} = ${numero * maximo}`);
        generarTablaMultiplicar(numero, maximo - 1);
    }
}

generarTablaMultiplicar(numero, maximo);

let listaGenerica = [];

let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('Ruby');
lenguajesDeProgramacion.push('GoLang');

function imprimirLenguajesDeProgramacion() {
    for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
        console.log(lenguajesDeProgramacion[i]);
    }
}

imprimirLenguajesDeProgramacion();


function imprimirLenguajesDeProgramacionInverso() {
    for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(i);
        console.log(lenguajesDeProgramacion[i]);

    }
}

imprimirLenguajesDeProgramacionInverso();

let notas = [5, 9, 9, 8, 10, 7, 6, 9, 8, 10];
let resultado = 0;
function calcularPromedio(notas, contador, resultado) {

    if (contador == 0) {
        let promedio = resultado / notas.length;
        return promedio;
    } else {
        //console.log(contador -1);
        resultado = resultado + notas[contador - 1];
        return calcularPromedio(notas, contador - 1, resultado);
    }
}

console.log(calcularPromedio(notas, notas.length, resultado));

let numerosLista = [5, 6, 11, 12];
let numerosRe = [];
let numeroMayor = numerosLista[0];
let numeroMenor = numerosLista[0];

function numeroMasPequenoyGrande(numerosLista, resultado, contador1, numeroMayor, numeroMenor) {
    if (contador1 == -1) {
        resultado.push(numeroMayor);
        resultado.push(numeroMenor);
        return resultado;
    } else {
        // Actualizar número mayor
        if (numerosLista[contador1] > numeroMayor) {
            numeroMayor = numerosLista[contador1];
        }
        // Actualizar número menor
        if (numerosLista[contador1] < numeroMenor) {
            numeroMenor = numerosLista[contador1];
        }

        // Llamada recursiva
        return numeroMasPequenoyGrande(numerosLista, resultado, contador1 - 1, numeroMayor, numeroMenor);
    }
}

console.log(numeroMasPequenoyGrande(numerosLista, numerosRe, numerosLista.length - 1, numeroMayor, numeroMenor));


let listaNumeros = [12,20,7,3,52];
let contador = listaNumeros.length;
let resultado = [];
let suma = 0;
function sumatoria(listaNumeros,resultado,contador,suma) {
    if(contador == 0){
        resultado.push(suma);
        return resultado;
    }else{
        suma = suma + listaNumeros[contador - 1];
        return sumatoria(listaNumeros, resultado, contador - 1, suma);
    }
}

console.log(sumatoria(listaNumeros, resultado, contador, suma));


let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function buscarPosicion(listaNumeros, numero) {

    for (let i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] === numero) {

            return `El número se encuentra en la posicion ${i}`;
        } else {
            if (i == listaNumeros.length - 1) {
                return "El número no se encuentra en la lista";
            }
        }

    }
}

console.log(buscarPosicion(listaNumeros, 12));


let lista1 = [8, 4, 7, 32, 6, 2];
let lista2 = [34, 6, 4, 3, 7, 458];
let resultado = [];
let suma = 0;
function sumarListas(lista1, lista2) {
    
    for (let i = 0; i < lista1.length; i++) {
        suma = lista1[i] + lista2[i];
        resultado.push(suma);
    }
    return resultado;
}

console.log(sumarListas(lista1, lista2));


let lista1 = [8, 4, 7, 32, 6, 2];
let lista2 = [];
function alCuadrado(lista1) {
    for (let i = 0; i < lista1.length; i++) {
        lista2.push(Math.pow(lista1[i], 2));
    }
    return lista2;
}

console.log(alCuadrado(lista1));

*/