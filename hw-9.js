let user = {
    name: 'Danil',
    age: 19,
    isAdmin: true
}

let info = prompt('Какую информацию хотите узнать о пользователе?');

user['city of residence'] = 'Moscow';

user.age = 10;

delete user['city of residence'];

alert(user[info])