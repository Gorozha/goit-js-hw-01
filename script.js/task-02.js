//const total = 100; //кол.товара
//const ordered = 20; //заказ
//if (total < ordered) {
//console.log(`"На складе недостаточно товара!"`);
//} else {
//  console.log(`"Заказ оформлен, с вами свяжется менеджер."`);
//}
const invoice = 100;
const stock = 100;

// Write code under this line
const message =
  stock < invoice
    ? 'На складе недостаточно товаров!'
    : 'Заказ оформлен, с вами свяжется менеджер';

console.log(message);
