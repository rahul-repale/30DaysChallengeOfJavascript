// Activity 1
var someNumber = 30
console.log(someNumber);
let someString = "CodeWithRahul"
console.log(someString);

// Activity 2
const someBoolean = true
console.log(someBoolean);

// Activity 3
let someOperators = {
    birthDate : 14,
    Name : "Rahul",
    isLoggedIn : true,
    FavouriteNumber : [5, 11, 12, 3, 9],
    BodyTemp : null
}
console.log(typeof someOperators.Name);
console.log(typeof someOperators.birthDate);
console.log(typeof someOperators.isLoggedIn);
console.log(typeof someOperators.FavouriteNumber); // array => object
console.log(typeof someOperators.BodyTemp); // null => object
console.log(typeof someOperators);

// Activity 4
let score = 57
console.log(score);
score = 107
console.log(score);

// Activity 5
const userId = "rahul_repale"
console.log(userId);
userId = "rahul_repale_01" // TypeError: Assignment to constant variable.
console.log(userId);