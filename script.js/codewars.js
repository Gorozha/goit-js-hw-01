// function mirror(data) {
//   let sortMasiv = data.sort((a, b) => a - b);
//   console.log(sortMasiv);
//   let newSort = sortMasiv.slice(0, -1);
//   console.log(newSort);
//   let revMasiv = newSort.reverse();
//   console.log(revMasiv);
//   let mainMasiv = sortMasiv.concat(revMasiv);
//   console.log(mainMasiv);
// }
// const values = [1, 8, -40, -10, 3];
// console.log(mirror(values));

//перебор чисел
// const repeatLog = function (n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// };

//При таком подходе мы можем выполнять фильтрацию массива по критерию используя всего одну функцию для перебора,
//  а операции над каждым элементом будут зависеть от callback - функции.

// const filter = function (array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     const passed = test(element);

//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits); // массив с объектами apples и bananas

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithQuantity); // массив с объектами apples и grapes

//-----------------является ли строка палиндромом--------------------------
/*function palindrom(str) {
  //строку в нижний регистр
  str = str.toLowerCase();
  return str == str.split('').reverse().join(''); // такая запись короче

  //такая запись длиннее
  //строку в массив
  // let str2 = str.split(''); //разбивка на массив
  // str2 = str2.reverse(); //развернуть массив
  // str2 = str2.join(''); //массив обратно в строку
  // if (str === str2) return true;
  // else return false;

  // return str2;
}

console.log(palindrom('abba'));
*/

//удалить все гласные из коммент. троллей
// function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, '');
// }
// console.log(disemvowel('shche ne vmerla Ukraini ni slava ni volya '));
//правильно

//перечисление всех натурю.чис. ниже 10
// function solution(number) {
//   //number = 10;
//   let test = 0;
//   for (let i = 0; i <= 10; i += 1) {}
//   if (test === test / 3 || test === test / 5) {
//     number.push(test[0]);
//   }

//   return test;
// }

//ключевое слово THIS
// const todos = {
//   list: [],
//   add(todo) {
//     this.list.push(todo);
//     console.log(`${todo} added!`);
//   },
//   print() {
//     for (const todo of this.list) {
//       console.log(todo);
//     }
//   },
// };

// h/w 3/3
// const isUniq = (element, index, arr) => arr.indexOf(element) === index;
// const isEven = element => element % 2 === 0;

// function filterArray(array, cb) {
//   'use strict';
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//     // Write code under this line
//     cb(element, index, array) ? numbers.push(element) : false;
//   }
//   return numbers;
// }

// const arr = [1, 2, 3, 4, 5, 1, 2, 5];

// console.log(filterArray(arr, isUniq));
// // [1, 2, 3, 4, 5]

// console.log(filterArray(arr, isEven));
// // [2, 4, 2]

///h/w 4/3
// const add = (accum, element) => accum + element;
// const mult = (accum, element) => accum * element;
// const sub = (accum, element) => accum - element;

// function reduceArray(array, cb, initial) {
//   'use strict';
//   let i;
//   let accum;
//   if (arguments.length >= 3) {
//     accum = initial;
//     i = 0;
//   }
//   if (arguments.length === 2) {
//     accum = array[0];
//     i = 1;
//   }
//   for (i; i < array.length; i += 1) {
//     const element = array[i];
//     // Write code under this line
//     accum = cb(accum, element);
//   }
//   return accum;
// }

// const arr = [1, 2, 3, 4, 5];

// console.log(reduceArray(arr, add)); // 15
// console.log(reduceArray(arr, add, 10)); // 25

// console.log(reduceArray(arr, mult)); // 120
// console.log(reduceArray(arr, mult, 10)); // 1200

// console.log(reduceArray(arr, sub)); // -13
// console.log(reduceArray(arr, sub, 10)); // -5

//h/w 5/3
// const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     this.discount = value; // Write code in this line
//   },
//   showOrders() {
//     this.return orders; // Write code in this line
//   },
//   addOrder(cost, order) {
//     this.balance -= cost; // Write code in this line
//     this.orders.push(order); // Write code in this line
//   },
// };
// const copyAccount =  Object.assign({},account);
// copyAccount.orders = [...account.orders];
// //копируем для автотестов ссылочные типы

