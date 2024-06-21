let heading = document.getElementById('main-heading')
heading.innerHTML = 'New topic';
// console.log(heading.innerHTML);

let paragraphs = document.getElementsByTagName('p')
let sub = document.getElementsByClassName('sub-heading');
sub[1].style.color = 'red';
// console.log(paragraph);

// let sub = document.getElementsByClassName('sub-heading');
// console.log(sub);
// console.log([1]); 
//  console.log(sub[2].innerHTML);

 for (let i = 0; i < paragraphs.length; i++){
  if (i === paragraphs.length - 1){
    paragraphs[i].innerHTML = 'This thing hard sha';
  } else {
  paragraphs[i].innerHTML = 'I sabi Javascript';
  }
 }

 

 




 





