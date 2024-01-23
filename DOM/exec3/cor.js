function set_background() {
  let paras = document.getElementsByTagName('p')

  for (let i = 0; i < paras.length; i++) {
    paras[i].style.backgroundColor = 'rgb(0, 0, 0)'
    paras[i].style.color = 'rgb(255, 255, 255)'
  }
}

// Gabarito ==>
// function set_background() {
//   docBody = document.getElementsByTagName('body')[0]
//   //Get all the p elements that are descendants of the body
//   myBodyElements = docBody.getElementsByTagName('p')
//   // get the first p elements
//   myp1 = myBodyElements[0]
//   myp1.style.background = 'rgb(255,0,0)'
//   // get the second p elements
//   myp2 = myBodyElements[1]
//   myp2.style.background = 'rgb(255,255,0)'
// }
