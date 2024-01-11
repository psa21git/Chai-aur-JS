const buttons = document.querySelectorAll('.button')
// console.log(buttons);

const body = document.querySelector("body")

buttons.forEach( (button)=>{
    console.log(button);
    button.addEventListener('click', (event) => {
        console.log(event);
        console.log(event.target);
        buttons.forEach((button)=>{
            if (button.id === event.target.id) {
                body.style.backgroundColor = event.target.id
            }
        })
    } )
} )

