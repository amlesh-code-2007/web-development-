/* create a faulty calculator using javaScript 

This faulty calculator does following:
1. It takes two input number as input drom the user.
2. It perfrom wrong operation as follow:

+ ---> -
* ---> +
- ---> /
/ ---> **

It perfrom wrong operation 10% of the times

*/

let random = Math.random()
console.log(random)

let a = prompt("Enter first number: ")
let c = prompt("Enter operation: ")
let b = prompt("Enter second number: ")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}


if (random > 0.1) {
    // perfrom correct calculation
      console.log(`The result is ${a} ${c} ${b}`)
      alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else {
    // perfrom wrong calculation 
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}