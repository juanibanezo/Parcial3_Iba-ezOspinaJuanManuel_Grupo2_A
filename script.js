/*
Juan Manuel Ibañez Ospina
Grupo 2 
Problema A: Pago mensual de EPS (salud) con beneficiarios adicionales
*/
const valorUPC=150000;
const SMMLV=1750000;
const maxIBC=25 * SMMLV;
const porcentajeIBC=0.4;
const trabajador=0.04;
const empleador=0.085;
const afiliado=0.125;
let aporteEmpleador;
let aporteAfiliado;
let adicionalUPC;

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
else { 

let IBC=salario * porcentajeIBC;

    if(IBC<1750000){
        IBC=SMMLV * 1;
    }
    else if(IBC>43750000) {
        IBC=SMMLV * 25;
    }
    else {
     IBC=IBC;
    }

if(tipo===1){
aporteAfiliado=Math.round(IBC * trabajador);
aporteEmpleador=Math.round(IBC * empleador);
}
else{
aporteAfiliado=Math.round(IBC * afiliado);
aporteEmpleador=0;
}

if(padres===0){
    adicionalUPC=0;
}
else if(padres===1){
    adicionalUPC=Math.round(padres * valorUPC);
}
else {
    adicionalUPC=Math.round(padres * valorUPC);
}

const totalAfiliado=Math.round(aporteAfiliado + adicionalUPC);
const totalEPS=Math.round(totalAfiliado + aporteEmpleador);

alert(
    "IBC: " + IBC + "\n" +
    "Aporte del Afiliado: " + aporteAfiliado + "\n" +
    "UPC adicional: " + adicionalUPC + "\n" +
    "Aporte del Empleador: " + aporteEmpleador + "\n" +
    "Total a cargo del afiliado: " + totalAfiliado + "\n" +
    "Total que recibe la EPS: " + totalEPS
  );

}