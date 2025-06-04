# Entrega Proyecto de Introducción a JavaScript

**Proyectos KeepCoding - Web 18**  
Consulta la lista completa de repositorios y descripciones en [repos-kc-web-18.md](https://github.com/pablo-sch/pablo-sch/blob/main/docs/repos-kc-web-18.md)

## Selecciona tu Idioma

- 🇺🇸 [Inglés](README.md)
- 🇩🇪 [Alemán](README.de.md)

Aquí se encuentra la práctica de la unidad 'Introducción a JavaScript'.
En este repositorio se encuentra seis ejercicios simples sobre la programación en JavaScript.
En estos ejercicios se ejercitan el uso de Strings, Arrays, Objetos y sus atributos,
el uso de sincronía, destructuración, el uso de funciones
y el uso de .map, .find y .filter y un poco de testing al final del ejercicio 06.

<!-- ------------------------------------------------------------------------------------------- -->

## Objetivo del Proyecto

Este proyecto tiene por objetivo ejercitar y demostrar los conocimientos adquiridos en las clases virtuales, aplicando conceptos básicos de JavaScript como introducción a la programación web. No está permitido utilizar librerías o _frameworks_ externos de JavaScript o CSS; todo debe resolverse empleando únicamente JavaScript “puro” (vanilla JS). De este modo, cada ejercicio refleja fielmente lo visto en clase y facilita una introducción práctica a la programación web.

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

## Conocimientos Aprendidos y Trabajados

<!--
Esta versión utiliza una tabla HTML dentro de Markdown para distribuir el contenido en 3 columnas,
aprovechando más espacio horizontal. GitHub y la mayoría de renderizadores de Markdown soportan HTML.
-->

<table>
  <tr>
    <!-- Columna 1 -->
    <td valign="top" width="33%">
      ### Sintaxis y Variables
      - Escritura básica de un archivo  
      - Palabras reservadas  
      - Comentarios  
      - Variables (`let`, `const`, `var`)  
      - Punto y coma

      ### Tipos
      - **Primitivos**
      - **Number**: 42, 3.14159
      - **String**: `"Howdy"`
      - **Boolean**: `true`, `false`
      - `null`
      - `undefined`
      - **BigInt**: `9007199254740992n`
      - **Object**
      - Valores no-cero, 0, `null` y `undefined`
    </td>

    <!-- Columna 2 -->
    <td valign="top" width="33%">
      ### Operadores
      - `typeof`
      - Operadores de asignación (`=`, `+=`, etc.)
      - Operadores aritméticos (`+`, `-`, `*`, `/`, `%`, `**`)
      - Operadores de comparación (`==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`)
      - Operadores de cadena (`+`, `.concat()`)
      - Operadores lógicos (`&&`, `||`, `!`)
      - Operador coma (`,`)

      ### Sentencias de Control y Bloques
      - `if…else`
      - Bloques (`{ ... }`)
      - Hoisting
      - `switch`
      - Ternario (`condición ? expr1 : expr2`)
    </td>

    <!-- Columna 3 -->
    <td valign="top" width="33%">
      ### Valores
      - **Truthy**
        - Números distintos de 0
        - Cadenas distintas de `""`
        - Objetos, funciones
      - **Falsy**
        - `false`
        - `0`
        - `""` o `''`
        - `null`
        - `undefined`
        - `NaN`

      ### Strings & Arrays
      - **Métodos String**:
        - `trim()`, `toLowerCase()`, `includes()`, `replace()`, parsing
      - **Arrays**:
        - Métodos básicos (`push`, `pop`, `shift`, `unshift`, etc.)
        - Arrays bidimensionales
    </td>

  </tr>

  <tr>
    <!-- Columna 1 -->
    <td valign="top">
      ### Funciones & Bucles
      - **Funciones**  
        - Declaración (`function nombre() {}`)  
        - Funciones Flecha (`const f = () => {}`)  
        - Llamar funciones  
        - Ámbito (scope)  
        - Cierres (closures)  
        - Parámetros predeterminados  
        - Parámetros `rest`
      - **Bucles**  
        - `for`  
        - `while`  
        - `break` & `continue`  
        - `for…in`
    </td>

    <!-- Columna 2 -->
    <td valign="top">
      ### Objetos & Mutabilidad
      - **Objetos**
        - Creación (`{ clave: valor }`)
        - Acceso a propiedades (`obj.prop`, `obj["prop"]`)
        - Modificación de propiedades
        - Añadir propiedades
        - Eliminar propiedades (`delete`)
        - Iterar con `for…in`
      - **Mutable**
        - Objetos y Arrays mutables
        - Operador spread (`...`)
        - Destructuring (objetos y arrays)
        - Problemas de referencia (aliasing)
    </td>

    <!-- Columna 3 -->
    <td valign="top">
      ### Programación Funcional & Async
      - **Programación Funcional**
        - Callback functions
        - `forEach`
        - `map`
        - `filter`
        - `reduce`
      - **Async**
        - Callbacks asíncronos
        - Promesas (`Promise`)
        - `async` / `await`
    </td>

  </tr>

  <tr>
    <!-- Columna Única al final (Para "Extra") -->
    <td colspan="3" valign="top">
      ### Elementos Extra
      - Fechas (`Date`)  
      - Expresiones regulares (Regex)  
      - Módulos (ES Modules)
    </td>
  </tr>
</table>

<!-- ------------------------------------------------------------------------------------------- -->

## Detalles del Proyecto

<!-- ------------------------------------------------------------------------------------------- -->

## Tecnologías Utilizadas

<!-- ------------------------------------------------------------------------------------------- -->

## Instrucciones de Instalación y Uso

<!-- ------------------------------------------------------------------------------------------- -->

## Vista Previa del Proyecto

<!-- ------------------------------------------------------------------------------------------- -->

## Contribuciones y Licencias

Este proyecto no cuenta con contribuciones externas ni licencias.
