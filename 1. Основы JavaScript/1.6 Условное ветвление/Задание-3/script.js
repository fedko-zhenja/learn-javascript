let login = prompt('Введите Ваш логин', 'логин');
let message = (login == 'Сотрудник') ? 'Привет!' :
  (login == 'Директор') ? 'Здравствуйте!' :
  'Не существует' ;
  alert(message);
