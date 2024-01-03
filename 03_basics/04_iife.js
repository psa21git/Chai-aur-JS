// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// here semicolon is important to execute another iife after it so always try to remember it

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('sreyanshu');
