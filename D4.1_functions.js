console.log("+++ Activity 1 +++")
//Activity 1
const factorial = (n) => {
    return ((n === 0) || (n === 1)) ?  1 : (n * factorial(n-1))
}
console.log(factorial(7))

// Adding space between activities in console
console.log(`\n\n`)
console.log("+++ Activity 2 +++")
let orderCount = 1;
const takeOrder = (topping1,topping2) => {
    console.log(`Order ${orderCount}: Pizza with ${topping1} and ${topping2}`);
    orderCount++;
}
takeOrder("pineapple", "ham");
takeOrder("pepperoni", "extra pepperoni")
takeOrder("basil", "oil")


// Adding space between activities in console
console.log(`\n\n`)
console.log("+++ Activity 3 +++")
const pin = 2468;
let incorrectPinAttempts = 0;
let currentBalance = 400.00

const cashMachine = (pinEntered, amountToWithdraw) => {
    if (incorrectPinAttempts >= 2) {
        return `You have been locked out of your account, please call to unlock your pin`
    } else if (pinEntered != pin) {
        incorrectPinAttempts++;
        return `Please re-enter your pin`
    } else {
        if (amountToWithdraw <= currentBalance) {
            currentBalance -= amountToWithdraw;
            return  `Beep beep boop boop, please withdraw your money. Your remaining balance is £${currentBalance}, have a nice day`
        } else {
            return `Your balance today is £${currentBalance}, please re-enter an amount below £${currentBalance}`
        }
    }
}

//withdrawing too much money
console.log(cashMachine(2468, 401))
//withdrawing correct amount
console.log(cashMachine(2468, 350))
//incorrect pin attempts
console.log(cashMachine(2460, 401))
console.log(cashMachine(2461, 401))
console.log(cashMachine(2462, 401))

