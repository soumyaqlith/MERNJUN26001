console.log("hello welcome");

// DOM manipulation

// getElementById()
// getElementsByCLassName();
// getElementsByTagName()

const p = document.getElementById("paragraph");
console.log(p);

const bold_tags = document.getElementsByClassName("bold-content");
console.log(bold_tags[1])

const h1_tags=document.getElementsByTagName("h1");
console.log(h1_tags)

// querySelector()
// querySelectorAll()

const bolds=document.querySelectorAll(".bold-content");
console.log(bolds)

// bolds[0].innerText="this is the bold tag tags"
console.log(bolds[0].innerText)
console.log(bolds[0].innerHTML)
console.log(bolds[0].parentNode)
console.log(bolds[0].className)
// bolds[0].className="hiiii"

console.log(bolds[0].getAttribute("class"))
bolds[0].setAttribute("id","bold_id")
bolds[0].setAttribute("style","color:red")
console.log(bolds[0].getAttribute("class"));

const div_box=document.querySelector(".box-container");
console.log(div_box)


// how to create the html element by javascript
const para=document.createElement("p");
para.innerText="this is the div paragraph"
para.style="background-color:red;color:blue"

div_box.append(para)

const para2=document.createElement("p");
para2.innerText="this is the div paragraph2"

div_box.prepend(para2);


// Event Handling 
// target body
// event name
//  handler code

const btn=document.querySelector("button");
console.log(btn)

btn.addEventListener("click",()=>{
    console.log("button pressed")
})


const form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(e)
    console.log("form submmited")
})


const input=document.querySelector("input");
// input.addEventListener("change",()=>{
//     console.log("input changed")
// })
// input.addEventListener("input",()=>{
//     console.log("input changed")
// })
// input.addEventListener("focus",(e)=>{
//     console.log(e)
//     console.log("input focus")
// })


// document.addEventListener("keydown",()=>{
//     console.log("key down")
// })
// document.addEventListener("keyup",()=>{
//     console.log("key up")
// })
document.addEventListener("keypress",()=>{
    console.log("key press")
})

const h4=document.querySelector("h4");

h4.addEventListener("mouseleave",()=>{
    console.log("mouse leave")
})



const login_form=document.querySelector(".login");
const inputs=document.querySelectorAll(".login input");

login_form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let email=inputs[0].value;
    let password=inputs[1].value;

    localStorage.setItem("login_data",JSON.stringify({email,password}))

    console.log("register form submit")
})



