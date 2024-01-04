// console.log("PSA CHai theme");

// if (2 === "2") {
//     console.log("executed if");
// }

// > < >= <= == != === !==
// === also checks type 2 != "2"
// == => 2 == "2"


const isUserLoggedIn = true
const temp = 44

if (temp < 50) {
    console.log("temperature less than 50");
}
else {
    console.log("temperature greater than 50");
}

const balance = 100

if (balance > 500) console.log("test"),console.log("test2");
else console.log("less than 500");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}