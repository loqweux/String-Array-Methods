// // DZ 1

// function sum() {
//   let pr1 = +prompt("Введите первое число");
//   let pr2 = +prompt("Введите второе число");
//   if (Number.isFinite(pr1) && Number.isFinite(pr2)) {
//     // isFinite позволяет проверить, является ли переданное в аргументе число конечным. Конечным числом можно считать любое число, кроме бесконечности и NaN
//     let sum = pr1 + pr2;
//     console.log(sum);
//   } else if (Number !== isFinite(pr1) || Number !== isFinite(pr2)) {
//     console.log(`введенные данные не являются числами`);
//   } else {
//     console.log(`введите два параметра`);
//   }
// }

// sum();

// // DZ 2
// const square = () => a * a; // стрелочная функция

// square();

// // DZ 3

// function getRandomInteger(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// let res = getRandomInteger(1, 10);

// let integer = +prompt("Введите число");

// let result;

// if (integer >= 1 && integer <= 10) {
//   result = integer;
// }

// const func = () => {
//   if (result === res) {
//     console.log(`Вы выиграли`);
//   } else {
//     console.log(`Вы не угадали, ваше число - ${result}, а выпало число ${res}`);
//   }
// };

// func();

// // DZ 4

// const arr = ["maxim", "dima", "boy"];

// const copyArr = [];

// arr.forEach(function (element) {
//   copyArr.push(element);
// });
// console.log(copyArr);

// // DZ 5

// const arr = ["maxim", "dima", "boy"];

// const copyArr = [];

// arr.forEach(function (element) {
//   copyArr.push(`Hello ${element}`);
// });
// console.log(copyArr);

// // DZ 6

// const users = [
//   {
//     user: "maxim",
//     pass: "3frev5y66tn",
//   },
//   {
//     user: "andrey",
//     pass: "22s3fvy66tn",
//   },
//   {
//     user: "vasya",
//     pass: "ss32f3frdfv76n",
//   },
// ];

// function getUserNames(users) {
//   return users.map((user) => user.user);
// }

// const userNames = getUserNames(users);
// console.log(userNames);

// // DZ 7

// const objectWithNumbers = {
//   a: 10,
//   b: 20,
//   c: "string",
//   d: 12,
// };

// let sum = 0;

// function sumObjectValues() {
//   for (const key in objectWithNumbers) {
//     if (Number.isFinite(objectWithNumbers[key])) {
//       sum = sum + objectWithNumbers[key];
//     }
//   }
// }
// sumObjectValues();
// console.log(sum);

// // DZ 8
// function ucFirst(str) {
//   return str[0].toUpperCase() + str.slice(1);
// }

// let str = prompt("введите строку");
// let string = ucFirst(str);
// console.log(string);

// // DZ 9

// let str = prompt("введите строку(badWord or XXX)");
// let string = checkSpam(str);
// function checkSpam(str) {
//   let lowerCaseStr = str.toLowerCase();
//   if (lowerCaseStr === "badword" || lowerCaseStr === "xxx") {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
