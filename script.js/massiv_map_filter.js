//----map---
/*let a = [4, 5, 12, 200, 1, 0, -2];

let b = a.map(function (item, index, array) {
  //console.log(item); //все элем.по очереди
  //console.log(index); //по порядковому номеру индекса
  //return item; //копия мас.(а)
  return item * 5; //масс.умнож.на 5
}); //новый массив (фун.будет прим к каждому элем. мас.)

console.log(b); //indefened
*/
//--------------
//тоже стрелочной функцией
/*let a = [5, 66, 12, 0, -3, -4, 11];
let b = a.map((item, index) => item * 6);

console.log(b); // (7) [30, 396, 72, 0, -18, -24, 66]
*/
//----filter---
/*let a = [5, 66, 12, 0, -3, -4, 11];
let b = a.filter(function (item, index) {
  if (item % 2 === 0) {
    //пусть в масс.(б) попадут только четные элем. масс.(а)

    return true; //massiv_map_filter(4) [66, 12, 0, -4]
  }
  //return true;//если фолс- пустой массив
});
console.log(b); //копия масс.(а)
// оба метода не модифицируют исходный массив
*/
//---push---добавляет в конец массива
/*let a = [77, 2, 4, 12, 22];
console.log(a); //(5) [77, 2, 4, 12, 22]
a[0] = 44;
console.log(a); // (5) [44, 2, 4, 12, 22] замена 0 индекса 77 на 44
a[a.length] = 555;
console.log(a); //(6) [44, 2, 4, 12, 22, 555] в конец массива

a.push(123);
console.log(a); // (7) [44, 2, 4, 12, 22, 555, 123] в конец массива
a.push(13, -67);
console.log(a); //(9) [44, 2, 4, 12, 22, 555, 123, 13, -67] в конец массива

function hello(b) {
  return a.push(b);
}
*/
//---pop---удаляет с конца массива
/*let a = [77, 2, 4, 12, 22];
a.pop();
console.log(a); // (4) [77, 2, 4, 12]
console.log(a.pop()); //12; возвращает удаленный элем.

const b = [3];
console.log(b); //proverka
console.log(b.pop()); //udaleniye poslednego elem
console.log(b); //proverka -rezult pustoy massiv []
*/
