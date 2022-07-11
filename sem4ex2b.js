/*
Instructions
- Create a function called calculator that has 3 arguments: value1, operator and value2
- By using a switch statement, ask for each case to find out what's the operator being passed to the function, then set the result of that operation by using value1 and value2
*/
//Add you code here

function calculator(value1, operator, value2)
  {
    let valor1 = parseInt(value1);
    let valor2 = parseInt(value2);
    let operador = parseInt(operator);
    let resultado = valor1 + operator + valor2;
    //console.log(valor1);
    //console.log(valor2);
   // console.log(operador);
    return (eval(resultado));
  }

//uncomment next lines one by one, then check the console for results
console.log(calculator(1, '+', 1))
console.log(calculator(2, '-', 1))
console.log(calculator(2, '*', 2))
console.log(calculator(10, '/', 5))
console.log(calculator(5, '/', 0))

//don't change this line
if (typeof module !== "undefined") {
  module.exports = {
    calculator,
  };
}
