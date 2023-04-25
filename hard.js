// creates object constructor
function person(height, mass){
this.height = height;
this.mass = mass;
}

// creates tom & jerry objects
let tom = new person(9,8);
let jerry = new person(10, 45);

// calculates BMI
function bmiCalculator(person){
    return person.mass/person.height;
}
// compares if tom's BMI is higher and returns true or false
function bmiComparator(Tom, Jerry){
    if(bmiCalculator(Tom)  > bmiCalculator(Jerry) ){
       
        return true;
    }
    else{
       
        return false;
    }
}

console.log("Is Tom’s BMI higher than Jerry’s? " + bmiComparator(tom,jerry) + ` Tom's BMI is ${bmiCalculator(tom)} Jerry's BMI is ${bmiCalculator(jerry)}`);