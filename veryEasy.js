// creates test variables
let number1 = 88;
let number2 = 7;

// function that evaluates the min number and returns it if found, otherwise returns 'numbers are the same'
function min (num1, num2){
    if(num1 > num2){
        return num2;
    }
    else if(num1 < num2){
        return num1;
    }
    else {
        return "Numbers are the same";
    }
}

console.log(min(number1, number2));