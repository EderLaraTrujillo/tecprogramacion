document.write('Hola Desde Javascript');
var salto = '<br>';

/*

Calcular el area de un circulo, un triangulo o un cuadrado dependiendo de lo que escoja el usuario, durante 4 ocasiones. se debe solicitar en cada uno de los problemas las variables necesarias para su desarrollo.
Áreas:

   Formula                        variables                      Constantes
Circulo 	= Pi*R*R                 Radio                           pi
Triangulo   = (B*H) / 2           base, altura                       divisor
Cuadrado    = B*H                 base, altura                       -

variables globales = area, contador.

Work flow:
1. Definir constantes
2. Preguntar que se debe hacer (Ciclo por que son 4 veces)
3. Realizar la operación y mostrar resultado
4. Finalizar a la 4 operación

Pedir info por teclado: prompt('Mensaje', '');

*/

// Definimos constantes y variables
// const pi = 3.1416;
// const divisor = 2;
// var iterador = 1;
// let pregunta;
// let area;

// // Preguntamos en un ciclo que se debe hacer:

// for(iterador = 1; iterador<=4; iterador++){
// 	pregunta =  prompt('El area que desea hallar es, 1.Circulo, 2.Triangulo, 3.Cuadrado','');
// 	pregunta = parseInt(pregunta);
	
// 	// Condicionamos las opciones del usuario:
// 	switch (pregunta){
// 		case 1:
// 			let radio = prompt('Digite el valor del radio','');
// 			radio = parseFloat(radio);
// 			area = pi * (radio * radio);
// 			document.write(salto, salto, 'El Valor del área del circulo es ', area);
// 		break;

// 		case 2:
// 			var base = prompt('Digite el valor de la base','');
// 			var altura = prompt('Digite el valor de la altura','');
// 			base = parseFloat(base);
// 			altura = parseFloat(altura);
// 			area = (base * altura)/2;
// 			document.write(salto, salto, 'El Valor del área del Triangulo es ', area);
// 		break;

// 		case 3:
// 			var base = prompt('Digite el valor de la base','');
// 			var altura = prompt('Digite el valor de la altura','');
// 			base = parseFloat(base);
// 			altura = parseFloat(altura);
// 			area = base * altura;
// 			document.write(salto, salto, 'El Valor del área del Cuadrado es ', area);
// 		break;

// 		default:
// 			let Mensaje = 'Opción No valida';
// 			iterador = iterador - 1;
// 		break;
// 	}
// 	console.log(pregunta, iterador);
// }
/*
Algoritmo para realizar una o mas compras:
1. Preguntar por el producto a comprar.
2. Pregunta si desea seguir comprando
3. Indicar el valor a pagar, y si es mayor calcular y si es menor indicar que le falta plata

*/
const producto1  = 'Comedero Gato';
const precioprd1 = 12000;
let compra = 1;
let total = 0;

do {
	let pregunta= prompt('Escoja Producto','');
	if (producto1 === pregunta) {
		total = total + precioprd1;
	}
	let seguir = prompt('Desea Seguir Comprando', '');
	if (seguir === 'si') {
		compra = 1;
	}else{
		compra = 0;
	}

}while(compra === 1);

document.write('Total a pagar ', total);