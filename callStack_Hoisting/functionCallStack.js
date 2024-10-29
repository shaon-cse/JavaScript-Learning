function greetMe(greet, name){
    console.log(name);
    greet();
}

function greet(){
    console.log("Take greetings");
}

greetMe(greet, 'shaon');

