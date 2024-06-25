// Array within an array
let num = [[1,2], [3,5]];
// console.log(num[1][1]);

// Array within an object
let sample = [
  {name: "Jamiu", id: 12, school: 'Unilag'},
  {name: "jamiu", id: 20, school: ['OAU', 'Uniben', 'BUK']},
  {
    name: "Jamiu",
    id: 46,
    school: [
      {
        North: ['BUK', 'ABU', 'Unimaid', 'FUTM'],
        West: ['Unilag', 'OAU', 'UI', 'Lautech'],
        East: ['UNN', 'EBSU', 'ABSU', 'Unizik'],
        South: ['Uniport', 'UniCal', 'UniUyo', 'Delsu']

      }
    ]
  }
]

//console.log(sample[1].school[1]);
// console.log(sample[2].school[0].North[1]);

// console.log(sample[2].school[0].East[3]);

// console.log(sample[2].school[0].East[1]);

// console.log(sample[2].school[0].South[1]);
// console.log(sample[2].school[0].North[3]);

//To display on console
let input = document.getElementsByTagName('input');
function displayValue(){
 console.log(input[0].value); // returns the value of the first input field
}


// To display on browser(chrom)
// let name = document.getElementById('name');
// function displayValue(){
// name.innerHTML = input[0].value;

// }
// displayValue()

