console.log("+++ Activity 1 +++")
// Activity 1
let age, country;
age = 21;
country = "USA";
if (age >= 18 && country == "UK") {
    console.log("Yes I can serve you")
} else if (age >= 21 && country == "USA") {
    console.log("Yes I can serve you")
} else {
    console.log("You aren't old enough")
}

// Adding space between activities in console
console.log(`\n\n`)
console.log("+++ Activity 2 +++")
// Activity 2
let pizzaTopping = "pineapple";

switch(pizzaTopping){
    case "basil": 
    case "mozzarella":
    case "olive oil":
    case "pecorino":
        console.log("These are important ingredients for my pizza.");
        break;
    case "pepperoni": 
    case "green pepper":
    case "mushroom":
        console.log(`I don’t mind having ${pizzaTopping} on my pizza.`);
        break;
    default:
        console.log(`${pizzaTopping} should not be on a pizza.`)
}

// Adding space between activities in console
console.log(`\n\n`)
console.log("+++ Activity 3 +++")
//Activity 3
let password = "longPasswordExample 123456789";
if (password.length < 8) {
    console.log(`${password} is too short`)
} else {
    console.log(`${password} is your new password`)
}

// Adding space between activities in console
console.log(`\n\n`)
console.log("+++ Activity 4  +++")
//Activity 4
let num = 10;
if ((num % 3 == 0 || num % 5 == 0)) {
    console.log("This number is divisible by 3 or 5.");
} else {
    console.log("This number is not divisible by 3 or 5.")
}

// Adding space between activities in console
console.log(`\n\n`)
console.log("+++ Activity 5 - commented out due to Acitivies 5 & 6 requiring sharing variables with the same name +++")
//Activity 5
// let num = 15;
// if (num % 3 == 0 && num % 5 == 0) {
//     console.log("fizzbuzz")
// } else if (num % 3 == 0) {
//     console.log("fizz")
// } else if (num % 5 == 0) {
//     console.log("buzz")
// } else {
//     console.log(num)
// }


// Adding space between activities in console
console.log(`\n\n`)
console.log("+++ Activity 6 - commented out due to Acitivies 5 & 6 requiring sharing variables with the same name +++")
//Activity 6
// let num = 10001;
// if (num.toString() == num.toString().split("").reverse().join("")){
//     console.log("Yep it is a palindrome")
// } else {
//     console.log("nope it is not a palindrome")
// }

// Adding space between activities in console
console.log(`\n\n`)
console.log("+++ Activity 7 +++")
//Activity 7
let time = 23;
let placeOfWork = "Manchester";
let townOfHome = "Cheadle";

if(time < 8 || time >= 19) {
    console.log(`I'm in ${townOfHome}`)
} else if (time >= 9 && time <= 17) {
    console.log(`I'm in ${placeOfWork}`)
} else (
    console.log(`I'm commuting`)
)

// Adding space between activities in console
console.log(`\n\n`)
console.log("+++ Activity 8 +++")
//Activity 8
let stringExample = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
console.log(stringExample.length - stringExample.split("").reverse().join("").search(/aeiou/))

// Adding space between activities in console
console.log(`\n\n`)
console.log("+++ Activity 9 +++")
//Activity 9
let word = "pop";

if(word[word.length -1] == word[0]) {
    console.log(true)
} else {
    console.log(false)
}

// Adding space between activities in console
console.log(`\n\n`)
console.log("+++ Activity 10 +++")
//Activity 10
let num1, num2;
num1 = 3
num2 = 10
if((num1 + num2) % 2 == 0) {
    console.log(num1 + num2);
} else {
    console.log(num1 * num2)
}