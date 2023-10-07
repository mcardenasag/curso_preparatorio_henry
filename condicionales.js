function viajar(destino) {
    if(destino === 'Brasil') {
             console.log('Gire a la izquierda');
    } else if(destino === 'Argentina') {
             console.log('Gire a la derecha');
    } else {
             console.log('Nos perdimos');''
    }
  };
  viajar('Brasil');
  viajar('Argentina');


  function puedeManejar(edad) {
    if(edad >= 18) {
             console.log( true );
    } 
    console.log( false );
  }
  
  puedeManejar(17);

  function tienenMismaLongitud(str1, str2) {
    // Retorna true si los dos strings tienen la misma longitud.
    // De lo contrario, retorna false.
    // Tu código:
    if(str1.length == str2.length){
        console.log(true);
       return(true);
    }
    console.log(false);
    return(false);
 }

 tienenMismaLongitud('hola', 'amorio');

 function esPar(num) {
    // Retorna true si "num" es par.
    // De lo contrario, retorna false.
    // Tu código:
    if(num % 2 == 0){
        console.log(true);
       return(true);
    }
    console.log(false);
    return(false);
 }

 esPar(103258456);

 function esImpar(num) {
    // Retorna true si "num" es impar.
    // De lo contrario, retorna false.
    // Tu código:
    if(num % 2 != 0){
        console.log(true);
       return(true);
    }
    console.log(false);
    return(false);
 }

 esImpar(3956284516);

 function esVocal(letra) {
    // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
    // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
    // Si no es vocal, tambien debe retornar "Dato incorrecto".
    // Tu código:
    


 }

 esVocal('ef');