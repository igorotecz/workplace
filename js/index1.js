// let topSpeed;
// let distance;
// let login;
// let isOnline;
// let isAdmin;
// topSpeed = 160;
// distance = 617.54;
// login = "mango935";
// isOnline = true;
// isAdmin = false;
// console.log(topSpeed);
// console.log(distance);
// console.log(login);
// console.log(isOnline);
// console.log(isAdmin);

// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);

// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits.`;
// console.log(message);

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFree = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFree;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFree} credits) is included in total price.`;
// console.log(message);

// function sayHi() {
//     console.log("Hello, this is my first function!")
// }
// sayHi();

// function add(a, b, c) {
//         return (a + b + c);
// }
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// function showname() {
//     console.log(`Вася`);
// }
// setTimeout(showname, 500);
// console.log('Коля');

// showMessage();
// function showMessage() {
//    console.log(`Message`);
// }


// let showMessages = function () {
//     console.log(`Message_2`);
// }
// showMessages();

// let showMessagenext = (text, name) => text + `, ` + name + `!`;
// console.log(showMessagenext('Hello', 'Vasya'));

// function showNamber(num) {
//     console.log(num);
//     if (num<10) {
//       setTimeout(showNamber, 1000, ++num);
//     }
// }
// setTimeout(showNamber, 1000, 1);
 
// `use strict`
// let showMessage4;
// if (2 > 1) {
//     showMessage4 = function () {
//         console.log(`Message4`);
//     }
// }
// showMessage4();

// const max = 10;
// const min = 5;
// const resalt = Math.round(Math.random() * (max - min) + min);
// console.log(resalt);

// function isAdult(age) {
//   const passed = age >= 18;
//   return passed;
// }
// console.log(isAdult(20));
// console.log(isAdult(14));
// console.log(isAdult(8));
// console.log(isAdult(37));

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch = SAVED_PASSWORD === password;
//   return isMatch;
// }
// console.log(isValidPassword("mangodab3st"));
// console.log(isValidPassword("kiwirul3z"));
// console.log(isValidPassword('jqueryismyjam'));

// function checkAge(age) {
//   let message;

//   if (age >= 18) { // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }
// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// const x = typeof 0;
// console.log(x);

// const x1 = 10;
// const x2 = 30;
// const number = 50;
// // const number = prompt('Введіть число');
// let res;
// if (number >= x1 && number <= x2) {
//     res = "Namber is OK";
// } else if (number < x1) {
//     res = "Namber is less then x1";
// } else {
//     res = "Number is more then x2"
// }
// console.log(res);

// const stars = 4;
// let price;
// switch (stars) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 50;
//         break;
//     case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default: console.log('Не існує!');
// }
// console.log(price);

for (let index = 1; index <= 10; index += 1) {
     console.log(index);
}
console.log('Some');