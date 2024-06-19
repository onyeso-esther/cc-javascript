//  question 1.
function divisible(n){
  if (n % 100 === 0) {
    return true;
    } else {
      return false;
}
}
// console.log(divisible(1));
// console.log(divisible(1000));
// console.log(divisible(100));



// question 2.
function fiftyThirtyTwenty(income) {
  const needs = income * (50/100);
  const wants = income * (30/100);
  const savings = income * (20/100);
  return {
    needs,
    wants, 
    savings
    };
}
// console.log(fiftyThirtyTwenty(10000));  
// console.log(fiftyThirtyTwenty(50000));
// console.log(fiftyThirtyTwenty(13450));                  

//question 3.
function makesTen(a, b) {
  if (a === 10 || b === 10 || a + b === 10) {
    return true;
  } else {
    return false;
  } 
}
// console.log(makesTen(9, 10));
// console.log(makesTen(9, 9));
// console.log(makesTen(1, 9));

// minMax
function minMax(array){
  let smallest = math.min(...array);
  let largest = math.max(...array);

  return [smallest, largest];
}
// console.log(minMax([1, 2, 3, 4, 5]));


//emotify the sentence
function emotify(sentence){
  sentence = sentence + ' ';
  let word = "";
  let newSentence = '';
  for (let count = 0; count < sentence.length; count++){
    if (sentence[count] === ' '){
      //console.log(word);
      if (word === "smile"){
        word = ':D';
      }else if (word === 'grin'){
        word = ':)';
      }else if (word === 'sad'){
        word = ':(';
      }else if (word === 'mad'){
      word = ':p';
      }
      newSentence = newSentence + word + ' ';
      word = '';
    } else {
      word = word + sentence[count];
    }
  }
   console.log(newSentence);
}
emotify("make me smile");

//how many vowels
function countVowels(string){
  let noOfVowels = 0;
  for (let count = 0; count < string.length; count++){
    if (string[count] === 'a' || string[count] === 'e' || string[count]=== 'i'
     || string[count] === '0' || string[count] ==='u'){
      noOfVowels++;
      // console.log(string[count]);
     }
  }
   return noOfVowels; 
}
console.log(countVowels('celebration'));

// Reverse the case
function reverseCase(string){
  let newString = '';
  for (let count = 0; count < string.length; count++){
    if (string[count] === string[count].toUpperCase()){
      newString += string[count].toLowerCase();
      } else {
        newString += string[count].toUpperCase();
  }
}
return newString;
}

console.log(reverseCase('Happy Birthday'));
console.log(reverseCase('MANY THANKS'));
console.log(reverseCase('sPOnTanNeOuS'));



 