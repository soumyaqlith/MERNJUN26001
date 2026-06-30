console.log("Hello Welcome");
// what is array

let arr = [1, 2, 3, 4, 6, 5];

arr.push(90);
console.log(arr);
arr.pop();
arr.pop();
console.log(arr);

arr.unshift(-1, 0);
console.log(arr);
arr.shift();
console.log(arr);

console.log(arr.length);
console.log(arr.concat([11, 22, 33]));
console.log(arr); // 0 1 2 3 4 5
arr.splice(3, 2, 10);
console.log(arr);

console.log(arr.join(""));
// console.log(arr.reverse());
console.log(arr.toReversed());
console.log(arr);
console.log(arr.sort());

// function
// types of function
// -> anynomous fun
// -> named fun
// -> expressional fun
// -> arraow fun

// function (){

// }

function fun1() {
  console.log("this is the named fun");
}
fun1();

let fun2 = function () {
  console.log("this is the expression fun");
};
fun2();

console.log(typeof fun2);

let arrFun = () => {
  console.log("this is arrow fundtion");
};

arrFun();

let checkEvenNumber = function (number) {
  if (number % 2 == 0) {
    console.log(number + " is even number");
  }
};
checkEvenNumber(80);
checkEvenNumber(50);

// higer order function

function returnValue() {
  return 30;
}
let value = returnValue();
console.log(value);

function hof(func) {
  func();
}

hof(() => {
  console.log("this is the arrow fun");
});

// special function of array (important)
// forEach()
// map()
// filter()
// reduce()
// sort()

// forEach()

let arr1 = [1, 2, 3, 4, 5, 6, 90, 78, 50];
arr1.forEach((v, i) => {
  console.log(v + 2);
});

let updateArr = arr1.map((v, i) => {
  return v * v;
});
console.log(updateArr);

let filteredArr = arr1.filter((v, i) => {
  return v % 2 == 0;
});

console.log(filteredArr)

let sum=arr1.reduce((accu,curr)=>{
    return accu+curr
},0);

console.log(sum)

let sum=0; // 0 /1  /3

for(let v of arr1){
    sum=sum+v;
}
console.log(sum)

let sortArr = arr1.sort((a, b) => b - a);
console.log(sortArr);
