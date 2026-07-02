console.log("hello today we are going to cover the js");

// fetch

// promises
// let promise = new Promise((resolve, reject) => {
// //   resolve("resolve");
//     reject("reject")
// });

// console.log(promise);

// promise.then((res)=>{
//   console.log("resolve promise execute",res)
// }).catch(()=>{
//     console.log("promise reject")
// })

async function getAllData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    console.log(data);
  } catch (error) {}
}

// getAllData();

// CRUD

async function createData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        body:JSON.stringify({
            name:"hello",
            age:30
        }),
        headers:{
            "Content-Type":"application/json"
        }
    });
    const data = await response.json();

    console.log(data)
  } catch (error) {}
}

// createData();

async function getDataById() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/5");
    const data = await response.json();

    console.log(data);
  } catch (error) {}
}

// getDataById()




async function updateData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/5",{
        method:"PATCH",
        body:JSON.stringify({
            name:"hello",
            age:30
        }),
        headers:{
            "Content-Type":"application/json"
        }
    });
    const data = await response.json();

    console.log(data)
  } catch (error) {}
}

// updateData()


async function deleteData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/5",{
        method:"DELETE",
        
    });
    const data = await response.json();

    console.log(data)
  } catch (error) {}
}

// deleteData()



// String interpolation
console.log("hii" + 2)

let str=`this is the Qlith ${2026}`;
console.log(str);


// MATH Object
console.log(Math.PI)
console.log(Math.LN10);

console.log(Math.sqrt(35));
console.log(Math.SQRT1_2);

console.log(Math.min(2,39,5,56));
console.log(Math.max(45,2,34,7))
console.log(Math.random(9))
console.log(Math.floor(4.5))
console.log(Math.ceil(4.000008))


