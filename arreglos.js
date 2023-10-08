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
