// Write code under this line
// const Account = function (login, email) {
//   this.login = login;
//   this.email = email;
// };

// console.log(typeof Account.prototype.getInfo);
// 'function'

//const mango = new Account('Mangozedog', 'mango@dog.woof');
//console.log(mango.getInfo());
// 'login : Mangozedog, email: mango@dog.woof'

//const poly = new Account('Poly', 'poly@mail.com');
//console.log(poly.getInfo());
// 'login : Poly, email: poly@mail.com'

//conspect lesson modul 5

/*const name1 = 'Sandra';
const name2 = 'Ivan';
let Name;
const age = 30;
const skills = ['html', 'css', 'js'];
const hobbies = {
  a: 'ggg',
  b: 'bbb',
  c: 'dad',
};
function togetName() {
  return name;
}
console.log(togetName(name1));
console.log(togetName(name2));

const user = {
  age: 30,
  skills: ['html', 'css', 'js'],
  hobbies: {
      a: 'ggg',
      b: 'bbb',
      c:'dad'
    }
  
  getName() {
      console.log(this.name)
  }
};
user.getName()
*/
// функция конструктор
/*
const User = function () {
  (this.name = 'd'), (this.age = 1), (this.phone = 'd'), (this.email = 'd');
};
console.dir(Function);

const myUser = new User();
console.log(myUser);

const func = function alpha(a, b, c) {
  console.log(`${this.name}, fffffffff, ${a}gggggg, ${b}`);
};
func.call(myUser, 33, 22, 11);
func.apply(myUser, [33, 22, 11]);
*/
///massiv------------------------------------------
/*let totalValue = [1, 'w', 33, '33', true, 'false'];
let totalallValue = [45, 'acc', 6, 'you', 55];
let allValue = totalValue.concat(totalallValue);

console.log(allValue.length);
//console.log((allValue = 7));
console.log(allValue.filter(Number));
console.log(allValue.filter(toString));
console.log(allValue);
console.log(allValue.reverse());
console.log(allValue.sort());
*/

//подсчет суммы (15)
/*var myNumbers = [2, 4, 2, 7];
var total = 0;
for (let oneNumber in myNumbers) {
  total = total + myNumbers[oneNumber];
}
console.log(total);
*/

//ссылка на аргументы в функции через имена параметров-------------------
/*function myTacos(meat, produce) {
  console.log(meat);
  console.log(produce);
}

myTacos('beef', 'onions');//передача аргументов 
*/

//передача аргументов по значению----------------------------------------
/*function addToMyNumbers(number1, number2) {
  number1++;
  number2++;
  console.log('Значение number 1 в функции: ' + number1);
  console.log('Значение number 2 в функции: ' + number2);
}

let number1 = 3;
let number2 = 12;

addToMyNumbers(number1, number2);
console.log('Исходное значение number1: ' + number1);
console.log('Исходное значение number2: ' + number2);
*/

//задание значений по умолчанию для аргументов----------------------------
/*function welcome(yourName) {
  if (typeof yourName === 'undefined') {
    yourName = 'friend';
  }
}
*/
//задание значений по умолчанию для аргументов в заголовке функции----------------------
/*function welcome(yourName = 'friend') {
  console.log('Hello,' + yourName);
}
*/
//Использование объекта arguments для определенияфункции, выводящей приветственное сообщение
/*function flexibleWelcome() {
  var welcome = 'Добро  пожаловать,';
  for (let i = 0; i < arguments.length; i++) {
    welcome = welcome + arguments[i] + '';
  }
  return welcome;
}
document.write(
  flexibleWelcome('Christopher', 'James', 'Phoenix', 'Minnick ') + '< br> ',
);
document.write(flexibleWelcome('Eva', 'Ann', 'Holland') + '< br> ');
*/

//Рекурсивная функция, вычисляющая квадратычисел до тех пор, пока число не станет большим 1 000 000__
/*function squareltUp(startingNumber) {
  square = startingNumber * startingNumber;
  if (squareltUp > 1000000) {
    console.log(square);
  } else {
    squareltUp(square);
  }
}
*/
//
/*function testFactorial(a) {
  var x;
  x = 1;
  for (let i = 1; i <= 7; i += 1) {
    x = x * a;
    return x;
  }
}
*/

//zanyatie--------------------------------------
/*const user = {
  name: 'Sandra',
  email: 'sandra@gmail.com',
  phone: '12345678',
  password: 'qwe123',
};
let a = 'Dasha';
let b = 'dsss@hh.com';
let c = '43566544343';
let d = 'dddddd444';

class User {
  constructor(a = 'user', b, c = '', d) {
    this.name = a;
    this.email = b;
    this.phone = c;
    this.password = d;
  }
  toShouName() {
    return this.name;
  }
}
*/

