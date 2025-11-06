
// console.log('Hello World');
// welcomeMessage()

function welcomeMessage() {
    let name = prompt("Plese enter your name: ");
    if (name !='null'){
        document.getElementById('welcome-msg').innerHTML = 'Hello '+name+', welcome to Wanefwan'  
    }
    console.log('Hello '+name+', welcome to Wanefwan')
}

function formValidation() {

}