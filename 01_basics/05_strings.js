const name = "P Sreyanshu Anupam"
let repoCount = 4

console.log(`My name is ${name.toUpperCase()} and my repocount is ${repoCount}`)

const gameName = new String ("PSA")
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)

console.log(name.charAt(3))
console.log(name.indexOf('r'))

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Sreyanshu    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://psa.com/sreyanshu%20pradhan"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(name.split(' ')); // returns an array