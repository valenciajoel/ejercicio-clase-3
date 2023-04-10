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
    console.log("PUNTO 1");
    console.log(personajesMas18);

// PUNTO 2

    const sumaDeEdades = personajesMas18.map(pj => pj.edad).reduce((suma, edad) => suma + edad, 0);
    console.log("PUNTO 2");
    console.log(sumaDeEdades);

// PUNTO 3

    const nombresPersonajes = personajesSimpsons.map(pj => pj.nombre);
    console.log("PUNTO 3");
    console.log(nombresPersonajes);

// PUNTO 4

    const cambioDeRol = personajesSimpsons.map(pj =>{
        const {nombre,edad,rol} = pj;
        if(pj.edad < 18){
         const estudiante = {nombre, edad, rol: "Estudiante"} 
         return estudiante;  
        }
        return pj;
    })
    console.log("PUNTO 4");
    console.log(cambioDeRol);

// PUNTO 5

    // Array de posibles nombres de personajes
const nombres = ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie', 'Abraham', 'Ned', 'Maude', 'Seymour', 'Edna'];

// Función para generar un número aleatorio entre min y max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Array para almacenar los personajes
const aleatorioSimpsons = [];

// Generar 10 personajes aleatorios
for (let i = 1; i <= 10; i++) {
  // Obtener un nombre aleatorio de la lista de nombres
  const nombre = nombres[getRandomInt(0, nombres.length)];
  // Generar una edad aleatoria entre 18 y 70 años
  const edad = getRandomInt(18, 71);
  // Obtener un rol aleatorio de la lista de roles
  const roles = ['Protagonista', 'Antagonista', 'Secundario', 'Recurrente', 'Invitado'];
  const rol = roles[getRandomInt(0, roles.length)];
  // Crear el objeto de personaje y agregarlo al array
  const personaje = { nombre, edad, rol };
  aleatorioSimpsons.push(personaje);
}

// Imprimir la lista de personajes generados
console.log("PUNTO 5");
console.log(aleatorioSimpsons);
const todosLosPersonajes =[...personajesSimpsons,...aleatorioSimpsons];
console.log(todosLosPersonajes);
