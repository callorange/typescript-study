interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스
let seho: User = { age: 18, name: "seho" };

// 함수에 인터페이스
function getUser(user: User) {
  console.log(user);
}

const capt = { name: "captain", age: 99 };
getUser(capt);

// 함수의 스펙에 인터페이스
interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};

// indexing
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ["a", "b", "c"];
// arr[0] = 10; // error!

// dictionary pattern
interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
  cssFile: /\.css$/,
};

// obj.cssFile = 'a'; // error!!

Object.keys(obj).forEach(function (value) {});

// extends
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}

var yobi: Developer = {
    name: "yobi",
    age: 40,
    language: "korean",
}