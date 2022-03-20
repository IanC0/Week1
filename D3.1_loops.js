console.log("+++ Activity 1 +++")
//Activity 1
let filmList = ["Indiana Jones", "Star Wars", "Sicario", "Ex_Machina", "Interstellar"]
filmList.push("The Godfather","Jaws")
for(let i = 0; i < filmList.length; i++) {
    console.log(filmList[i])
}

// Adding space between activities in console
console.log(`\n\n`)
console.log("+++ Activity 2 +++")
//Activity 2
for(let i = 0; i < 6; i++) {
    console.log(Math.floor(Math.random() * 50) + 1)
}

// Adding space between activities in console
console.log(`\n\n`)
console.log("+++ Activity 3 +++")
//Activity 3
for(let i = 9; i >= 0; i--) {
    console.log(i)
}

// Adding space between activities in console
console.log(`\n\n`)
console.log("+++ Activity 4 +++")
//Activity 4
let filmArray = ["Indiana Jones", "Star Wars", "Sicario", "Ex_Machina"]
for(let i = 0; i < filmArray.length; i++) {
    console.log(filmArray[i]);
    if (i == 2) {
        if (filmArray[i] == "Ghostbusters") {
            console.log("Yay it’s Ghostbusters")
        } else {
            console.log("Boo! we want Ghostbusters!")
        }
    }
}

// Adding space between activities in console
console.log(`\n\n`)
console.log("+++ Activity 5 +++")
//Activity 5
for(let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 30) + 1;
    if (randomNumber % 7 == 0) {
       console.log(`The random number is ${randomNumber}, it is divisible by 7`)
    } else {
        console.log(`The random number is ${randomNumber}, it is not divisible by 7`)
    }
}

// Adding space between activities in console
console.log(`\n\n`)
console.log("+++ Activity 6 +++")
//Activity 6
let bobsFollowers = ["John", "Paul", "George", "Ringo"];
let hannahsFollowers = ["John", "Noel", "Liam", "Paul"];
for(let i = 0; i < bobsFollowers.length; i++) {
    for(let j = 0; j < hannahsFollowers.length; j++) {
        if (bobsFollowers[i] == hannahsFollowers[j]) {
            console.log(`${bobsFollowers[i]} appears in both arrays`)
        }
    }
}

// Adding space between activities in console
console.log(`\n\n`)
console.log("+++ Activity 7 +++")
//Activity 7
//while statement executes the statement whilst the condition is true
//  PRO: can be useful where the number of loops required are unknown
//  CON: requires a variable to have been created earlier in the code for increments
let whileArray = []
let count = 4
while(count < 12){
    whileArray.push(count)
    count += 4
}
console.log(`whileArray: [${whileArray}]`)


//do...while statement executes the statement whilst the condition is true. 
// PRO: unlike the while statement the do...while evaluates the condition after
// the code has ran resulting in an execution of the statement even when the
// condition hasn't been met once.
// CON: statement executing at least once can be an undesireable outcome
let doWhileArray = []
let countDoWhile = 15
do {
    doWhileArray.push(countDoWhile)
    countDoWhile += 4
} while(countDoWhile < 12)
console.log(`doWhileArray: [${doWhileArray}]`)

//for loop executes a statement whilst the condition is true. This loop 
// requires the creation of a variable in the evaluation (let = i), unlike
// the while loop that modifies an existing variable already present in the code
// PRO: more common that while/do...while loops, can be tidier/easier to read
// CON: the condition's limit needs to be know in advance of the loop being executed
let forLoopArray = []
for(let i = 4; i < 12 ; i += 4) { 
    forLoopArray.push(i)
}
console.log(`forLoopArray: [${forLoopArray}]`)
