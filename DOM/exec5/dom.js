// function insert_Row() {
//   let row3 = document.getElementById('sampleTable').insertRow(2)
//   let cell1 = row3.insertCell(0)
//   let cell2 = row3.insertCell(1)
//   cell1.innerHTML = 'New Cell1'
//   cell2.innerHTML = 'New Cell2'
// }

function changeContent() {
  rn = window.prompt('Input the Row number(0,1,2)', '0')
  cn = window.prompt('Input the Column number(0,1)', '0')
  content = window.prompt('Input the Cell content')
  let x = document.getElementById('myTable').rows[parseInt(rn)].cells
  x[parseInt(cn, 10)].innerHTML = content
}
