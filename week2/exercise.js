//  Exercise 1: the sum of two numbers
 function addition(a, b){
  return a + b;
}
console.log(addition(3, 2));
 console.log(addition(-3, -6));
 console.log(addition(7, 3));


// Exercise 2: convert minutes to seconds
function convert(minutes){
  return minutes * 60;
}
console.log(convert(5));
console.log(convert(3));
console.log(convert(2));

// Exercixe 3: 
function increase(number) {
  return number + 1;
}
console.log(increase(0));
console.log(increase(9));
console.log(increase(-3));

// Exercise 4

function addup(number){
  let sum= 0;
  for (let count = 1; count <= number; count++) {
    sum = sum + count;
}

  return sum;
}

console.log(addup(4));
console.log(addup(13));
console.log(addup(600));

// Exercise 5:
function charCount(i, j){
let total = 0;
  for (let count = 0; count < j.length; count++){
    if (j[count] === i){
      total = total + 1;
    }

 }

 return total;
}

console.log(charCount('a', 'edabit'));
console.log(charCount('c', 'Chamber of secrets')),
console.log(charCount('b', 'big fat bubble'));
