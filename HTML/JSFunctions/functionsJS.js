// FUNCTIONS IN JS

function sum(a,b){
    console.log("inside function:: ",a+b);
    return a+b;
}

let a=12,b=16;

let c=sum(a,b);
console.log("value returned::",c);


// function expression
// function expression is similar to function, but it is defined in a variable with anonymous name
// the main difference between function and functon expression is that in case of function you can define function at
// any position in your code(that before calling function or after calling function), but in case of function expression
// you cn only call the function after defining the function in a variable


const sum2=function(num1,num2){
    console.log("inside function expression ::",num1+num2);
    return num1+num2;
}

console.log("value of sum2::",sum2);

console.log("calling a function expression::",sum2(2,3));


// nested functions in JS. Whole react framework works on this feature of JS, bcz you are calling component inside component in react

function addSquares(a,b){

    // this nesting of function i supported in JS
    function square(num){
        return num*num;
    }

    const sa=square(a);
    const sb=square(b);

    return sa+sb;
}

console.log("calling nested functions::",addSquares(2,3));


// Arrow Functions in JS
// arrow function is an another way of defining function. It is a quick way of defining function

// you dont always need to assign the arrow function to a variable, but if you want to invoke it later, then 
// you have to assign this function expression
const functionName= (param1,param2)=>{
    console.log("hello world");
    console.log("param1",param1, "param2",param2);
    return param1+param2;
}

const sumFunct=functionName(2,3);

console.log(sumFunct);

// if your function does not have more than 1 line statement, then you can omit curly braces and also can
// omit return statement

const funct2=(num)=> num*num;   

console.log("omiting return statement::",funct2(3));


// callback function
// callback functions are those functions in which function is passed as an argumrnt

// here function is passed as an argument to the calculate function and inside calculate function this passed function is invoked
const calculate= (a,b,operation)=>{
    console.log("values of a and b", a,b);
    return operation(a,b);      
}

// function defintion of addition function
const addition= (a,b)=>a+b;

const num1=12;
const num2=2;

// here we have to pass the function addition as an argument not calling it, thats why arguments of addition function are not passed
console.log(calculate(num1,num2,addition));


// here we are calling the calculate function, operation function which is passed as an argument is defined here itself
const subResult= calculate(num1,num2, (param1,param2)=>{
    return param1-param2;
})

console.log("subtraction::",subResult);


// Array callback function. Here we will learn few array callback function

const arr=[1,4,2,-7,3,23,5];

const testNegative= (num)=>{
    console.log("calling function for::",num);
    return num<0;
}

// here find is a callback function of array that calls testNegative(predicate) for each element of array. If value is positive,
// then it keeps calling predicate function. As soon as it finds first negative number it returns the value. If no negative element is
// present in arr, then it will return unDefined
const firstNegative=arr.find(testNegative);

console.log("first negative number is ::",firstNegative);

// it returns the first index for which predicate function is true
const firstNegativeIndex=arr.findIndex(testNegative);

console.log("index of first negative ::",firstNegativeIndex);

// this function calls passed function for each element of an array, no matter passed function returns true or false
arr.forEach(testNegative);