let login = prompt("Введите логин", 'логин');

if (login == 'Админ') {

  let password = prompt('Введите пароль', 'пароль');

  if (password == 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (password == '' || password == null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (login == '' || login == null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}