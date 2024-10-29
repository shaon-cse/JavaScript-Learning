let arr=[1,2,3,4,5,6];
console.log(arr);

arr.push("shaon");//add element after the left most element of the array
console.log(arr);

arr.pop();//remove left most element of the array
console.log(arr);

//to slice some elements of the array
let sliceArray=arr.slice(2,4)//it will slice the array and will show the index 2 and 3..will not show index 4
console.log(sliceArray); //index 2 element is 3, index 3 element is 4 and the index 4 element is 5. so it will print 3 4

//map

let ansArray=arr.map((Number)=>{ return Number*Number})
console.log(ansArray);


//filter
let EvenArray= arr.filter((Number)=>{
    return Number%2===0;
});
console.log(EvenArray);


//reduce
// by default acc value is array's 0th index value, and current value is 1st index value... 
//if we assigned value of acc.. then 0th index value will be curr value
let sumArray=arr.reduce((acc,curr) => {
    return acc+curr;
}, 0    //here 0 is the value of accumulator. as we assigned acc value so curr value will be 0th index value

);
console.log(sumArray);


//sort
let arr2=[5,3,6,9,7,8,1,2]
console.log(arr2.sort());


