// ACCESSING HTML ELEMENTS

// we can access any element of html using document

// we can select any html element like this
const body= document.body;

console.log(body);

// select by id
const box2= document.getElementById('box-2');

console.log(box2);

// we can select using tag name 
// return all div tags
const divs= document.getElementsByTagName('div');

console.log(divs);

// we can select using class
const boxes= document.getElementsByClassName('box');
console.log(boxes);

// we can select using query selector also like in css
const randombox=document.querySelectorAll('.container .random');
console.log(randombox);


// MODIFYING HTML ELEMENTS

// we can also modify html elements content,attributes,classes

const box1=document.getElementById('box-1');
console.log(box1.innerHTML);
// changing content
box1.innerHTML="hello wrold";

// we can add html tags also

box1.innerHTML= "<h2> hey</h2> <p>hello</p>";


// we can also modify attribute values
// here we use the camel case(backgroundColor) of css properties, where in CSS we use kabab case(background-color)
box1.style.backgroundColor="red";

// we can select img element can change src attribute

// we can also add, remove and toggle classes of elemetns

console.log(box1.classList);

box1.classList.add("rounded-borders");

box1.classList.remove("rounded-borders");


box1.classList.toggle("box")


// EVENT HANDLING IN JS

// JS supports event handling which allow us to execute particular task on triggering of particular event

// there are 2 ways of handling event in JS
// 1) by using event handler
// 2) by adding an event listener


function myFunction(){
    console.log("inside myFUnction");
}

function mouseMove(){
    console.log("inside mouseMove fnt");
}

function mouseOver(){
    console.log("inside mouseOver fnt");
}

function keyPress(){
    console.log("inside keyPress fnt");
}

function keyDown(){
    console.log("inside keyDowns fnt");
}


// via event handler we need to add event on html attribute on which event need to be triggered
// event listener is better way for event handling


const box1= document.getElementById("box-1");

// in event listener we get to pass callback function, which take input as event
// in case of event handler,only one event of one type(click) is considered, but in case of event listener, we can add more than
// one event of same type and all will be executed on trigger of that event
box1.addEventListener("click",(e)=>{
    console.log("box1 is clicked event 1",e);
})

box1.addEventListener("click",()=>{
    console.log("box1 is clicked event 12");
})



const input1= document.getElementById("input-1");

// when keyboard key is pressed on input 1, then this event will be triggere. We also get event as an input in callback function
// and using event.key, we can check which key is pressed.
// NOTE: keypress for event listener triggeres even for backspace and arroe keys, but it doesnot happen in case of event handler
input1.addEventListener("keypress",(e)=>{
    console.log("key is pressed", e.key);
})


// BUBBLING V/S CAPTURING
// Bubbling and capturing are the 2 ways of defining event propogation when an event occurs
// bubbling: innermost element's event is handled first then outmost element's
// capturing: outermost element's event is handled first then innermost


// when we click on box-1, we triggering event click on same time for id=box-1 and id=container. But since default behaviour is
// bubbling so container event which is outer element, its event will be handled later

const container1=document.getElementById("container");
container1.addEventListener("click",()=>{
    console.log("container event is triggered later than box event");
})

const box1= document.getElementById("box-1");
box1.addEventListener("click",(e)=>{
    console.log("box event will be handled first",e);
})


// if we want capturing behaviour to propogate, then on outer element we define true
// this will follow capturing behaviour
const container12=document.getElementById("container");
container1.addEventListener("click",()=>{
    console.log("container event is triggered later than box event");
},true);

const box12= document.getElementById("box-1");
box1.addEventListener("click",(e)=>{
    console.log("box event will be handled first",e);
})



