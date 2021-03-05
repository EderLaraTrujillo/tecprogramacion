var tiempo = 85361;
var horas;
var minutos;
var segundos;

// Operaciones:
horas = Math.floor(tiempo / 3600);      // 2
minutos = tiempo / 60;
minutos = Math.floor(minutos % 60);                 // 5
segundos = tiempo - (horas * 3600) - (minutos * 60) // 0

document.write('Convertir ',tiempo,' segundos a relaciones de tiempo <br>')
document.write(horas,'h:',minutos,'m:',segundos,'s');

document.write('<br>porcentajes: <br>Valor Unidad 	15.789<br>Porcentaje 	23%<br>Cuanto es en %  3568')

// Valor Unidad 	15.789
// Porcentaje 	23%
// Cuanto es en %  3568
var unidad = 15789;
var porcen = 23;
var valpor;             // 157.89 // 3631.47
var dato   = 3568;
var porcien;            // 

valpor = (unidad/100) * porcen;     
porcien = (unidad/100)
porcien = (dato/porcien)            //22.6
// porcien = (dato*100) / unidad;      //22.6

document.write('<br>Valor inicial =',unidad,'<br>23%     =   ', valpor,'<br>El porcentaje en 3568 es de  = ',porcien,'%')


// Condiciones compuestas:

// Una empresa paga a sus empleados además del 
// sueldo base una bonificación especial de 10 %. 
// por cada hijo. 
// Si tiene entre 2 y 4 hijos el bono es del 9%; 
// y si tiene mas de 4 hijos el bono es de 5%;
// Por cada hijo;
// Realice un algoritmo que determine el monto de la bonificación 
// y el monto total a pagar 
// al trabajador.

const sueldo = 2800000;
const bono10 = 10;
const bono9  = 9;
const bono5  = 5;
const tope = 3000000;
var bonificacion;
var hijos = 3;
var totalpagar;

if (hijos > 4) {
    bonificacion =  (((sueldo/100) * bono5) * hijos);
    totalpagar = sueldo + bonificacion;
} 

if (hijos >=2 & hijos <=4) {
    bonificacion = (((sueldo/100) * bono9) * hijos);
    totalpagar = sueldo + bonificacion;
} else {
    bonificacion = (sueldo/100) * bono10;
    totalpagar = sueldo + bonificacion;
}

if(totalpagar > tope){
    totalpagar = tope;
}

document.write('El empleado recibe sueldo básico por: ',sueldo)
document.write('<br> Total comisiones: ', bonificacion)
document.write('<br>Total a pagar = ',totalpagar);