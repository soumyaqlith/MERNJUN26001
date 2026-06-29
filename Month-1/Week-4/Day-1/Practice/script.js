console.log("hii welcome to the coding world");
// loop statement

// loop statement type
// for
// while
// do while
// for in
// for of

// for loop
// for(initialization ; condition ; updation){
//  statement
// }

// i = 1 / 2 /9 / 10 / 11
// i<=10 : t  / t
for (let i = 1; i <= 10; i++) {
  console.log("Qlith");
}

// while
let v = 1;
while (v <= 5) {
  console.log("Ta ta");
  v++;
}

// do while
let a = 1;
do {
  console.log("Bye Bye");
  a++;
} while (a <= 10);

let obj = {
  name: "hii",
  age: 30,
};
// for in
for (let key in obj) {
  console.log(obj[key]);
}

let arr = [1, 2, 3, 4, 5];
for (let i in arr) {
  console.log(i, arr[i]);
}

for (let i in arr) {
  console.log(i);
}

// for of
// for(let v of obj){
//     console.log(v)
// }

// String 
let std1="student 1"
let std2='student 2'
let std3=`studet 3`

console.log(std1[0]);
for(let v of std1){
    console.log(v)
}

// std1="hiiiiiii";
std1[0]="t";
console.log(std1);

let str="Qlith Innovation"
// property
console.log(str.length);

// method
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.replace("Q","s"));
console.log(str.replaceAll("n","%"))
console.log(str.slice(-2,-1));
console.log(str.slice(4,4));

console.log(str.trim().length);
console.log(str.split("n"))