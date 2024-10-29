sayMyName("shaon");//the function is called before the function. 
//in this case hoisting helps. it move the funtion before the function call when you call the function before the function

function sayMyName(name){
    console.log(name);
}

//for var
//var is declared after printing. but due to hoisting age var is accesable. but the value won't be there. it will show undefined
console.log(age);

var age=25;

//output
//shaon
//undefined

//hoisting not works with let and const. only works with var and function