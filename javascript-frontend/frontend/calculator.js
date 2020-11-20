function calculator(firstNumber, secondNumber, operation) {
  let result = 0;
  switch (operation) {
    case 'sum':
      result = firstNumber + secondNumber
      break;
    case 'mul':
      result = firstNumber * secondNumber
      break;
    case 'minus':
      result = firstNumber - secondNumber
      break;
    default:
      result = firstNumber + secondNumber
      break;
  }

  return result
}

let output = calculator(1, 2, 'sum')

console.log(output)


let button = document.getElementById('button1');

window.onload = function () {
 

  let button = document.getElementById('button1');
  
  button.onclick = function () {
    let firstNumber = parseFloat(document.getElementsByName('firstNumber')[0].value)
    let secondNumber = parseFloat(document.getElementsByName('secondNumber')[0].value)
    let operation = document.getElementsByName('operation')[0].value
  

    alert(calculator(firstNumber, secondNumber, operation))
  }

}
