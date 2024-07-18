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

