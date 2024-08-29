// Una función cotizarDolar(pesos), la cual recibe un valor monetario en pesos argentinos, y 
// lo retorna en su equivalente en dólares. Una función cotizarPesos(dolar), que recibe un valor 
// monetario en dólares, y lo retorna en su equivalente en pesos argentinos. Luego invocar las 
// funciones solicitando  al usuario el valor y el tipo de cotización a realizar

function cotizarPesos(dolar) {
    
    
    // 1 $$ = $1340
    let valorPorDolarEnPesos = 1340
    
    let cotizador = valorPorDolarEnPesos * dolar 
    
    return `Ingresaste $$ ${dolar} (Dolares). Equivalente a $ ${cotizador} (Pesos)` 
}

let ingresardolar = prompt("ingrese la cantidad de dolares que quiera convertir a pesos")
console.log(cotizarPesos(ingresardolar));


function cotizarDolar(pesos) {
    let dolares = 1
    const valorPorDolarEnPesos = 1340
    let cotizador = dolares * pesos / valorPorDolarEnPesos
    return `Ingresaste $$ ${pesos} (Pesos). Equivalente a $ ${cotizador} (Dolares)` 
    
}
let ingresarPesos = prompt("ingrese la cantidad de pesos que quiera convertir a dolares")
console.log(cotizarDolar(ingresarPesos));
