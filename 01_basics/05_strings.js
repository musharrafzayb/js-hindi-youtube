const name = "Musharraf"
const repoCount = 39
console.log(name + repoCount + " Value"); // although this is not followed in professional web designing
console.log(`Hello this is ${name} and my repocount is ${repoCount} and i am value`);// string interpolation - looks more professional and used widly when doing backend


const gameName = new String("Musharraf-hyd-ssm")
console.log(gameName[2])

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf("A"));


const newString = gameName.substring(0, 5) // it will take the value from 0 i.e. M to 4th value i.e. a. It doesn't take the 5th value
console.log(newString);

const anotherString = gameName.slice(-10, 5)
console.log(anotherString);

const stringOne = "      Buongiorno   "
console.log(stringOne.trim());

const url = "https://google.com%20facebook" 

console.log(url.replace("%20", "-")); // https://google.com-facebook

console.log(url.includes("f"));

console.log(gameName.split('-'));