// Ingresar un nombre y una contraseña por prompt que debe
//  coincidir con el nombre y la contraseña que tenga yo previamente guardada. 
// Si coinciden ambos imprimir en consola un mensaje de estoy logueado sino un
//  mensaje error el los datos y que imprima las variables para ver cuál fue el error.


const usuario = 'ramon'
const password = '18ramon*'


let ingresoUsuario = prompt('ingrese su Usuario')
let ingresoPassword = prompt('ingrese su Password')



if (usuario === ingresoUsuario && password === ingresoPassword) {

        console.log('te logueaste con exito');
            
    
}else if(usuario === ingresoUsuario && password !== ingresoPassword) {
    console.log('Usuario ingresado correctamente')
    console.log('Contraseña ingresado incorrectamente')

    
}else if(usuario !== ingresoUsuario && usuario === ingresoPassword) {
    console.log('Contraseña ingresado correctamente')
    console.log('Usuario ingresado incorrectamente')

             
}else {
    console.log('Los datos ingresados son incorrectos');

}