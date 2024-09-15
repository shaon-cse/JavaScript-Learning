//Math.random gives number between 0 to 0.99999
var n=Math.random();
console.log("The random number is "+n);

var n2=Math.random()*100; //to get random number between 0 to 99.999 we multiplied 100 here
n2+=1; // to ger number between 1 to 100 we add 1
console.log("Random Number between 1-100: "+Math.floor(n2));
