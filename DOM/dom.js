// let pilotosF1Atual = document.getElementsByClassName('piloto-f1-atual')

// for (let i = 0; i < pilotosF1Atual.length; i++) {
//   pilotosF1Atual[i].innerText = 'Lewis Hamilton'
// }

// document.getElementsByTagName('p').innerText = 'Lewis Hamilton'
// getElementsByTagName retorna um array de elementos
// getElementsByClassName retorna um array de elementos
// getElementById retorna um elemento

document.querySelector('p')
// para 1 elemento apenas
// # para id e . para class e sem nada para tag

document.querySelectorAll('p')
// para vários elementos
// # para id e . para class e sem nada para tag

document.querySelectorAll('.pilotos-sem-titulo .piloto-f1-atual')[0].innerText =
  'Lewis Hamilton'
