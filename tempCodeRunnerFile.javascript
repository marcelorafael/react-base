let numeros = [2, 3, 6];
let dobro = []

// for (let i = 0; i < numeros.length; i++) {
//   dobro.push(numeros[i] * 2)
// }

dobro = numeros.map(numero => {
  return numero * 2
})

console.log(dobro)