/*
Given two numbers, a, b, as inputs, return true if a > b,
return false if a < b, return 0 otherwise.

Bonus 1: If a or b is undefined or not a number, then return -1.
Hint: Chekout typeof() operator at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

*/
function isBigger(a, b) {
	if (a < b){
		console.log(false)
	} else if {
		console.log(true)
	} else {
		console.log(0)
	}
	//if a > b, console.log(true)



	//if a < b, console.log(false)
	
}

function compare(num1, num2, num3) {
	if (num3 > num2 && num1 > num3) {
		return num1 + ' is the biggest number';
	} else if (num2 > num1 && num2 > num3) {
		return num2 + ' is the biggest number';
	} else {
		return num3 + ' is the biggest number';
	}
}
var results = compare(10, 20, 30);
console.log(results);


/**
Examples:

var result = isBigger(3,4);
console.log(result) // false

var result = isBigger(13,4);
console.log(result) // true

var result = isBigger(4.00001,4);
console.log(result) // true

var result = isBigger(4,4);
console.log(result) // 0

var result = isBigger("potato",4);
console.log(result) // -1

var result = isBigger("4",4);
console.log(result) // -1

var result = isBigger(3);
console.log(result) // -1

var result = isBigger();
console.log(result) // -1

**/



