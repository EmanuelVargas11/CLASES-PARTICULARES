// crear una funcion que calcule un impuesto, de tal manera que reciba un monto y un porcentaje y 
// devuelva el calculo del impuesto por ejemplo: monto = 100 porcentaje 20%, total = 120

// let monto = 1000

// let ingresoMonto = prompt("ingrese un monto")

// ingresoMonto = parseInt(ingresoMonto)

function impuestoAlMonto(monto) {
   let textoInfo = `a su monto de: $${monto} se le aplicara el 21% de percepcion de IVA. TOTAL:$ `
   let porcentaje = 21/100 * monto
   let impuesto = porcentaje + monto

   return textoInfo + impuesto
}

console.log(impuestoAlMonto(15847));
