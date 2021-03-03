
function mostrar()
{

let nombre;
let tipo;
let precio;
let cantidad;
let categoria;
let acumuladorAlcohol = 0;
let acumuladorIAC = 0;
let acumuladorQUAT = 0;
let suma;
let promedioAlcohol;
let promedioIAC;
let promedioQUAT;
let fabricante;
let acumuladorBactericida = 0;
let acumuladorDesinfectante = 0;
let acumuladorDetergente = 0;
let cantidadDetergenteMenor200 = 0;
let precioMasCaro;
let fabricanteCaro;
let catergoriaCaro; 
let flag = 0
let contadorQUAT = 0;
let contadorAlcohol = 0;
let contadorIAC = 0;


for (let i = 0; i < 5 ; i++){

	nombre = prompt(`Inserte nombre del producto`)

	tipo = prompt(`Inserte tipo, "alcohol", "iac" o "quat"`)
		
		while (!(tipo == "ALCOHOL" || tipo == "IAC" || tipo == "QUAT")) {
			
			tipo = prompt(`Error. Inserte nombre`)
		}

	precio = parseFloat(prompt(`Inserte precio entre $100 y $300`));

		while (!(precio >= 100 && precio <= 300)) {
			
			precio = parseFloat(prompt(`Error. Inserte precio`));
		}
	
	cantidad = parseInt(prompt(`Inserte cantidad, mayor a 0 y menor a 1000 unidades`))

		while (!(cantidad > 0 && cantidad <= 1000)) {
			
			cantidad = parseInt(prompt(`Error. Inserte cantidad`))
		}

		switch (tipo) {
			case "ALCOHOL":
					contadorAlcohol ++
					acumuladorAlcohol+= cantidad
				break;
			
			case "IAC":
					contadorIAC++
					acumuladorIAC+= cantidad
				break;

			case "QUAT":
					contadorQUAT++
					acumuladorQUAT+= cantidad
				break;
		}

	categoria = prompt(`Inserte categoria, "bactericida", "detergente" o "desinfectante"`)

		while (!(categoria == "bactericida" || categoria == "detergente" || categoria == "desinfectante")) {
			
			categoria = prompt(`Error. Inserte categoria`)
		}

		switch (categoria) {
			case "bactericida":
					acumuladorBactericida+= cantidad
				break;
			
			case "detergente":
					acumuladorDetergente+= cantidad

					if (precio <= 200) {
						cantidadDetergenteMenor200 += cantidad
					}
				break;

			case "desinfectante":
					acumuladorDesinfectante+= cantidad
				break;
		}
	
	fabricante = prompt(`Inserte fabricante`)

	if (flag == 0) {
		
		precioMasCaro = precio
		fabricanteCaro = fabricante
		catergoriaCaro = categoria
		flag = 1

	}

	if (precio > precioMasCaro) {
		precioMasCaro = precio
		fabricanteCaro = fabricante
		catergoriaCaro = categoria
	}

}

suma = acumuladorAlcohol + acumuladorIAC + acumuladorQUAT

promedioAlcohol = acumuladorAlcohol/contadorAlcohol;

promedioIAC = acumuladorIAC/contadorIAC;

promedioQUAT = acumuladorQUAT/contadorQUAT;

console.log("a)El promedio de cantidad del tipo alcohol es " + promedioAlcohol)
console.log("a)El promedio de cantidad del tipo IAC es " + promedioIAC)
console.log("a)El promedio de cantidad del tipo QUAT es " + promedioQUAT)

if (acumuladorDesinfectante > acumuladorDetergente && acumuladorDesinfectante > acumuladorBactericida ) {
	
	console.log("b) La categoria con mas cantidad de unidades en total de la compra es desinfectante")
}
else if (acumuladorDetergente > acumuladorDesinfectante && acumuladorDetergente > acumuladorBactericida ) {
	console.log("b) La categoria con mas cantidad de unidades en total de la compra es detergente")

} 
else{
	console.log("b) La categoria con mas cantidad de unidades en total de la compra es bactericida")

}

console.log("c) Las unidades de detergente con precios menos a 200 (inclusive) es "+ cantidadDetergenteMenor200)

console.log("d) El fabricante y Categoria del más caro de los productos es " + fabricanteCaro+ " y " + catergoriaCaro )
}