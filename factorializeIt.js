//Challenge time! 
//Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n. Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
//var num = 2;
// num = num * 3
// num = num * 4

// Check out Arithmetic Operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

function factorializeIt(num) {
  let factorialized = 1
  for (let i = 1; i <= num; i++) {
    factorialized = factorialized * i;
}
  
  return factorialized
}

factorializeIt(5);
var answer = factorializeIt(5);
factorializeIt(9087);
factorializeIt(3);