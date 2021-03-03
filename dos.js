function mostrar()
{

let nombre;
let situacionLaboral;
let cantidadMaterias;
let sexo;
let notaPromedio;
let edad;
let pregunta;
let mejorPromedio;
let mejorPromedioNombre;
let flag = 0;
let edadViejo;
let nombreViejo
let flagE = 1
let contadorSoloEstudia = 0;
let contadorBuscando = 0;
let contadorTrabajando = 0;
let sumaNotaPromedioSoloEstudia = 0;
let sumaNotaPromedioTrabajando = 0;
let sumaNotaPromedioBuscando = 0;


do {
  
  nombre = prompt(`Inserte nombre del alumno`);

  situacionLaboral = prompt(`Inserte situacion laboral, "buscando", "trabajando" o "solo estudia"`);

    while (!(situacionLaboral == "buscando" || situacionLaboral == "trabajando" || situacionLaboral == "solo estudia" )); {
      
      situacionLaboral = prompt(`Error. Inserte situacion laboral`)

    }

  cantidadMaterias = parseInt(prompt(`Inserte cantidad de materias mayor a 0 y menor a 8`));

    while (!(cantidadMaterias > 0 && cantidadMaterias < 8) ) {
      
      cantidadMaterias = parseInt(prompt(`Error. Inserte cantidad de materias`));

    }
  
  sexo = prompt(`Inserte sexo, "femenino", "masculino" o "no binario"`)

    while (!(sexo == "femenino" || sexo == "masculino" || sexo == "no binario" )); {
      
      sexo = prompt(`Error. Inserte sexo`)

    }
  
  notaPromedio = parseFloat(prompt(`Inserte nota promedio entre 0 y 10`));
    
    while (!(notaPromedio > 0 && notaPromedio <= 10) ) {
      
      notaPromedio = parseInt(prompt(`Error. Inserte nota promedio de materias`));

    }

    switch (situacionLaboral) {
      case "buscando":

          sumaNotaPromedioBuscando += promedio;
          contadorBuscando++
        
        break;
    
      case "trabajando":
          sumaNotaPromedioTrabajando += promedio
          contadorTrabajando++;

      
      case "solo estudia":
          sumaNotaPromedioSoloEstudia +=
          contadorSoloEstudia++
        break;
    }
  
  edad = parseInt(prompt(`Insertar edad mayor a 0 y que sea numero`));

    while (!(edad >= 0)) {
      
      edad = parseInt(prompt(`Error. Insertar edad`)) 

    }

    // aca hice el mejor promedio de los que solo estudian
    if (flag = 0 && situacionLaboral == "solo estudia") {

      mejorPromedio = promedio
      mejorPromedioNombre = nombre
      flag = 1
    }

    if (flag == 1 && situacionLaboral == "solo estudia" && promedio > mejorPromedio) {
      
      mejorPromedio = promedio
      mejorPromedioNombre = nombre

    }

    if (flagE == 0 && situacionLaboral == "solo estudia") {
      
      edadViejo = edad;
      nombreViejo = edad;
      flagE = 1

    }

    if (flagE == 1 && situacionLaboral == "solo estudia" && edad > edadViejo ) {
      
      edadViejo = edad;
      nombreViejo = nombre;
    }

  
  
  pregunta = prompt(`Desea ingresar mas datos? s/n`)

} while (pregunta == "s");

if (flag != 0) {
  
  console.log("a) El nombre del mejor promedio de los que solo estudian es "+ mejorPromedioNombre)
}
else{

  console.log("a) No hay datos para responder")
}

if (flagE != 0) {
  
  console.log("b) El nombre del mas viejo de los alumnos que solo sea estudiante es " + nombreViejo)
}
else{
  console.log("b) No hay datos para responder")
}


if (contadorBuscando != 0) {
  console.log("c) El promedio de nota de los que estan buscando trabajo es " + sumaNotaPromedioBuscando/contadorBuscando )
}
else{

  console.log("c) No hay datos para responder")
}

if (contadorTrabajando != 0) {
  console.log("c) El promedio de nota de los que estan buscando trabajo es " + sumaNotaPromedioTrabajando/contadorTrabajando )
}
else{

  console.log("c) No hay datos para responder")
}

if (contadorSoloEstudia != 0) {
  console.log("c) El promedio de nota de los que estan buscando trabajo es " + sumaNotaPromedioSoloEstudia/contadorSoloEstudia )
}
else{

  console.log("c) No hay datos para responder")
}


}
