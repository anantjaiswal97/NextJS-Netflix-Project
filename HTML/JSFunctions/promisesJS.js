// promise in JS is a good way to handle async operation(callback function lead to callback hell). It is used to find
// out if the async operation is successfully completed or not

// A promise can have 3 states
// Pending
// Fulfilled
// Rejected


// Creating Promise
// The Promise() constructor takes the function as the argument. The function also accepts two function
// resolve() and reject().
// resolve(): function is called when the promise is fulfilled successully
// reject(): function is called when the promise is rejected or failed

// ticket is an promise object. This is how we create a promise object
const ticket= new Promise(function(resolve,reject){
    const isTicketBooked=true;
    console.log("inside promise");
    if(isTicketBooked){
        console.log("promise resolved");
        resolve("ticket booking success");
    }
    else{
        console.log("promise rejected");
        reject("ticket booking failed");
    }
})


// // once we have created the promise object, then we can use promise class methods
// // then(): is a method than can be used by promise object using callback to get the data when promise is resolved or fulfilled successfully
// // catch(): is a method for promise object that can used using callback to get the data when promise got rejected
// // finally(): this is method which is called everytime no matters promise fulfilled or not

ticket.then((data)=>{
    console.log("promise fulfilled success:: ",data);
})
.catch((data)=>{
    console.log("promise rejected::",data);
})
.finally(()=>{
    console.log("ticket process complete");
})

// this was an example of synchronous process


// the best way of using promise to use in case of asynchronous process. This will prevent callback hell
// lets make pizza using promises


function getCheese(){
    // since cheese making will take 2sec time, so synchronously we will return only promise
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            const cheese="mozirella";
            if(cheese==="mozirella"){
                console.log("mozirella cheese is available");
                resolve(cheese);
            }
            else{
                console.log("mozirella cheese is not available");
                reject(cheese);
            }
        }, 2000);

    })
}

function makeDoughFromCheese(cheese){
    // we return promise of making dough from cheese in sync manner, bcz dough making will make 3 sec time
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            let dough="thin-crust"
            dough=cheese+dough;

            if(dough==="mozirellathin-crust"){
                console.log("dough is pefect");
                resolve(dough);
            }

            else{
                console.log("dough is not perfect");
                reject(dough);
            }
        }, 3000);
    })
}

function makePizzaFromDough(dough){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            let pizza="farmhouse"
            pizza=dough+pizza;
            if(pizza==="mozirellathin-crustfarmhouse"){
                console.log("perfect pizza baked");
                resolve(pizza);
            }
            else{
                console.log("wrong pizza baked");
                reject(pizza);
            }
        }, 4000);
    })
}


// Now all our functions are created which return promises


// this is how we call our promises. We can see there is no multinesting of functions happened like in case of callback hell
getCheese().then((cheese)=>{
    console.log("hey Team, got the cheese",cheese);
    return makeDoughFromCheese(cheese);
})
.then((dough)=>{
    console.log("hey team, got the dough",dough);
    return makePizzaFromDough(dough);
})
.then((pizza)=>{
    console.log("hey Team, got the pizza",pizza);
})
// this catch will get catch failed promise from any of the 3 process.
.catch((data)=>{
    console.log("error in process::",data);
})
.finally(()=>{
    console.log("pizza making process is completed");
})


// We can also make use of asyn await feature when handling need to be done in asyn functions
// using async await, we can wait till the promise completed

// function is defined as async
async function orderPizza(){
    try{
        // using await keyword, we can wait for promise to resolve and then moves to next line
        const cheese=await getCheese();
        console.log("here is the cheese",cheese);

        const dough=await makeDoughFromCheese(cheese);
        console.log("here is the dough",dough);

        const pizza= await makePizzaFromDough(dough);
        console.log("here is the pizza",pizza);
    }
    // we can catch error, if any of 3 promises rejected
    catch(err){
        console.log("error occured",err);
    }
    console.log("process is completed");
}
    
orderPizza();