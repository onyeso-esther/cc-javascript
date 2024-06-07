let number = Number(prompt('Type in number'));

for (let count = number; count >= 1; count--){
  console.log(number + ' / ' + count + ' = ' + Math.floor((number / count)) + ' r ' + (number % count))
  if (number != 1 && number % count === 0){
   console.log(number + ' is not a prime number');
   break;
  } else 
  if (count === 1){
    console.log(number + ' it is a prime number')
  }
}


