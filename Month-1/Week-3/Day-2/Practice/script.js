console.log("hello welcome to second class of js");

// let
// declare at global level
let a = 20;

console.log(a);

// block level
{
  let b = 30;
  console.log(b);
}
// console.log(b)

// function level
function hii() {
  let c = 40;
  console.log(c);
}
// console.log(c)

hii();

// const

// global
const v = 8;

// block
{
  const g = 44;
  console.log(g);
}

function hello() {
  const f = 40;
  console.log(f);
}
// console.log(f)

hii();

// the way of declaration
// let
let num;
console.log(num);
num = 50;
console.log(num);

let num1 = 60;
console.log(num1);

// let num;
// console.log(num)

num = 77;
console.log(num);

// const
const n = 90;
console.log(n);

// data type
// primitive (number,string,symbol,undefined,null,boolean,bigInt)
// non primitive (array,object)

let number = 9;
console.log(typeof number);
let name = "xyz";
console.log(typeof name);

let sym = Symbol("&");
console.log(typeof sym);

let u = undefined;
console.log(u);

let o = null;
console.log(typeof o);

let isPassed = true;
console.log(typeof isPassed);

let bigValue = BigInt("53984982734897387489374");
console.log(typeof typeof bigValue);

// non primitive
// array
let arr = [1, 2, 3, 4, 5, true, "dfjlkj", [2, 3]];
console.log(arr);

let arr1 = new Array(4, 3);
console.log(arr1);

console.log(arr[8]);

// object
let obj = {
  name: "xyz",
  age: 50,
};

console.log(obj.age);
console.log(obj["name"]);

let obj1 = new Object({
  email: "hii@gmail.com",
});
console.log(obj1.email);

// operator
// types
// Arithmatic
// Assignment
// Comparision
// logical

// + , - ,* ,/ , % , ** , ++ , --
console.log(2 + 1);
console.log(5 - 2);
console.log(4 * 3);
console.log(4 / 2);

console.log(5 % 2);
console.log(3 ** 2);

let i = 3;
console.log(i++);
// 4

console.log(++i)


// Assignment

let king="Ram";

let add=i+4;
console.log(add)

let numb=2;
// numb=numb+5;
numb+=5
console.log(numb)
