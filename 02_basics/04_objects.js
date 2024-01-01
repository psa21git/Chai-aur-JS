// const tinderUser = new Object()
const tinderUser = {
    // id: 12,
    // id : 32
}
// console.log(tinderUser.id); // if same key is present it will take the last value

tinderUser.id = "123abc"
tinderUser.name = "Sexy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "psa@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Richie",
            lastname: "pradhan"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname); // ? is for null safety check

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 2,
        email: "s@gmail.com"
    },
    {
        id: 3,
        email: "a@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js_a",
    price: "777",
    courseInstructor: "sreyanshu"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

