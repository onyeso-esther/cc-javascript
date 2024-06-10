// function sayHello(name){
//   console.log("Hello " + name);
// }

// sayHello("Esther");
// sayHello("Code campus");
// sayHello("Nigeria");
// sayHello("Esther");
// sayHello("Africa");
// sayHello("Abuja");

// function square(number){
//   let answer = number * number;
//   return answer;
// }

// alert(square(5));
// console.log(square(5));


// Assignment


// create a function.
function greet(name){
  console.log("Hello " + name + '!');
}
greet('Purity');



// How to save a function in a variable.
const myFunction = function (x,y){
  return x + y;
};
console.log(myFunction(5, 3));


// simple arrow function.
const add = (x, y) => x + y;
console.log(add(5, 5));

// implicit return.
const double = x => x * 3;
console.log(double(3));

// How scope applies to functions.
function outer() {
   let x = 10;   //outer scope

   function inner() {
    let y = 20;  // inner scope
    console.log(x); // accesses outer scope variable
   }

   console.log(y); // error, y is not define in outer scope
}

// In this example, the inner function has its own scope, and can access variables
// from the outer function scope, but the outer function cannot access variables 
// declared within the inner function.