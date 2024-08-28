// Crear una funcion que reciba una cadena de texto y devuelva la misma en mayusculas



// ingreso la frase
let texto = "hola mundo, ¿estas listo?"
// la frase la convierto en MAYUSCULA
// texto = texto.toLocaleUpperCase()

// console.log(texto);

let ingresoTexto = prompt("ingrese un texto/frase")

function ponerFraseMayuscula(frase){
    
    return frase.toLocaleUpperCase()
}

console.log(ponerFraseMayuscula(ingresoTexto))
