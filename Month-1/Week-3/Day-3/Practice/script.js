console.log("hello welcome to third class");

// comparision operator
//  > ,< ,>= , <= , == ,=== , != ,!==

console.log(3 > 5);
console.log(6 < 10);
console.log(3 >= 3);

console.log(2 == 2);
console.log(5 == 6);
console.log("hii" == "hii");
console.log("hii" == 2);
console.log("2" == 2);

// === (strict checking)
console.log(+"2" === 2); // true

console.log({} == {}); //false
console.log({} === {}); //

let obj1 = {};
let obj2 = obj1;

console.log(obj1 == obj2);

console.log(2 != true + 1);
console.log(1 !== "1");

// logical operator
// && , || , !

console.log(2 < 1 && true);

console.log(4 === "4" || 2 <= 2);

console.log(!true); // false
console.log(!false); // true

// block
// conditional statement
// if
// if else
// if else ladder
// nexted if
//  switch

// if(cond){
//  // statement
// }

if (3 < 2) {
  console.log("this is true");
} else {
  console.log("this is false");
}

// nexted
if (true) {
  if (true) {
    console.log("next if");
  } else {
  }
}

// if else ladder
if (false) {
  console.log("1");
} else if (false) {
  console.log("");
} else if (true) {
} else {
}

// switch
let choise = "V";
switch (choise) {
  case "A":
    console.log("this is A");
    break;
  case "B":
    console.log("this is B");
    break;
  case "C":
    console.log("this is C");
    break;
  case "D":
    console.log("this is D");
    break;

  default:
    console.log("this is default");
    break;
}

// operator as well as condtional statement
// ternary operator
//   (cond ) ? true :false

console.log(false ? 2<1 ?"right":"right right" : "wrong");


