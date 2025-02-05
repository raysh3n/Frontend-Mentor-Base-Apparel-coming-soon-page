'use strict'

const form = document.querySelector('form');
const input = form.querySelector('input');
const errorIcon = document.querySelector('.error-icon');
const message = document.querySelector('.message');
// const emailPattern =/^[a-zA-Z0-9.*%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
const emailPattern = /^[a-zA-Z0-9.*%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

var messageValue = '';
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // const result = new FormData(event.target).get("email");
    const result = input.value.trim(); // Get input directly


    const isValid = emailPattern.test(result);

 
    message.textContent = isValid ? 'Submitted' : result ? 'Please provide a valid email' : 'No email provided';
    const newHeight = window.innerHeight;
    
    //style
    input.style.border = `2px solid ${isValid ? 'green' : 'hsl(0,93%,68%)'}`
    message.style.color = isValid ? 'green' : 'hsl(0,93%,68%)'

    errorIcon.classList.toggle('show', !isValid);




});