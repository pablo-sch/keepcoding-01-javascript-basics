# Entrega Proyecto de Introducción a JavaScript

**Proyectos KeepCoding - Web 18**  
Consulta la lista completa de repositorios y descripciones en [repos-kc-web-18.md](https://github.com/pablo-sch/pablo-sch/blob/main/docs/repos-kc-web-18.md)

## Selecciona tu Idioma

- 🇺🇸 [Inglés](README.md)
- 🇩🇪 [Alemán](README.de.md)

<!-- ------------------------------------------------------------------------------------------- -->

## Objetivo del Proyecto

Este proyecto tiene por objetivo ejercitar y demostrar los conocimientos adquiridos en las clases virtuales, aplicando conceptos básicos de JavaScript como introducción a la programación web. No está permitido utilizar librerías o _frameworks_ externos de JavaScript o CSS; todo debe resolverse empleando únicamente JavaScript “puro” (vanilla JS). De este modo, cada ejercicio refleja fielmente lo visto en clase y facilita una introducción práctica a la programación web.

<!-- ------------------------------------------------------------------------------------------- -->

## Descripción

En este repositorio encontrarás la práctica correspondiente a la unidad **“Introducción a JavaScript”**. Contiene seis ejercicios que cubren:

- **Strings**, **Arrays**, **Objetos** y sus atributos.
- Manejo de **sincronía** y **destructuración**.
- Creación y utilización de **funciones**.
- Métodos de array como **`.map`**, **`.find`** y **`.filter`**.
- Un pequeño conjunto de pruebas (testing) al final del ejercicio 06.

Cada ejercicio debe resolverse sin depender de ninguna librería o _framework_ externo, para reforzar el entendimiento de la sintaxis y las técnicas propias de JavaScript.

<!-- ------------------------------------------------------------------------------------------- -->

## Conocimientos Aprendidos y Trabajados

- Introduccion a JS
- Sintaxis y variables
  - Escritura básica de un archivo.
  - Palabras reservadas.
  - Comentarios
  - Variables (let, const, var)
  - Punto y coma
- Tipos
  - Primitivos
  - Number: 42 or 3.14159.
  - String: "Howdy".
  - Boolean: true and false.
  - null
  - undefined: A top-level property whose value is not defined.
  - BigInt: 9007199254740992n.
  - Object
  - Non-zero value, 0, null y undefined
- Operadores
  - typeof
  - Operadores de asignación
  - Operadores aritméticos
  - Operadores de comparación
  - Operadores de cadena
  - Operadores lógicos
  - Operador coma
- Sentencias de control y bloques
- Expresiones condicionales if..else
- Bloques
- Hoisting
- switch
- Ternario
- Valores truthy
  - Números distintos a 0
  - Cadenas distintas a “”
  - Objetos, cadenas, funciones
- Valores falsy
  - false
  - 0
  - “” o ‘’
  - null
  - undefined
  - NaN
- Strings & Arrays
  - Métodos String: trim, lowerCase, includes, replace, parsing
  - Errors
  - Métodos de los arrays
  - Arrays bidimensionales
- Functions
  - Declaración de función
  - Funciones Flecha
  - Llamar funciones
  - Ámbito de function
  - Cierres
  - Parámetros predeterminados
  - Parámetros rest
- Bucles
  - For
  - While
  - Break & Continue
  - for..in \*\*
- Objects
  - Creación de objetos
  - Acceso a propiedades de objetos
  - Modificación de propiedades de objetos
  - Añadir propiedades a objetos
  - Eliminar propiedades de objetos
  - for..in \*\*
- Mutable
  - Objects and arrays
  - spread operator\*\*\*
  - Destructuring
  - Problemas
- Programación funcional
  - Callback function
  - ForEach
  - Map
  - Filter
  - Reduce\*
- Async
  - callback
  - promise
  - async / await
- Extra
  - Dates
  - Regex
  - Modules

<!-- ------------------------------------------------------------------------------------------- -->

## Detalles del Proyecto

### Consideraciones generales

- No se permite el uso de librerías. Todo el código tiene que ser creado por el alumno.
- No es necesario crear un HTML para cada solución.

### Ejercicio 1

- Crear un archivo `ejercicio1.js` que tenga un objeto llamado `usuario` con los siguientes campos:
  - Nombre (real o inventado)
  - Apellidos (reales o inventados)
  - Una lista con los temas del bootcamp Node.js, Git y React, cada uno con:
    - Nombre del módulo
    - Fecha de inicio en formato `YYYY-MM-DD`
  - Estado de “búsqueda activa” (valor booleano: `true` o `false`)
- En este archivo, mostrar por pantalla la fecha de inicio del módulo de React del objeto `usuario`.

### Ejercicio 2: Arreglar bug

- El cliente intenta calcular el promedio de una lista de números, pero el código en producción no funciona.
- No se proporciona el error, solo el código que está usando el cliente.
- Crear un archivo `bug.js` con la solución que corrija el cálculo del promedio.

```javascript
// exercise2.js

const calcularPromedio = (numeros) => {
  let sumaTotal = 0;
  for (let i = 0; i <= numeros.length; i++) {
    sumaTotal += numeros[i];
  }
  const promedio = sumaTotal / numeros.length;
  return promedio;
};
const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);

//Creado por el docente Kevin Martínez
```

### Ejercicio 3: Deducir la lógica

- No hay enunciado: hay que deducir qué se espera según los datos de entrada y los resultados.

  1. **Ejercicio 3.1**: Crear una función que, con los datos de entrada proporcionados (no mostrados aquí), produzca los resultados esperados.

  ```javascript
  // exercise3.1.js

  const input1 = ["Downloads", "Videos", "capture", "mp4"];
  // create your function here
  yourFunction(input1); // 'Downloads/Videos/capture.mp4'
  const input2 = ["CodinGame", "python", "py"];
  yourFunction(input2); // 'CodinGame/python.py'
  const input3 = [
    "programming",
    "languages",
    "easy",
    "beginner",
    "useful",
    "pythonstuff",
    "py",
  ];
  yourFunction(input3);
  // 'programming/languages/easy/beginner/useful/pythonstuff.py'

  //Creado por el docente Kevin Martínez
  ```

  2. **Ejercicio 3.2**: Crear una función que, con los datos de entrada proporcionados, produzca los resultados esperados.

  ```javascript
  // exercise3.2.js

  // create your function here
  yourFunction(input); // '1-0'
  const secondInput = 1;
  yourFunction(input); // '1'
  const thirdInput = 11234;
  yourFunction(input); // '1-1-2-3-4'

  //Creado por el docente Kevin Martínez
  ```

  3. **Ejercicio 3.3**: Crear una función que, con los datos de entrada proporcionados, produzca los resultados esperados.

  ```javascript
  // exercise3.3.js

  // create your function here
  const input1 = "string";
  // create your function here
  yourFunction(input); // '6 gnirts'
  const input2 = "variable";
  yourFunction(input); // '8 elbairav'
  const input3 = "pointer";
  yourFunction(input); // '7 retniop'

  //Creado por el docente Kevin Martínez
  ```

### Ejercicio 4: Transformaciones con `map` y `filter`

- El cliente tiene un array de datos y necesita:
  - El listado de los desarrolladores cuya habilidad incluya `"JavaScript"`.
  - El listado de los proyectos en los que sus desarrolladores trabajan.
- Crear un archivo `transform.js` que contenga dos funciones que retornen esos valores.
- **No usar `for` ni `while`**; se trata de practicar el uso de `map` y `filter`.

  ```javascript
  // exercise4.js

  const datos = [
    {
      id: 1,
      nombre: "Juan",
      habilidades: ["JavaScript", "HTML", "CSS"],
      proyectos: [
        { id: 1, nombre: "Proyecto 1" },
        { id: 2, nombre: "Proyecto 2" },
      ],
    },
    {
      id: 2,
      nombre: "María",
      habilidades: ["Python", "SQL", "Django"],
      proyectos: [
        { id: 3, nombre: "Proyecto 3" },
        { id: 4, nombre: "Proyecto 4" },
      ],
    },
    {
      id: 3,
      nombre: "Pedro",
      habilidades: ["Java", "Spring", "Hibernate"],
      proyectos: [
        { id: 5, nombre: "Proyecto 5" },
        { id: 6, nombre: "Proyecto 6" },
      ],
    },
  ];

  //Creado por el docente Kevin Martínez
  ```

  ```javascript
  // exercise4.js

  /_ desarrolladoresJavascript _/
  [
  {
  "id": 1,
  "nombre": "Juan",
  "habilidades": ["JavaScript", "HTML", "CSS"],
  "proyectos": [
  { "id": 1, "nombre": "Proyecto 1"},
  { "id": 2, "nombre": "Proyecto 2" }
  ]
  }
  ]
  /_ nombresProyectos _/
  ['Proyecto 1', 'Proyecto 2', 'Proyecto 3', 'Proyecto 4', 'Proyecto 5','Proyecto 6']

    //Creado por el docente Kevin Martínez
  ```

### Ejercicio 5: Arreglar bug de asincronía

- Existe un error: al pedir un usuario con ID 1, siempre devuelve `undefined`.
- Se proporciona el código a revisar y arreglar.
- Crear un archivo `bugAsync.js` con la solución que corrija la llamada asíncrona.

  ```javascript
  // exercise5.js

  // Este programa simula una llamada asincrónica para obtener un usuario
  function obtenerUsuario(id) {
    let usuario;
    setTimeout(() => {
      if (id === 1) {
        usuario = { id: 1, nombre: "John Doe" };
      }
    }, 2000);
    return usuario;
  }
  const usuario = obtenerUsuario(1);
  console.log(usuario);

  //Creado por el docente Kevin Martínez
  ```

### Ejercicio 6: Keepcoding Playlist

- El cliente ya creó la maquetación y parte de la lógica de formularios e interacciones (ordenar, marcar como favorito, borrar), pero necesita ayuda para manejar el estado y la lógica completa de la web.
- Se debe:
- Crear un estado dentro de una función usando **closures**.
- Exportar dicha función para gestionar las funcionalidades de la app.
- El archivo a modificar ya existe en `playlist/js/playlist.js`; solo es necesario editar ese archivo.
- Cada playlist tiene:
- Nombre de la playlist
- Listado de canciones, donde cada canción incluye:
- Título
- Nombre del artista
- Género musical
- Duración en segundos
- Indicador de “favorita” (booleano)

<!-- ------------------------------------------------------------------------------------------- -->

## Tecnologías Utilizadas

### Lenguajes

- **HTML**: Para la estructuración del contenido y la creación de la estructura de la página web.
- **CSS**: Para el diseño y estilo visual de la página, asegurando una experiencia de usuario atractiva y coherente.
- **JavaScript**: Para agregar interactividad y características dinámicas al sitio web, mejorando la experiencia del usuario con funcionalidades como validación de formularios, animaciones y manejo de eventos.

### Dependencias

Ninguna

<!-- ------------------------------------------------------------------------------------------- -->

## Instrucciones de Instalación y Uso

### Requisitos de Software

- **[Git](https://git-scm.com/downloads)** (testeado en la versión **2.47.1.windows.1**)
- **[Visual Studio Code](https://code.visualstudio.com/)** (testeado en la versión **1.99.0**)
- **Live Server** (VS Code addon)

### Clonación del Repositorio

Poyecto

```bash
git clone https://github.com/pablo-sch/keepcoding-01-javascript-basics.git
```

![Demo](https://github.com/pablo-sch/pablo-sch/blob/main/etc/clone-tutorial.gif)

<!-- ------------------------------------------------------------------------------------------- -->

## Vista Previa del Proyecto

### Ejercicio 6: Playlist

![Playlist](../etc/preview_images/playlist.png)

<!-- ------------------------------------------------------------------------------------------- -->

## Contribuciones y Licencias

Este proyecto no cuenta con contribuciones externas ni licencias.
