let pai = document.getElementById('pai')
let filho = document.createElement('section')
filho.className = 'filhoAdicionado'
filho.innerHTML = 'Filho'
pai.insertBefore(filho, pai.children[2])

let ondeVcEsta = document.getElementById('elementoOndeVoceEsta')
let filhoOndeVcEsta = document.createElement('section')
filhoOndeVcEsta.className = 'filhoAdicionadoOndeEsta'
filhoOndeVcEsta.innerHTML = 'Filho do elemento onde você está'
ondeVcEsta.appendChild(filhoOndeVcEsta)

let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
let filhoDoFilhoDoFilho = document.createElement('section')
filhoDoFilhoDoFilho.className = 'filhoAdicionadoDoFilho'
filhoDoFilhoDoFilho.innerHTML = 'Filho do filho do filho'
primeiroFilhoDoFilho.appendChild(filhoDoFilhoDoFilho)

let pesquisa =
  filhoDoFilhoDoFilho.parentElement.parentElement.nextElementSibling
    .nextElementSibling
console.log(pesquisa)
