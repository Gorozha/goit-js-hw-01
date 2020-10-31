/*function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
  //return false;
}

console.log(isTriangle(1, 2, 3));
console.log(isTriangle(7, 2, 2));
*/

//функция обратного вызова. При наступлении какогото события бутет вызвана эта ф-ция
// const greet = function (name) {
//   console.log(`Hello ${name}`);
// };

// const greetWithName = function (callback) {
//   const name = 'Mango';

//   console.log(callback);
//   callback(name);
// };

// greetWithName(greet);

//--------------
// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     this.color = color;
//   };
//   return changeColor;
// };

// const hat = {
//   color: 'blue',
//   changeColor: makeChangeColor(),
// };
// hat.changeColor('orange');
// console.log('orange');
//----------------------------

//метод call
// const showTag = function (arg1, arg2, arg3) {
//   console.log(arg1, arg2, arg3);
//   console.log('this: ', this);
//   console.log('this.tag: ', this.tag);
// };

// const mango = {
//   tag: 'Mango',
// };

// const poly = {
//   tag: 'Poly',
// };

// showTag.call(mango);

// showTag.call(poly, 1, 2, 3);
// showTag.apply(poly, [1, 2, 3]); // тоже самое,только нужен массив
