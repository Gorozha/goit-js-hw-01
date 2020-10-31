/*let subjectsScores = {
  Algebra: 10,
  Art: 10,
  Music: 9,
  Geometry: 12,
  Geography: 7,
};

const subjects = Object.keys(subjectsScores);
const scores = Object.values(subjectsScores);
const entries = Object.entries(subjectsScores);

console.log(subjectsScores); //{Algebra: 10, Art: 10, Music: 9, Geometry: 12, Geography: 7}
console.log(scores); //[10, 10, 9, 12, 7]
console.log(subjects); //["Algebra", "Art", "Music", "Geometry", "Geography"]
console.log(entries); //(5) [Array(2), Array(2), Array(2), Array(2), Array(2)]
//0: (2) ["Algebra", 10]
//1: (2) ["Art", 10]
//2: (2) ["Music", 9]
//3: (2) ["Geometry", 12]
//4: (2) ["Geography", 7]
//length: 5
//__proto__: Array(0)
//
for (const subject of subjects) {
  console.log(subject);
}
//Algebra
// Art
// Music
// Geometry
// Geography

for (const entry of entries) {
  console.log(entry[0] + ' - ' + entry[1]);
  //Algebra - 10
  // Art - 10
  // Music - 9
  // Geometry - 12
  // Geography - 7
  console.log(`${entry[0]} - ${entry[1]}`);
  //Algebra - 10
  // Art - 10
  // Music - 9
  // Geometry - 12
  // Geography - 7
}
for (const key of Keys) {
  console.log(subjectsScores);
}
*/
//задача task-3-05.js
/*function getAllPropValues(array, prop) {
  'use strict';
  let newArray = [];
  for (let item of array) {
    for (let key in item) {
      if (key === prop) {
        newArray.push(item[key]);
      }
    }
  }
  return newArray;
}

// Объекты и ожидаемый результат
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Радар', price: 1280, quantity: 2 },
  { name: 'Радар', price: 1320, quantity: 1 },
  { name: 'Сканер', price: 2700, quantity: 1 },
  { name: 'Сканер', price: 2500, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

console.log(getAllPropValues(products, 'name'));
// ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity'));
// [4, 2, 1, 1, 3, 7, 2]

console.log(getAllPropValues(products, 'category'));
//  []
*/
