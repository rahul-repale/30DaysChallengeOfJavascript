// Activity 1
// Task 1
function isEvenOrOdd(number) {
    let checkNumber = (number%2 == 0) ? `It is an even number`: `It is a odd number`;
    console.log(checkNumber);
}
isEvenOrOdd(11)

// Task 2
function findSquare(number) {
    let square = number * number;
    return square;
}
console.log(findSquare(8));


// Activity 2 
// Task 3
function FindMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else{
        return num2;
    }
}
console.log(FindMax(9,3));

// Task 4
function concanateTwoStrings(str1, str2) {
    return str1 + str2;
}
string1 = 'Hello, '
string2 = 'Rahul'
console.log(concanateTwoStrings(string1, string2));


// Activity 3
// Task 5
const addTwo = (num1, num2) => ( num1 + num2 )
console.log(addTwo(3, 2));

// Task 6
const userName = "Rahul"
const checkChar = (string) => (string.includes('a'))
console.log(checkChar(userName)); // => true


// Activity 4
// Task 7
const productOfNumbers = function(num1, num2 = 4) {
    return num1 * num2;
}
// console.log(productOfNumbers(3, 2)); // => 6
console.log(productOfNumbers(3)); // => 12

// Task 8
const birthdayGreetings = (name, age = 18) => (`Happy birthday dear ${name}, you are ${age} years old now`)
console.log(birthdayGreetings("Rahul", 21));


// Activity 5
// Task 9
const greetings = (name = "Sam") => (`welcome, ${name}`)

function repeatMessage(message, times){
    for (let i = 1; i <= times; i++) {
        console.log(message);
    }
}

repeatMessage(greetings("Aditya"), 5)


// Task 10
// we will get the square of given number and then subtract it by 1 and then check the result is prime number or not

// first function
function getSquareMinusOne(num) {
    return ((num * num) - 1);
}

// second function
function checkPrimeNumber(num){
    if (num < 2 ){
        return false
    }
    else if(num%2 === 0 || num%3 === 0 || num%5 === 0 || num%7 === 0){
        if (num === 2 || num === 3 || num === 5 || num === 7) {
            return (`${num} is a prime number`);
        }
        else{
            return (`${num} is not a prime number`);
        }
    }
    else{
        return (`${num} is a prime number`);
    }
}

// higher order function
function combineFunction(Fun1, Fun2, Value) {
    const result = Fun1(Value);
    const finalResult = Fun2(result);
    return finalResult;
}

console.log(combineFunction(getSquareMinusOne, checkPrimeNumber, 9))

