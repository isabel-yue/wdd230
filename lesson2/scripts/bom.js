const input = document.querySelector(`#favchap`); 
const button = document.querySelector(`button`);
const list = document.querySelector(`#list`);
const feedback = document.querySelector(`#feedback`);

button.addEventListener(`click`, () => {
    if (input.value){
        //temp: 
        console.log(`clicked`);
        feedback.textContent = ``;
    } else {
        input.focus();
        // give feedback to user
        feedback.textContent = `Please enter a Book and Chapter.`;    }
});


