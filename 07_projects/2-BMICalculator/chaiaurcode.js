const form = document.querySelector('form')
// const calculate = document.querySelector('button')

form.addEventListener('submit', (event)=>{

    event.preventDefault() // important very much in submit type events

    const height = parseInt(document.querySelector('#height').value) // to get value in INT
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    
    if (height === '' || height <= 0 || isNaN(height)) {
        result.innerHTML = `<span>Please enter a valid height</span>`;
    }
    else if (weight === '' || weight <= 0 || isNaN(weight)) {
        result.innerHTML = `<span>Please enter a valid weight</span>`;
    }
    else{
        const bmi = ((weight/((height**2)/10**4))).toFixed(2)
        // result.innerHTML = `${bmi}`
        if (bmi<18.6){
            result.innerHTML = `<span>UNDER_WEIGHT : ${bmi}</span>`;
        }
        else if (bmi>24.9) {
            result.innerHTML = `<span>OVER_WEIGHT : ${bmi}</span>`;
        }
        else{
            result.innerHTML = `<span>NORMAL : ${bmi}</span>`;
        }
        
    }
    
})