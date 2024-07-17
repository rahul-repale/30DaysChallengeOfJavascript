// Activity 1
// Task 1 : Check a number is positive, negative or zero
const someNumber = 14
if (someNumber > 0) {
    console.log('It is a positive number');
} 
else if (someNumber < 0) {
    console.log('It is a negative number');
} 
else {
    console.log('It is zero');
}

// Task 2 : Check a person is eligible to vote (age >= 18) or not
let age = 21
if (age >= 18) {
    console.log('He/She is eligible to vote');
}
else {
    console.log("He/She is not eligible to vote");
}


// Activity 2
// Task 3 : using nested if else to print largest number from given three numbers
let Num1 = 18
let Num2 = 19
let Num3 = 14

if (Num1 < Num2) {
    if (Num2 < Num3 ) {
        console.log(`Largest number is ${Num3}`);
    }
    else {
        console.log(`Largest number is ${Num2}`);
    }
}
else if(Num3 < Num1){
    console.log(`Largest number is ${Num1}`);
}
else{
    console.log(`Largest number is ${Num3}`);
}

// there is another clean way to write this code by using temp variable


// Activity 3
// Task 4 : get day name with respect to given numbers (1 to 7)
function getDayName(Num) {
    let DayName;
    switch (true) {
        case (Num == 1):
            return DayName = 'Monday';
            break;
        case (Num == 2):
            return DayName = 'Tuesday';    
            break;
        case (Num == 3):
            return DayName = 'Wenesday';
            break;
        case (Num == 4):
            return DayName = 'Thursday';
            break;
        case (Num == 5):
            return DayName = 'Friday';
            break;        
        case (Num == 6):
            return DayName = 'Saturday';
            break;
        case (Num == 7):
            return DayName = 'Sunday';
            break;
        default:
            console.log(`select number between 1 to 7`);
            return Num;
            break;
    }
}
console.log(getDayName(3));

// Task 5 : check the grades with respect to marks obtain 
function checkGrade(score) {
    let grade;
    switch (true) {
        case (score >= 90 && score <= 100):
            return grade = 'A';
            break;
        case (score >= 80 && score < 90):
            return grade = 'B';
            break;
        case (score >= 60 && score < 80):
            return grade = 'C';
            break;
        case (score >= 40 && score < 60):
            return grade = 'D';
            break;
        case (score >= 0 && score < 40):
            return grade = 'F';
            break;    
        default:
            console.log('write score between 0 to 100');
            return score;
            break;
    }
}
let score = 77;
const grade = checkGrade(score);
console.log(`your grade is '${grade}' for score: ${score}`);


// Activity 4
// Task 6 : by using ternary operator tell a number is even or odd
function checkNumber(anyNumber) {
    let result = (anyNumber%2 === 0) ? `It is Even number`: `It is Odd number`;
    return result;
}
let anyNumber = 45;
console.log(checkNumber(anyNumber));


// Activity 5
// Task 7 : check a year is a leap year or not
function isLeapYear(year) {
    if (year%4 === 0){
        if (year%100 === 0) {
            if (year%400 === 0) {
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return true;
        }
    }
    else{
        return false;
    }
    
}
const checkYear = 2026
if(isLeapYear(checkYear)){
    console.log(`${checkYear} is a leap year`);
}
else{
    console.log(`${checkYear} is not a leap year`);
}

// +++++++++++++++++++++++++ DAY 03 COMPLETED +++++++++++++++++++++++++++++ //