function newUser() {
    document.getElementById('new').disabled = false;
    document.getElementById('existing').disabled = true;
}

function existingUser() {
    document.getElementById('new').disabled = true;
    document.getElementById('existing').disabled = false;
}

function newLogin() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;

    localStorage.setItem('user', user);
    localStorage.setItem('pass', pass);
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);

    alert("Welcome " + user);

}

function login() {
    const storedUser = localStorage.getItem('user');
    const storedPass = localStorage.getItem('pass');

    const userEntry = document.getElementById('username').value;
    const passEntry = document.getElementById('password').value;

    if (userEntry === storedUser && passEntry === storedPass) {
        alert("Welcome back " + userEntry);
}
    else {
    alert('Invalid Login');
}
}




// function handleClick(RadioElement) {
//     var sel = document.getElementById('ordertype');
//     var selectedValue = RadioElement.value;
//     if (selectedvalue =="yes") {
//         alert("Thank you for your" + sel.value + " order.");

//     }
//     else {
//         alert("please call customer service and use order number" + orderNumber);
//     }
// }