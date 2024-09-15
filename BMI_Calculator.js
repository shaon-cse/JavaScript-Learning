function BMI_Cal(weight, height){
    var bmi= weight/(height*height);

    return bmi;

}

var bmi=BMI_Cal(45, 1.6);
console.log("Your BMI is "+bmi);


