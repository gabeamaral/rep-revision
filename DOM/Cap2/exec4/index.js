// Exercicio 1 e 10
let body = document.querySelector('body')
let h1 = document.createElement('h1')
h1.innerText = 'TrybeTrip - Agência de Viagens'
h1.className = 'title'
body.appendChild(h1)

// Exercicio 2
let main = document.createElement('main')
main.className = 'main-content'
body.appendChild(main)

// Exercicio 3
let section = document.createElement('section')
section.className = 'center-content'
main.appendChild(section)

// Exercicio 4
let p = document.createElement('p')
p.innerText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl.'
section.appendChild(p)

// Exercicio 5
let leftContent = document.createElement('section')
leftContent.className = 'left-content'
main.appendChild(leftContent)

// Exercicio 6
let rightContent = document.createElement('section')
rightContent.className = 'right-content'
main.appendChild(rightContent)

// Exercicio 7
let img = document.createElement('img')
img.className = 'small-image'
img.src = 'https://picsum.photos/200'
leftContent.appendChild(img)

// Exercicio 8
let lista = [
  'Um',
  'Dois',
  'Três',
  'Quatro',
  'Cinco',
  'Seis',
  'Sete',
  'Oito',
  'Nove',
  'Dez'
]

let ul = document.createElement('ul')
for (let i = 0; i < lista.length; i++) {
  let li = document.createElement('li')
  li.innerText = lista[i]
  ul.appendChild(li)
}
rightContent.appendChild(ul)

// Exercicio 9 e 11
for (let i = 0; i < 3; i++) {
  let h3 = document.createElement('h3')
  h3.innerText = 'Trybe Trip'
  h3.className = 'description'
  section.appendChild(h3)
}

// Exercicio 12
main.removeChild(leftContent)

// Exercicio 13
rightContent.style.marginRight = 'auto'
rightContent.style.textAlign = 'center'

// Exercicio 14
main.style.backgroundColor = 'green'

// Exercicio 15
// for (let i = lista.length - 1; i >= 0; i--) {
//   if (lista[i].innerText === 'Nove' || lista[i].innerText === 'Dez') {
//     lista[i].parentNode.removeChild(lista[i])
//   }
// }
ul.lastChild.remove()
ul.lastChild.remove()