// //account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.log(account.showOrders());
// // ['order-1', 'order-2', 'order-3']

// //account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000

// console.log(account.showOrders());
// ['order-1', 'order-2', 'order-3', 'order-4']

// h/w 5/5
/*const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    this.items.push(itemName);
    return `Adding ${itemName} to inventory`;
  },
  remove(itemName) {
    this.items = this.items.filter(item => item !== itemName);
    return `Removing ${itemName} from inventory`;
  },
};

const invokeInventoryAction = function (itemName, action) {
  const act = action(itemName);
  const msg = `Invoking action on ${itemName}`;
  return { act, msg };
};

const invokeAdd = invokeInventoryAction(
  'Medkit',
  inventory.add.bind(inventory), // Write code in this line
);
const arrayAdd = [...inventory.items];

console.log(invokeAdd);
//{ act: 'Adding Medkit to inventory', msg: 'Invoking action on Medkit' }

console.log(arrayAdd);
// ['Knife', 'Gas mask', 'Medkit']

const invokeRemove = invokeInventoryAction(
  'Gas mask',
  inventory.remove.bind(inventory), // Write code in this line
);

const arrayRemove = [...inventory.items];

console.log(invokeRemove);
//{ act: 'Removing Gas mask from inventory', msg: 'Invoking action on Gas mask' }

console.log(arrayRemove);
// ['Knife', 'Medkit']
*/

//mod4 zan7 call-back
/*const x = 1;
const y = function () {};

console.log(function () {}); // а можно просто(y)
*/

/*const fnA = function () {
  console.log('hello');
};
const fnB = fnA;
console.log(`fnB===fnA: `, fnB === fnA);//передача ссылки
*/

/*const greet = function (name) {
  console.log(`Hello ${name}`);
};

const greetWithName = function (callback) {
  const name = 'Mango';

  console.log(callback);
  callback(name);
};

greetWithName(greet); //передаю ссылку на фун-цию (greet)
*/

//лексическое окружение
// const x = 10;

// const y = 20;
// const foo = function (z) {
//   const x = 100;

//   return x + y + z;
// };

// console.log(foo(30));

//замыкания----------------------

// /*
//  *Global env
//  *Record: {}
//  *Parent: null
//  */
// //Environment: Global env
// const foo = function () {
//   /*
//    *Foo env
//    *Record: {}
//    *Parent: Global env
//    */
//   const x = 5;
//   /*
//    *Foo env
//    *Record: {x: 5}
//    *Parent: Global env
//    */
//   //Environment: Foo env
//   return function () {
//     /*Anon env
//      *Record: {
//      *Parent: Foo env
//      */
//     console.log(x);
//   };
// };

// /*
//  *Global env
//  *Record: {foo: f}
//  *Parent: null
//  */

// const outerFn = foo();
// /*
//  *Global env
//  *Record: {foo: f, outerFn: f}
//  *Parent: null
//  */

// outerFn(5);
//-------------------------------------------------------

//поовар
/*const makeDish = function (sheffName, dish) {
  console.log(`${sheffName} готовит ${dish}`);
};

makeDish('Mango', 'пирожок');
makeDish('Mango', 'омлет');
makeDish('Mango', 'чай');

makeDish('Poly', 'котлеты');
makeDish('Poly', 'супик');
makeDish('Poly', 'кофе');
const makeSheff = function (name) {
  console.log(name);

  return function (dish) {
    console.log(`${name} готовит ${dish}`);
  };
};

const mango = makeSheff('Mango');
const poly = makeSheff('Poly');
*/

//глубокое замыкание-----------------------------

/*const fnA = function (a) {
  return function fnB(b) {
    return function fnC(c) {
      console.log(a, b, c);
    };
  };
};

const res = fnA(5)(10);

res(15);

console.dir(res);
*/
// function testFactorial(a) {
//   var x;
//   for (let i = 1; i <= 5; i = +1) {
//     console.log(testFactorial);
//   }

//return testFactorial;
//}
