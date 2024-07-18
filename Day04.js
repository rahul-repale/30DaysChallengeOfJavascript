// Activity 1 : For Loop
// Task 1 : use for loop to print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
} 

// Task 2 : print multiplication table of 5
for (let j = 1; j <= 10; j++) {
    console.log(`5 * ${j} = ${5*j}`);
}


// Activity 2 : While Loop
// Task 3 : program to calculate sum of numbers from 1 to 10
let initialValue = 0;
let finalValue = 0;
while (initialValue != 10) {
    initialValue++;
    finalValue = finalValue + initialValue;
}
console.log(`sum of numbers from 1 to 10 : ${finalValue}`);

// Task 4 : program to print numbers from 10 to 1
let i = 10;
while (i != 0) {
    console.log(i);
    i--;
}


// Activity 3 : Do...While Loop
// Task 5 : print numbers from 1 to 5
let score = 0
do {
    score++;
    console.log(`score is ${score}`);
} while (score != 5);

// Task 6 : program to calculate factorial of a number
let result = 1;
let inputValue = 6;
const OriginalValue = inputValue;
do {
    result *= inputValue;
    inputValue--;
} while (inputValue != 0);
console.log(`The Factorial of number ${OriginalValue} is ${result}`);

 
// Activity 4 : Nested Loop
// Task 7 : print star pattern using nested for loop
let numberOfRows = 5;
for (let i = 0; i < numberOfRows; i++) {
    let EveryRow = '';
    for (let j = 0; j <= i; j++) {
        EveryRow += "* "
    }
    console.log(EveryRow);
}


// Activity 5 : Loop control statement
// Task 8 : print numbers from 1 to 10 and skip number 5 by using continue statement
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}

// Task 9 : print numbers from 1 to 10 but stop the loop on number 7 using break statement
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}
