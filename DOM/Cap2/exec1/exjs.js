let whereau = document.getElementById('where-are-you')
whereau.parentNode.style.color = 'red'
whereau.firstElementChild.innerHTML = 'Onde você está?'

let parent = document.getElementById('parent')
console.log(parent.firstElementChild)
console.log(whereau.previousElementSibling)
console.log(whereau.nextSibling)
