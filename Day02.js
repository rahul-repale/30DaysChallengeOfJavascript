// Activity 1
let addition = 2+2
console.log(addition);

let substraction = 5-3
console.log(substraction);

let multiplication = 4*6
console.log(multiplication);

let division = 9/3
console.log(division);

let remainder = 5%2
console.log(remainder);


// Activity 2
let addValue = 5
addValue += 4
console.log(addValue);

let subValue = 9
subValue -= 4
console.log(subValue);


// Activity 3
let GreaterThan = (2 > 3)
console.log(GreaterThan);

let LessThan = (2 < 3)
console.log(LessThan);

let GreaterEqual = (4 >= 3)
console.log(GreaterEqual);

let  LessEqual = (5 <= 5)
console.log(LessEqual);

let isEqual = (9 == "9")
console.log(isEqual);

let isStrictlyEqual = (6 === 6)
console.log(isStrictlyEqual);


// Activity 4
let parScore = 200;
let avgWicketsFallen = 6;

// and statement
if (parScore >= 180 && avgWicketsFallen <= 4 ) {
    console.log(`It's good pitch to bat on avg wickets fallen are less than 4 and par score is above 180`);
}
else {
    console.log(`It's tough pitch to bat on avg wickets fallen are greater than 4 and par score is less than 180 `);
}

// or statement
if (parScore >= 180 || avgWicketsFallen <= 6){
    console.log(`Anything can happen in this match`);
}
else{
    console.log(`Pitch is good for bowlers par score is less than 180 and average wickets fallen are greater 6`);
}

// negation statement
let outsideWeather = "Rainy"
if (outsideWeather != "Rainy") {
    console.log(`It is not a Rainy day`);
}
else{
    console.log(`It is a Rainy day`);
}


// Activity 5 
// ternary operator
let someNumber = -14
let checkTheNumber = (someNumber > 0) ? `it is a positive number`: `it is a negative number`; 
console.log(checkTheNumber);