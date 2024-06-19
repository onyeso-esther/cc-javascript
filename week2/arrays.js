 const cars = [
 'mercedes',
 'BMW',
 'Toyota',
 'Honda',
 'Nissan',
 'Peugout',
 'Audi',
]

console.log(cars)

 cars[7] = 'Hyundai';
cars[5] = 'ford';


// to add new elements
cars.push('Rolls Royce');
cars.push('porsche');
console.log(cars);

// to remove the last element
cars.pop();
console.log(cars);

// to add the element back
console.log(cars.pop());

// to know the lenght of the elements
console.log(cars.lenght)

// to remove the first element
console.log(cars.shift())
