/*
Juan Manuel Ibañez Ospina
Grupo 2 
Problema A: Pago mensual de EPS (salud) con beneficiarios adicionales
*/

const SMMLV=1750000;
const maxIBC=25 * SMMLV;
const IBC=0.4;
const trabajador=0.04;
const empleador=0.0085;

const salario=Number(prompt("Ingrese salario mensual"));
const tipo=Number(prompt("Ingrese 1 si es Depedendiente, o 2 si es independiente"));
const padres=Number(prompt("Ingrese cantidad de padres a cargo (0,1 o 2)"))

if(salario<0){
    alert("Error salario invalido");
}
else if (tipo>2 || tipo<1){
    alert("Error tipo invalido");
}
else if (padres<0 || padres>3){
    alert("Error cantidad de padres invalida");
}

