// Math.pow 
// Este método nos permite potenciar un número. Por ejemplo, 2 elevado al cubo, sería igual a multiplicar 2 x 2 x 2. Es decir, 8.
// El primer número es la base, y el segundo será la potencia.

console.log(Math.pow(2, 3));

// Math.round, Math.floor, Math.ceil
// A veces necesitamos redondear un número decimal, ya que muchas veces las operaciones matemáticas pueden resultar en números con coma. Para esto, JavaScript nos ofrece tres métodos

// Math.round: redondeará el número decimal al entero más próximo. Es decir que, si tenemos 0.49, el resultado será 0. En cambio, si tenemos 0.50, el resultado será 1.

console.log(Math.round(12.24));
console.log(Math.round(12.50));

// Math.floor: redondeará el número decimal al entero de menor valor. Por ejemplo, si tenemos el número 5.93, el resultado será 5.
console.log(Math.floor(2.24));

// Math.ceil este método, al contrario que el anterior, redondeará un número al siguiente entero. Por ejemplo, si tenemos 3.27 el resultado será 4.
console.log(Math.ceil(2.24));

// Math.max, Math.min
// Estos dos métodos nos permitirán conocer el valor máximo o mínimo de un conjunto de números. Por ejemplo, si tenemos los números 1, 2, 3, 4 y 5, el máximo será el 5 y el mínimo el número 1.

console.log(Math.max(5,7,2,9,4,2,8));

console.log(Math.min(5,7,2,9,4,2,8));

// Math.random
// E ste último método nos permitirá generar un número aleatorio. Es importante tener en cuenta que el número que se generará es decimal, y puede ser cualquiera entre el 0 y el 1.
console.log(Math.random());

