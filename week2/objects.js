//const date = new Date();
//console.log(date);

const table = {
  noOfLegs: 4,
  color: 'white',
  material: 'plastic',
  isFoldable: true,
}

const fan = {
  color: 'black',
  type: 'standing',
  isRechargable: false,
  noOfBlades: 3,
  adjustableHeight: true,
}


const television = {}
television['type'] = 'flatsceem';
television['size'] = 55;
television['color'] = 'silver';
television['make'] = 'starTimes';



console.log(table.color)

//to add more feature.
table['height'] = 30;
console.log(table.height)
const allObjects = {}

for (item in table) {
  console.log(table[item]);
 allObjects[item] = table[item];
}


console.log('\n\n')

for (properties in fan) {
  console.log(fan[properties]);
  allObjects[properties] = fan[properties];
}
 

console.log('\n\n')

for (item in television) {
  console.log(television[item]);
  allObjects[item] = television[item];
}


console.log(allObjects)