//
// домашка №5 упр1
/*const Account = function (login, email) {
  this.login = login;
  this.email = email;
  //this.getInfo = function () { // cпособ первый ресурсоемкий
  //return mango;
  //};
};
Account.prototype.getInfo = function getInfo() {
  return `login : ${this.login}, email: ${this.email}`;
};

console.log(typeof Account.prototype.getInfo);
// 'function'
const mango = new Account('Mangozedog', 'mango@dog.woof');
console.log(mango.getInfo());
// 'login : Mangozedog, email: mango@dog.woof'

const poly = new Account('Poly', 'poly@mail.com');
console.log(poly.getInfo());
// 'login : Poly, email: poly@mail.com'
*/

//mod5, ex10 classes
/*const Hero = function (name, xp) {
  this.name = name;
  this.xp = xp;
};

Hero.prototype.changeName = function (name) {
  this.name = name;
};

const mango = new Hero('Mango', 1000);

console.log(mango);
*/

//h/w 5-2------------------------------------------------
// Write code under this line
/*class User {
  constructor(name, age, followers) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
    return `User ${this.name} is ${this.age} years old and has ${this.followers}`;
  }
}
console.log(typeof User);
// 'function'

const mango = new User('Mango', 2, 20);
console.log(mango.getInfo());
// 'User Mango is 2 years old and has 20 followers'

console.log(typeof mango.getInfo);
// 'function'

const poly = new User('Poly', 3, 17);
console.log(poly.getInfo());
*/

//h/w 5-3------------------------------------------------

/*class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }

  addItems(item) {
    return this;
  }
}
console.log(typeof Storage);
// 'function'

const goods = ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор'];

const storage = new Storage(goods);

console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
] */

//storage.addItem('Дроид');
//console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

//storage.removeItem('Пролонгер');
//console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

// h/w 5-4-----------------------------------

/*class StringBuilder {
  constructor(value) {
    this._value = value;
    //this.str = str;
  }

  get value() {
    return this._value;
  }

  append(str) {
    return (this._value = this._value + str);
  }

  prepend(str) {
    return (this._value = str + this._value);
  }

  pad(str) {
    this.append(str);
    this.prepend(str);
  }
}

console.log(typeof StringBuilder);
// 'function'

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

//builder.prepend('^');
console.log(builder.value); // '^.^'

//builder.pad('=');
console.log(builder.value); // '=^.^=
*/
// h/w 5-5------------------------------------------
/*class Car {
 // Write code under this line
  static getSpecs(car){
    return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`;
  
    
  constructor(maxSpeed, speed = 0, isOn = false, distance = 0, price ) {
    this.maxSpeed = maxSpeed;
    this.speed = speed;
    this.isOn = isOn;
    this.distance = distance;
    this.price = price;
    }
    
  get price() {
    return this._price;
    }
    
    set price(value) {
      this.price = value;
  }
  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  accelerate  (value) {
    this.speed = value + this.speed;
    if(this.speed < this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
  }
  decelerate(value) {
    this.speed = this.speed - value;
    if(this.speed < 0) {
      this.speed = 0;
    }
  }
  drive(hours) {
    if(this.isOn) {
      this.distance = this.distance + hours * this.speed;
    }
  }
}
 
const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

 console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

 console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

 console.log(mustang.price); // 2000
mustang.price = 4000;
 console.log(mustang.price); // 4000
*/

//
//[JavaScript#25] Занятие 11. Перебирающие методы массивов часть 1 (27/10/2020)----------------------------
/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]); // перебор массива
}

numbers.forEach(num => console.log(num));// перебор массива

numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));// индекс, значение
*/
//-------------------------------------------------------------------------------------------------------
//Модуль 6. Занятие 12. Перебирающие методы массивов часть 2
/*const numbers = [5, 10, 15, 20, 25];

//const total = numbers.reduce(function (accumulator, number, index, array) {
const total = numbers.reduce(function (accumulator, number) {
  //console.log(`accumulator: `, accumulator);
  //console.log(number);
  //console.log(index);
  //console.log(array);
  return accumulator + number;
}, 50);
console.log(total);
*/
//перебор с помощью reduce-----------------------------------
/*const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
  kiwi: 324,
};
const values = Object.values(salary);
console.log(values);//[100, 50, 150, 324]
//const totalSalary = values.reduce(function (accum, value) {
  const totalSalary = Object.values(salary).reduce(function(accum, value) {
  return accum + value;
});
console.log(totalSalary);//624
*/

//----------------------------
/*const obj = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(obj.a); //1
*/
//
