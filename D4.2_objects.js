console.log("+++ Activity 1 +++")
//Activity 1
const person = {
    name: "Ian",
    age: 35,
    favSongs: ["Exit Music (For A Film)", "Grace"],
    sayHi() {
        return `Hello my name is ${this.name}`
    }
};

console.log(person.sayHi());

// Adding space between activities in console
console.log(`\n\n`)
console.log("+++ Activity 2 +++")
const pet = {
    name: "Woolfy",
    typeOfPet: "dog",
    age: 8,
    colour: "yellow",
    eat() {
        return `${this.name} is eating`;
    },
    drink() {
        return `${this.name} is drinking`;
    }
}
console.log(pet.eat())

// Adding space between activities in console
console.log(`\n\n`)
console.log("+++ Activity 3 +++")
const coffeeShop = {
    branch: "Stockport branch",
    drinks: [
        ["Americano", 2.50],
        ["Espresso", 2.20],
        ["Capuccino", 2.80],
        ["Bottled Water", 1.80],
        ["Pepsi", 2.25]], 
    food: [
        ["Scone", 3.80],
        ["Flapjack", 3.50],
        ["Soup of The Day", 4.50],
        ["Pain Au Chocolat", 3.90]
    ],
    drinksOrdered() {        
        return `Your drinks order at ${this.branch} is: ${this.drinks.map(x => x[0]).join(", ")}. Total price: £${this.drinks.reduce((a,b) => a + b[1],0).toFixed(2)}`;
    },
    foodsOrdered() {
        return `Your food order at ${this.branch} is: ${this.food.map(x => x[0]).join(", ")}. Total price: £${this.food.reduce((a,b) => a + b[1],0).toFixed(2)}`;
    },
}
console.log(coffeeShop.drinksOrdered());
console.log(coffeeShop.foodsOrdered());
