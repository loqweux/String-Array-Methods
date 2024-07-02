// DZ 1

function sum() {
  let pr1 = +prompt("Введите первое число");
  let pr2 = +prompt("Введите второе число");
  if (Number.isFinite(pr1) && Number.isFinite(pr2)) {
    // isFinite позволяет проверить, является ли переданное в аргументе число конечным. Конечным числом можно считать любое число, кроме бесконечности и NaN
    let sum = pr1 + pr2;
    console.log(sum);
  } else if (Number !== isFinite(pr1) || Number !== isFinite(pr2)) {
    console.log(`введенные данные не являются числами`);
  } else {
    console.log(`введите два параметра`);
  }
}

sum();

// DZ 2
function square(a) {
  if (typeof a === "undefined") {
    console.error(
      'Uncaught Error: Функция "square" не может быть вызвана без аргумента'
    );
    return;
  }
  console.log(a * a);
}
square(10);
square();

// DZ 3

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const func = () => {
let res = getRandomInteger(1, 10);

let integer = +prompt("Введите число");

let result;

if (integer >= 1 && integer <= 10) {
  result = integer;
}
  if (result === res) {
    console.log(`Вы выиграли`);
  } else {
    console.log(`Вы не угадали, ваше число - ${result}, а выпало число ${res}`);
  }
};

func();

// DZ 4

const arr = ["maxim", "dima", "boy"];

const copyArr = [];

arr.forEach(function (element) {
  copyArr.push(element);
});
console.log(copyArr);

// DZ 5

const arr = ["maxim", "dima", "boy"];

const copyArr = [];

arr.forEach(function (element) {
  copyArr.push(`Hello ${element}`);
});
console.log(copyArr);

// DZ 6

const users = [
  {
    user: "maxim",
    pass: "3frev5y66tn",
  },
  {
    user: "andrey",
    pass: "22s3fvy66tn",
  },
  {
    user: "vasya",
    pass: "ss32f3frdfv76n",
  },
];

function getUserNames(users) {
  return users.map((user) => user.user);
}

const userNames = getUserNames(users);
console.log(userNames);

// DZ 7

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: "string",
  d: 12,
};

let sum = 0;

function sumObjectValues() {
  for (const key in objectWithNumbers) {
    if (Number.isFinite(objectWithNumbers[key])) {
      sum = sum + objectWithNumbers[key];
    }
  }
}
sumObjectValues();
console.log(sum);

// DZ 8
function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

let str = prompt("введите строку");
let string = ucFirst(str);
console.log(string);

// DZ 9

let str = prompt("введите строку(badWord or XXX)");
let string = checkSpam(str);
function checkSpam(str) {
  let lowerCaseStr = str.toLowerCase();
  if (lowerCaseStr === "badword" || lowerCaseStr === "xxx") {
    console.log(true);
  } else {
    console.log(false);
  }
}

// DZ 10

let arr = [];

function str() {
  let string = prompt("введите строку");
  let arr = string.split(""); // по символам
  arr.reverse(); //переворот
  console.log(arr.join("")); // выводим вновь массивную строку
}
str();

// DZ 11

let stations = [
  "MAN675847583748sjt567654;Manchester Piccadilly",

  "GNF576746573fhdg4737dh4;Greenfield",

  "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",

  "SYB4f65hf75f736463;Stalybridge",

  "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
];

stations.forEach((stations) => {
  let code = stations.slice(0, 3); // код
  let index = stations.indexOf(";"); // находим ;
  let name = stations.slice(index + 1); // название
  let fullname = `${code}: ${name}`;
  console.log(fullname);
});

// DZ 12

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

function unique(arr) {
  const uniqarr = [];
  for (const key of arr) {
    const search = uniqarr.indexOf(key);
    if (search === -1) {
      uniqarr.push(key);
    }
  }
  return uniqarr;
}

console.log(unique(strings));

// DZ 13

const catsJane = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
const catsJulia = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];
const catsJane_2 = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10];
const catsJulia_2 = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4];

function verifyCats(catsJane, catsJulia) {
  const deletecatsjane = catsJane.slice(0, 9);
  const arr = catsJane.concat(catsJulia);
  arr.forEach((element, index) => {
    if (element < 2) {
      console.log(`Кошка ${index} ещё котёнок`);
    } else {
      console.log(`Кошка ${index} взрослая, ей ${element} лет`);
    }
  });
}
verifyCats(catsJane, catsJulia);
verifyCats(catsJane_2, catsJulia_2);

// DZ 14

let arr = [5, 4, 3, 8, 0];

function filterFor(arr, a) {
  const newarr = arr.filter((element) => element >= a);
  return newarr;
}

console.log(filterFor(arr, 5)); // [5, 8]
console.log(filterFor(arr, 10)); // []
console.log(filterFor(arr, 3.11)); // [5, 4, 8]

// DZ 15

let arr = ["yes", "hello", "no", "easycode", "what"];

function func(arr) {
  const newarr = [];
  arr.forEach((element) => {
    if (element.length > 3) {
      newarr.push(element);
    }
  });
  return newarr;
}
console.log(func(arr));

// DZ 16

const arr = [[14, 45], [1], ["a", "c", "d"]];

const sortarr = arr.sort((a, b) => {
  return a.length - b.length;
});
console.log(sortarr);

// DZ 17

let catAges_1 = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];
let catAges_2 = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];

function getAverageHumanAge(catAges) {
  const humanAges = catAges.map(function (age) {
    if (age <= 2) {
      return age * 10;
    } else {
      return age * 7;
    }
  });
  const age = humanAges.filter((age) => age >= 18);
  const sumage = age.reduce((acc, age) => acc + age, 0);
  const averageage = sumage / age.length;
  return averageage;
}
console.log(getAverageHumanAge(catAges_1));
console.log(getAverageHumanAge(catAges_2));