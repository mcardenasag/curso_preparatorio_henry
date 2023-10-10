// Los Arreglos o Arrays son lo que se conoce como objeto global dentro de javaScript, y que nos permite guardar y gestionar informacion, es de gran utilidad al momento de almacenar datos. 

// Dentro de los arrays existen don conceptos que pueden parecer similares, pero son muy diferentes

// -Elemento: es todo aque dato que el usuario guarda. 
// -Indice: no representan el dato en si MediaStreamAudioSourceNode, sino la posicion en la que esta guardado. En los arreglos la posicion siempre se contabiliza desde en cero, no el uno 

// Lista de compras
var listaDeCompras = [];

listaDeCompras[1] = 'Compotas para el bebe.';
listaDeCompras[3] = 'Pizza.';
listaDeCompras[2] = 'Jamon.';
listaDeCompras[0] = 'Refrescos.';

var verElementosDelArray = listaDeCompras[1];

console.log(verElementosDelArray);

console.log(listaDeCompras);

console.log(listaDeCompras[3]);

var nombres = ['Elizabet', 'Miguel', 'Evelin'];

// Para identificar la cantidad de elementos que contiene un Array se utiliza length 

console.log(nombres.length);


// Los arreglos ademas de ser un tipo de dato, tambien son un objeto global dentro de JavaScript, esto significa que todos los arreglos estan asociados a una serie de metodos. 

var colores = ['Amarillo', 'Azul'];

console.log(colores.length);
console.log(colores);

// push: metodo para agregar elementos al Array, al final de la lista 
colores.push('Rojo');

console.log(colores.length);
console.log(colores);

// unshift: metodo para agregar elementos al Array, al inicio de la lista 

colores.unshift('Fuccia');

console.log(colores.length);
console.log(colores);


// pop: metodo para eliminar el ultimo elemento del Array. 

colores.pop();

console.log(colores.length);
console.log(colores);

// shift: metodo para eliminar el primer elemento del Array. 

colores.shift();

console.log(colores.length);
console.log(colores);

// includes: metodo que nos permite determinar si existe un dato en nuestro arreglo. Devuelve un booleano (true, false).

var estaAmarillo = colores.includes('Amarillo'); //valor esperado: true

console.log(estaAmarillo); //valor esperado: true

var estaBlanco = colores.includes('Blanco');

console.log(estaBlanco); //valor esperado: false

// every: este metodo permite definir si los datos cumplen o no con una condision o una serie de condiciones. Devuelve un booleano (true, false). 

var nums = [1, 2, 3, 7, 8, 9];

var cumpleCondicion = nums.every((nums) => {
    return nums > 0;
});

console.log(cumpleCondicion);

// split (separar) y join (unir): estos metodos permiten convertir un string en Array, y un array a string 

// ejemplo: en la siguiente linea declararemos la variable palabra y le asignaremos la cadena Henri, con i latina y posteriormente la corregiremos con los metodos aprendidos. 

var palabra = 'Henri';
console.log(palabra);

// convertiremos la variable palabra en un Array, asignadosela a la variable palabraSeparada. 

var palabraSeparada = palabra.split('');

console.log(palabraSeparada);

// con el metodo pop, eliminaremos el ultimo caracter del Array, para despues agregar con el metodo push la 'y' griega.

palabraSeparada.pop();
console.log(palabraSeparada);

palabraSeparada.push('y');
console.log(palabraSeparada);

// y por ultimo con el metodo join, uniremos nuevamente el array para convertirlo en un String. 

palabra = palabraSeparada.join('');
console.log(palabra);

// NOTA: las dos comillas dentro del parentesis de split y join, permiten eliminar los espacios entre caracter.


// forEach: es un metodo que nos permite recorrer un arreglo. no modifica ningun elemento

var numeros = [0, 8, 0, 4];

// imprimiremos cada uno de los elementos dentro del arreglo numeros. 

numeros.forEach((numeros) => console.log(numeros));

// imprimiremos los numeros mayores a 3 dentro del arreglo. 
numeros.forEach((numeros) => {
    if(numeros > 3){
        console.log(numeros);
    }
});

// map: realiza una copia de arreglo original, recorre el arreglo y puede modificar los elementos de este 

var masUno = numeros.map((numeros) => {
    return numeros + 1;
});

console.log(masUno);

// en la siguiente pagina podremos encontrar mas metodos q pueden utilizarce en los Array. 

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array


// Bucles o ciclos en los arreglos. 

var arr = [1, 2, 3, 4, 5, 6];

for(var i=0;  i < arr.length; i++ ){
    console.log(arr[i]);
}

//Encontrar letra P

function encontrarLetraP(String){

    var letras = String.split("");

    for(let i=0; i < letras.length; i++){
        if(letras[i] === 'p'){
            console.log('Si contiene a P');
        } 
    }
}


var ar = [];

while(ar.length < 5){
    
    ar.push('Boom');
}

console.log(ar);

encontrarLetraP('Papá y Mamá');
encontrarLetraP('Gracias Dios por todo');