// PROMISE

let promise=new Promise((resolve,reject)=>{
//   resolve("resolved")
     reject("rejected")
})


promise.then(()=>{
    console.log("then reolved")
}).catch(()=>{
    console.log("catch block")
})


let ol=document.querySelector("ol");


async function getData(){
   const response= await fetch("https://jsonplaceholder.typicode.com/posts");
   const data=await response.json()
   
   for (let obj of data){
    let li =document.createElement("li");
    li.innerText=obj.title;
    ol.prepend(li)
   }

}

getData()