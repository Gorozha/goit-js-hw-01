const userPassword = 'jqueryismyjam';

const ADMIN_PASSWORD = 'jqueryismyjam';

const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
let message;

// Write code under this line
if ((userPassword = 'jqueryismyjam')) {
  message = ACCESS_IS_ALLOWED;
} else if ((userPassword = 'null')) {
  message = CANCELED_BY_USER;
} else if ((userPassword = '123')) {
  message = ACCESS_DENIED;
}
console.log('Добро пожаловать!');
console.log('Отменено пользователем!');
console.log('Доступ запрещен, неверный пароль!');
//если userPassword равно 'jqueryismyjam'
