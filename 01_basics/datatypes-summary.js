//Primitive datatypes
// 7 tipi - string, number, booleen, null, undefined, symbol, BigInt

const score = 100 // typeof number
const scoreValue = 100.8 // typeof number

const isLoggedIn = false // typeof boolean
const outSideTemp = null // typeof object
let userEmail; // let userEmail = undefined is the same // typeof nundefined

const id = Symbol('123') // typeof symbol
const anotherId = Symbol('123') 

console.log(id === anotherId)


const bigNumber = 3456543576654356754n

// Non Primitive or refrence

// Arrays, Object, function

const heros = ["saktiman", "spiderman", "harrypotter"] // arrays
let myObj = {
    name: "Ishak",
    age: 34
}

const myFunction = function() {
    console.log("hello world!");
}

console.log(typeof bigNumber);