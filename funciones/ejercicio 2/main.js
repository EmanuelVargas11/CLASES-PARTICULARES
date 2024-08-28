// crear una funcion que calcule un impuesto, de tal manera que reciba un monto y un porcentaje y 
// devuelva el calculo del impuesto por ejemplo: monto = 100 porcentaje 20%, total = 120

// let monto = 1000

// let ingresoMonto = prompt("ingrese un monto")

// ingresoMonto = parseInt(ingresoMonto)

function impuestoAlMonto(monto, porcentaje) {
   let textoInfo = `a su monto de: $${monto} se le aplicara el ${porcentaje}% de interes. TOTAL:$ `
   let montoYPorcentaje = porcentaje/100 * monto
   let impuesto = montoYPorcentaje + monto

   return textoInfo + impuesto
}

console.log(impuestoAlMonto(10, 0));
