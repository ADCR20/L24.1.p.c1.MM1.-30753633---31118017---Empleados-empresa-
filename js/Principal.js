/*Una empresa conoce de sus empleados los siguientes datos: nombre, sexo ((M)asculino
(F)emenino). Se desea que realice un algoritmo que permite determinar e imprimir: Cantidad
de hombres que trabajan en la empresa y porcentaje de mujeres que trabajan en la empresa.
Se dispone de los siguientes datos de varios empleados: (nombre, sexo) 
(Mary, ‘F’), (José, ‘M’), (Carlos, ‘M’), (Pedro, ‘M’) */

import Cl_Empleados from "./Cl_Empleados.js";
import Cl_Empresa from "./Cl_Empresa.js";

let empleado1=new Cl_Empleados ("Mary", "F"); 
let empleado2=new Cl_Empleados ("José", "M"); 
let empleado3=new Cl_Empleados ("Carlos", "M");
let empleado4=new Cl_Empleados ("Pedro", "M");
let empresa=new Cl_Empresa ();

empresa.procesar(empleado1);
empresa.procesar(empleado2);
empresa.procesar(empleado3);
empresa.procesar(empleado4);

let salida= document.getElementById("salida");
salida.innerHTML= "Resultados";
salida.innerHTML+= "<br> La cantidad de hombres que trabajan en la emprea es: " +empresa.devolverContH();
salida.innerHTML+="<br> EL porcentaje de mujeres trabajando en la empresa es de: " +empresa.pcteMujeres() +"%";