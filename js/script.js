
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

function display() {
    let name = document.forms["inquiriesForm"]["name"].value;
    let email = document.forms["inquiriesForm"]["email"].value;
    let choice = document.forms["inquiriesForm"]["radio"].value;
    let date = document.forms["inquiriesForm"]["date"].value;
    let message = document.forms["inquiriesForm"]["message"].value;
    document.getElementById("namespan").textContent = 'Hello '+name+', welcome to Wanefwan';
    document.getElementById("datespan").textContent = date;
    document.getElementById("messagespan").textContent = name;
    document.getElementById("emailspan").textContent = email;
    document.getElementById("aside").classList.remove("invisible");
    // console.log('Hello '+name+', welcome to Wanefwan');
    // document.getElementById("disp").innerHTML = "name";
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }
}