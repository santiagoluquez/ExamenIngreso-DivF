function mostrar()
{
// ejercicio 3  punto b el nombre y temperatura de la mujer con PAMI mas joven

let nombre;
let obraSocial;
let edad;
let temp;
let sexo;
let pregunta;
let contadorPasajero = 0;
let importeSinDescuento;
let flag = 0;
let contadorMayores = 0;
let contadorPami = 0;
let porcentaje;
let importeConDescuento;
let menorTemp


do {

	nombre = prompt(`Inserte nombre`);
	
	obraSocial = prompt(`Inserte obrea social "PAMI", "OSDE", "OTRAS"`);

		while (!(obraSocial == "PAMI" || obraSocial == "OSDE" || obraSocial == "OTRAS")) {
			
			obraSocial = prompt(`Error. Inserte estado civil`)
		}
	

	edad = parseInt(prompt(`Inserte edad mayores a 17 años`))

		while (!(edad > 17)) {
			
			edad = parseInt(prompt(`Error. Inserte edad`))
		}

	temp = parseFloat(prompt("Inserte temperatura"))
	
		while (!(temp >0)) {
			
			temp = parseFloat(prompt("Error. Inserte temperatura"))
		}
	
	sexo = prompt(`Inserte sexo, "f", "m"`)

		while (!(sexo == "f" || sexo == "m")) {
			
			sexo = prompt(`Error. Inserte sexo`)
		}
	
	if (obraSocial == "OSDE" && edad > 60) {
		contadorMayores++
	}

	if (obraSocial == "PAMI") {
		
		contadorPami ++
	}

	if (flag == 0 && obraSocial == "PAMI" && sexo == "m") {
		
		nombreJoven = nombre
		menorTemp = temp
		flag = 1
	}

	if (flag = 1 && obraSocial == "PAMI" && sexo == "m" && temp < menorTemp) {
		nombreJoven = nombre
		menorTemp = temp
	}
	
	contadorPasajero ++
	
	pregunta = prompt(`Desea seguir? s/n`)

} while (pregunta == "s");

importeSinDescuento = 600 * contadorPasajero

console.log("a) La cantidad de personas con OSDE de mas de 60 años es " + contadorMayores )

if (flag != 0) {
	
	console.log("b) El nombre de la mujer con PAMI mas joven es " + nombreJoven + " y su temperatura es " + menorTemp);
}
else{
	console.log("b) No hay informacion para mostrar")
}

console.log("c) El viaje sin descuento es " + importeSinDescuento)

porcentaje = contadorPami/contadorPasajero

if (contadorPasajero > 0.5) {
	
	importeConDescuento = importeSinDescuento * .75

console.log("d) El viaje con descuento es " + importeConDescuento)
}
else{

	console.log("d) El viaje no posee descuento") 

}

}
