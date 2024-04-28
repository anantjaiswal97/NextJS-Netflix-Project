// when using async threads, we use setTimeout function

console.log("hello world");

// setTimeout is a callback function, that executes passed function asynchronously after passed amount of time
setTimeout(() => {
    console.log("this is inside asyn function ");
}, 2000);

console.log("this line will print first");


// In the real world, we usually call backend functions asynchronously, bcz backend functions/APIs take few amount
// of time. We might not want to wait for the response and do our other stuffs synchronously. So in order to 
// get the backend response, we can use callback function. This callback function let us know when our backend server
// responds and we can do necessary stuff with the response


function getResponse(param1,callback1){
    console.log("this is sync thread");
    console.log("now we are gonna call our backend");

    // let backend takes 2 sec of time to respond
    setTimeout(() => {
        console.log("this is our backend arrow function");
        // if I need to get this backend resposne, I can call callback function
        const backendResponse=12;
        console.log("we are gonna pass response to passed callback function ");
        callback1(backendResponse);
        
    }, 2000);

    console.log("i can't delay to print pram1::",param1);
}

// now we can define our callback function separately
function callback1(bkdResponse){
    console.log("backend response received::",bkdResponse);
    console.log("processing of backend response::",bkdResponse+10);
}

getResponse("hello",callback1);


// what is callBack hell??
// when we want process in a sequence, we keep calling callback function inside callfunction. This makes the code 
// difficult to read and debugging. This is callback hell

// example: let we want to bake a pizza, then for making pizza, we first want cheese. Once we get cheese, we will make dough
// once we have made dough, then we can make pizza. Here there is series or sequence that need to be followed. We can't make 
// one thing, if we dont have previous requirements. 

// pizza-->dough--->cheese

// requirement 1: let getting cheese takes 2 sec of time

function getCheese(cheeseCallback){
    console.log("inside get cheese function");

    // getting cheese takes 2 sec of time
    setTimeout(() => {
        const cheese="mozarella"
        console.log("cheese is picked, passing to cheese callback function::",cheese);

        cheeseCallback(cheese);
    }, 2000);

    console.log("I am not waiting for cheese making, i have callback");
}

function makeDoughFromCheese(inputCheese,doughCallback){
    console.log("inside make dough from cheese function",inputCheese);

    // let making dough takes 3 sec of time
    setTimeout(() => {
        let dough="thin-crust"
        dough= inputCheese+ dough;

        console.log("dough is prepared, passing in callback::",dough);

        doughCallback(dough);

    }, 3000);

    console.log("we are not waiting for dough preparation, we have callback");
}

function makePizzaFromDough(inputDough,pizzaCallback){
    console.log("inside make pizza from dough function::",inputDough);

    // let say pizza making takes 4 sec of time
    setTimeout(() => {
        
        let pizza="farmhouse";
        pizza=inputDough+pizza;
        console.log("pizza preparation is done, paasing to callback::",pizza);
        pizzaCallback(pizza);

    }, 4000);

    console.log("we are not waiting for pizza preparation, we have callback");
}

getCheese((cheese)=>{

    console.log("hey team, got the cheese",cheese);

    console.log("passing cheese to dough department");

    makeDoughFromCheese(cheese,(dough)=>{
        console.log("hey team, got the dough",dough);

        console.log("passing dough for pizza making");

        makePizzaFromDough(dough,(pizza)=>{
            console.log("hey Team, got the pizza",pizza);
            console.log("now you can procced for delivery");

            // similary we can more functions like delivery etc...this leads to callback hell
        })

    });

    // console.log("cheese is paased for making dough");

})

