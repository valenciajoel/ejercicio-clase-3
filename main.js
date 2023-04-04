const personajesSimpsons = [
    { nombre: "Homero", edad: 39, rol: "Padre" },
    { nombre: "Marge", edad: 36, rol: "Madre" },
    { nombre: "Bart", edad: 10, rol: "Hijo" },
    { nombre: "Lisa", edad: 8, rol: "Hija" },
    { nombre: "Maggie", edad: 1, rol: "Hija" },
    { nombre: "Ned", edad: 35, rol: "Vecino" },
    { nombre: "Ralph", edad: 8, rol: "Compañero de clase" },
    { nombre: "Milhouse", edad: 10, rol: "Amigo" },
    { nombre: "Nelson", edad: 12, rol: "Bravucón" },
    { nombre: "Martin", edad: 10, rol: "Compañero de clase" }
    ];

// PUNTO 1

    const personajesMas18 =  personajesSimpsons.filter(function(mas18){
        return mas18.edad > 18;
    })

    console.log(personajesMas18);

// PUNTO 2

    const sumaDeEdades = personajesMas18.map(pj => pj.edad).reduce((suma, edad) => suma + edad, 0);
    console.log(sumaDeEdades);

// PUNTO 3

    const nombresPersonajes = personajesSimpsons.map(pj => pj.nombre);
    console.log(nombresPersonajes);