// Crear un array vacío, que sea llenado con solo números pares del 1 al 10. 
// Pista: la condición se basa en el índice.
// let numeros =["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]  array de prueba




// let pares = []
// for (let i = 1; i <= 10; i++) {
//     // const element = i;
//     // console.log(element);
//     if (i %2 == 0) {
//         pares.push(i)
//     }
    
    
// }

// console.log('Aqui se muestran los numeros pares entre el 1 y 10:',  pares);



// Crear un array de números aleatorios. Ejemplo [ 54, 6, 18,.......]
// Verificar si es par, si cumple con la condición sumarle el número 4 e imprimir los resultados en un array nuevo. Sino cumple la condición imprimir un mensaje que diga: "Estos números no cumplen" e imprimir en un array nuevo esos números




const numerosAleatorios = [54, 6, 18, 11, 70, 85, 8, 65]

// let numerosPares = []

// let noCumplenEstosNum = []



// for (let i = 0; i < numerosAleatorios.length; i++) {

//         if (numerosAleatorios[i] %2 == 0  ) {
//             console.log("estos son los numeros pares: ", numerosAleatorios[i]);
            
            
//             numerosPares.push(numerosAleatorios[i] +4 )
            
//         }else {
//             noCumplenEstosNum.push(numerosAleatorios[i])
//         }
        
        
//     }
    
    
//     console.log('Estos cumplen con la condicion y se sumo  al resultado + 4', numerosPares);
    
//     console.log('estos numeros no cumplen con la condicion: ', noCumplenEstosNum);

let numeroPares = numerosAleatorios.filter(num=> num %2 ===0)

let agregarNumero = numeroPares.map(num => num + 4)




console.log('desde filter', numeroPares);
console.log('desde filter y map', agregarNumero);



//***************************************** */
//**************************************** */
//*************************************** */
//************************************** */

//Declara una cadena de texto, y extrae todas las letras mayúsculas que puedas encontrar y devuelvelas en un array.




// const frase = "Las Sombras Se Alargan Mientras El Sol Se Oculta En El Horizonte."


// let mostrarMayus = []





// for (let i = 0; i < frase.length; i++) {
    
//     const element = frase[i];
//     console.log(element);
    
//     const buscarMayusculas = frase[i]




//     if (buscarMayusculas >= "A" && buscarMayusculas <= "Z" )  {

         
//          mostrarMayus.push(buscarMayusculas)
        

//     }
    
    
// }

// console.log(mostrarMayus);
















