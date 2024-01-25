// parentElement: Retorna o elemento-pai. Nesse caso, se o nó-pai não for um elemento HTML, essa propriedade retornará null.

// childNodes: Retorna um NodeList com todos os nós filhos.

// children: Retorna um HTMLCollection com todos os elementos filhos.

// firstElementChild: Retorna o primeiro elemento filho.

// lastElementChild: Retorna o último elemento filho.

// nextElementSibling: Retorna o próximo elemento.

// previousElementSibling: Retorna o elemento anterior.

let ingredients = [
  'Feijão cozido e escorrido',
  'Bacon picado',
  'Linguiça calabresa picada',
  'Azeite',
  'Cebola picada',
  'Alho picado',
  'Caldo de bacon',
  'Ovos fritos e picados',
  'Farinha de mandioca crua',
  'Cheiro-verde picado',
  'Sal e pimenta a gosto'
]

let ingredientsList = document.querySelector('.ingredients-list')

for (let i = 0; i < ingredients.length; i++) {
  // let li = document.createElement('li')
  // li.innerHTML = ingredients[i]
  // ingredientsList.appendChild(li)
  // let ingredient = ingredients[i] ==> isso é disnecessário
  let ingredientList = document.createElement('li')
  ingredientList.innerHTML = ingredients[i]
  ingredientsList.className = 'ingredients'
  ingredientsList.appendChild(ingredientList)
}

let ingredientListItems = document.querySelectorAll('.ingredients li')
for (let i = 0; i < ingredientListItems.length; i++) {
  let element = ingredientListItems[i]
  if (element.innerText.includes('Bacon picado')) {
    ingredientsList.removeChild(element)
  }
}
