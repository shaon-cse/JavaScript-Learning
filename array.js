var examMarks=[10, 20, 30, 40, 50, 60, 70, 80];

console.log("The array: "+examMarks);


//varName.length gives the length size of the array
var arrayLength= examMarks.length;
console.log("Length of the array is "+arrayLength);

//To print specific index element. Index start with 0
console.log("Index 2 element is "+examMarks[2]); //will print 30


// To search for a element we use varName.includes(element). It search the element in the array. 
//if the element is in the array it will return boolean output. True or False.
console.log("30 is Present in the array? "+examMarks.includes(30));//as 30 is present in the aray so it will give True as output

