// objects are mutable

// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Sreyanshu",
    "full name": "P Sreyanshu Anupam",
    [mySym]: "mykey1",
    age: 19,
    location: "Talcher",
    email: "psa@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "psa@chatgpt.com"
// Object.freeze(JsUser) // after freeze no more changes can be made
JsUser.email = "psa@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

JsUser.greeting()
JsUser.greetingTwo()

console.log(JsUser)