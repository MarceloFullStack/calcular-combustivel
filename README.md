let kmPorLitro = 36.13

let distanciaCasaKM= 6.3

let diasTrabalhados = 21

let viagensPorDia = 2 //!por exemplo ida e volta do trabalho

let distanciaTotalPercorrida = (diasTrabalhados * distanciaCasaKM) * viagensPorDia
console.log(distanciaTotalPercorrida);
let combustivelGasto = distanciaTotalPercorrida / kmPorLitro
console.log(combustivelGasto);

let precoCombustivel = 5.50

let custoTotal = combustivelGasto * precoCombustivel

console.log(custoTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))
