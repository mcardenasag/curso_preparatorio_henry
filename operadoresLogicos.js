// && => Operador AND

function mayorYMenor(num){
    if(num > 5 && num < 10 && num % 2 === 0)console.log(true);
    else console.log(false);
}

// mayorYMenor(6);
// mayorYMenor(7);
// mayorYMenor(8);
// mayorYMenor(9);

// || => Operador OR

function operadorOr(str){
    if(str === 'henry' || str.length < 2) console.log(true);
    else console.log(false);
}

// operadorOr('henry');

// ! => Operador NOT

function negacion(permiso){
    if(!permiso) console.log('Tiene permiso.')
}

negacion(true);