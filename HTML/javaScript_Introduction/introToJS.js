
// INTRODUCTION TO JS

// javascript is programming language not like HTML(markup language) and CSS(styling language)
// we define javascript in script tag in html file

let c=2;
let d=7;
console.log("c+d=",c+d);

// ------------------------------------------------------------------------------------------------
// VARIABLES

// using let for mutable variables
let name="anant";
let lastName="jaiswal";

console.log("full name:: ", name+" "+lastName);

// this variable can be changed
lastName="kumar";

console.log("full name:: ", name+" "+lastName);


// using const valriable declaration
// NOTE:: when we declare const variable, it needs to be iniatialised as well, bcz const variables can not change its
// value in future
const as=10;
// will throw error
// const b;

// ---------------------------------------------------------------------------------------------------


// DATA TYPES in JS

// we dont need to define data types in JS
// we have mostly 3 datatypes in JS. We dont have datatypes like float,double,long etc
// string, number,boolean


let a1=10;
let b1=10.5;

// both have datatype number. Here we dont have datatypes like float,double etc
console.log('data type can be checked using ::',typeof(a1),typeof(b1));

// we can define strings both using single quotes and double quotes
let s1='we are studying JS';
let s2="23";

// console automatically adds new line
console.log('data type can be checked using ::',typeof(s1),typeof(s2));

// boolean
let bo1=true;

// datatype conversion

a1=String(a1);
s2=Number(s2);
b1=Boolean(b1);

console.log('values after datatype conversion::',a1,b1,s2);

console.log('type after conversion::',typeof(a1),typeof(s2),typeof(b1));

// values after boolean conversion can be false only for few cases i.e false,0,null,undefined,NaN
console.log('boolean values for::',Boolean(false),Boolean(0),Boolean(null),Boolean(undefined));

// null values,undefined,NaN
console.log("conversion of null value",String(null),Number(null),Boolean(null));

// undefined are those variables which are only initialised, but not declared
let aa1;
console.log('value of aa1',aa1);

console.log('conversion of undefined variable',String(aa1),Number(aa1),Boolean(aa1));

// NaN means not a number. This is for those, which can not be converted into numbers

let ss1='hello';
ss1=Number(ss1);
console.log("value of ss1::",ss1);
console.log("conversion of NaN::",String(ss1),Number(ss1),Boolean(ss1));


// OPERATORS IN JS

// we have all same operators in jS, only differnece in equal operator(==) and strict equal operator(===)

// == operator forst converts both variable into same data type and then checks value
let op1=2;
let op2="2";

console.log("equal operator gives ::" ,op1==op2);

// === strict equal operator gives false if data type and value not same

console.log("strict equal operator gives::",op1===op2);


// CONDITIONAL STATEMENTS

let cond1=10;
let cond2=20;

if(cond1===cond2){
    console.log("inside if condition");
}
else{
    console.log("inside else condition");

    if(cond1>cond2){
        console.log("inside nested if condition");
    }
    else if(cond2-cond1>5){
        console.log("inside nested if-else condition");
    }
    else{
        console.log("inside nested else condition");
    }

    let ter1=25;
    let ter2=5;

    // Ternary Operator
    const divident=(ter1%ter2)? "ter2 is not divident": "ter2 is divident"

    console.log("is this divident::",divident);

    const divident2="ter2 is divident";

    if(ter1%ter2){
        // this will throw error, we cannot change const variable value. Note we can manipulate const variable 
        // in ternary operator, bcz no values assigned till condition is checked
        
        // divident2="yes its is not divident";
    }
    else{
        // divident2="no, it is divident"
    }


}


// SWITCH STATEMENT IN JS

const grade="B";

switch(grade){
    case "A":
        console.log("this is grade A ::",grade);
        break;
    case "B":
        console.log("this is grade B:: ",grade);
    
        // since there is no break statement after case B, hence Case c will also execute if passed grade is B
        // if we have execute same code for more than 1 case, then we can write like this
    case "C":
    case "D":
        console.log("this is grade c and D ",grade);
        break;
        
    case "E":
        console.log("this is fail grade::",grade);
        break;

    default:
        console.log("invalid grade");
}


// ARRAYS IN JS

// arrays can store multiple elements of same data type or can be of different data type

const arr=["hey","there","how",1,true];

console.log("array is", arr);

// in JS array can contain anything of any data type, any object infact function can be added in arrays
arr[3]={"a":1,"b":2};

console.log("array is", arr);

// few common methods in array

const arr1= [1,2,7,4,12,7,23,32];
console.log(arr1);

// returns the first index of element passed, if element not present it returns -1
console.log(arr1.indexOf(7));
console.log(arr1.indexOf(48));

// check whether element present in array
console.log(arr1.includes(2));

console.log(arr1.includes(43));

// pushes element at the end
arr1.push(43);

// pushes element at the start, all elements shifts 1 position right
arr1.unshift(-90);

console.log(arr1);
// removes 1 element from the start, shifts all element 1 position left 
arr1.shift();

// removes 1 element from the last
arr1.pop();

console.log(arr1);
// sorts the array
console.log(arr1.sort());

// return bew array based on index passed
const arr2= arr1.slice(2,5);

console.log(arr2);  

