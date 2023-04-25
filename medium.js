// variable that determines current program state
let running = true;


function numToMonth(num){
    // ckecks for value of num and returns function according to value
    switch(num){
        case 1:
            return console.log( "January");
        case 2:
            return console.log( "February");
        case 3:
            return console.log( "March");
        case 4:
            return console.log(  "April");
        case 5:
            return console.log( "May");
        case 6:
            return console.log( "June");
        case 7:
            return console.log( "July");
        case 8:
            return console.log( "August");
        case 9:
            return console.log( "September");
        case 10:
            return console.log( "October");
        case 11:
            return console.log( "November");
        case 12:
            return console.log( "December");
            case -7:
                console.log( "Program Stopped");
                return running = false;
        default:
        return alert('invalid number');

    }
}

// loops while variable running is true
while(running){
    
    let number = prompt('Input the number of the month (input -7 to stop program)');

    numToMonth(Number(number));
}
