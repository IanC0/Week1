// Activity 1 //
let personName = "Ian";
let colour = "blue";
let sentence = `There is a person called ${personName}, their favourite colour is ${colour}`;
console.log(sentence)


personName = "Felix";
colour = "green";
let sentence2 = `There is anoter person called ${personName}, and their favourite colour is ${colour}`;
console.log(sentence2)

// Adding space between activities in console
console.log(`\n\n`)
// Activity 2
let breakfast = "cornflakes";
let lunch = "cheese sandwich";
let tea = "either pasta or pizza";

console.log(`Today I will eat:
breakfast - ${breakfast}
lunch - ${lunch}
tea - ${tea}`)

breakfast = "more cornflakes";
lunch = "another cheese sandwich";
tea = "maybe a Thai curry";

console.log(`Tomorrow I will eat:
breakfast - ${breakfast}
lunch - ${lunch}
tea - ${tea}`)

// Adding space between activities in console
console.log(`\n\n`)
// Activity 3
let today = new Date()
let birthday = new Date ("03/18/2022")
let daysToGo = Math.ceil(((birthday.getTime() - today.getTime()) / 86400000))
console.log(daysToGo)

// Adding space between activities in console
console.log(`\n\n`)
//Activity 4
let [space1, space2, space3, space4, space5, space6, space7, space8, space9] = ["o","x","x","o","x","o","x","x","o"];

let version1 = `   |   |   
 ${space1} | ${space2} | ${space3} 
   |   |   
 ---------
   |   |   
 ${space4} | ${space5} | ${space6}
   |   |   
 ---------
   |   |   
 ${space7} | ${space8} | ${space9}
   |   |   `

console.log(version1)