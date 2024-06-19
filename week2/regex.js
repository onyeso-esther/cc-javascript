let text ='visit W3School';
let n = text.search('W3School');
// console.log(n);

let string = 'make me smile and we can all smile together';
// let word = string.search('smile');
let word = string.replace(/[abc]/g, ':D');
console.log(word);

function isLastCharactertN(string){
  ig(string[string.length -1] === 'n',) {
    return true;
  }
  else{
    return false;
  }
}

console.log(isLastCharactertN)