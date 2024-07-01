// let a = 10;
// let b = a;
// a = 20;
// console.log(b); // 10

// const user = {
//   name: "gfvf",
//   age: 30,
//   city: "net york",
// };

///

// const objuser = user;

// user.age = 40;

// ///

// const adminUser = user;

// console.log(adminUser);

/// неглубокое копирование

// const user = {
//   name: "gfvf",
//   age: 30,
//   city: "net york",
// };
// const user2 = {
//   name: "gfvf",
//   age: 30,
//   city: "net york",
// };
// console.log(user === user2); // false

// in

// const user2 = {};
// for (let key in user) {
//   user2[key] = user[key];
// }
// user.age = 40;

// console.log(user); // age 40
// console.log(user2); // age 30

/// spead operator

// const user4 = { ...user }; //убирает доп вложенность
// console.log(user4);

/// object.values

// const arrObj = Object.values(user); // gfvf 30 net york
// console.log(arrObj);
// // object.keys

// const arrKeys = Object.keys(user); // name age city
// console.log(arrKeys);

///. глубокое копирование

// const user1 = {
//   name: "gfvf",
//   age: 30,
//   city: "net york",
//   names: ["alex", "kirill", "josh"],
// };
// /// const user2 = { ...user1 };

// const user2 = JSON.parse(JSON.stringify(user1)) // сначала строка а потом опять объект

// user2.age = 40;
// user2.names.push("elena");
// console.log(user1);
// console.log(user2);

// // иммутабельность и мутабельность

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// const arrcopy = JSON.parse(JSON.stringify(arr));
// const obj = {
//   name: "gfvf",
//   age: 30,
//   city: "net york",
// };
// Object.freeze(obj);
// obj.name = "jane";
// console.log(obj); // gfvf всё равно

// const arr = ["apple", "banana", "orange", "apple", "grape"];
// let a = 0;
// function myfunc() {
//   for (let key of arr) {
//     if (key === "apple") {
//       a += 1;
//     }
//   }
//   console.log(a);
// }
// myfunc();
