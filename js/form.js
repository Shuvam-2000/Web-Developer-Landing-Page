// fetching the nessecary tags with var
let signupBtn = document.getElementById("signupBtn");
let loginBtn = document.getElementById("loginBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

// onclick function for login
loginBtn.onclick = function (){
    nameField.style.maxHeight = "0";
    title.innerHTML = 'Login'
    signupBtn.classList.add("disabled-btn")
    loginBtn.classList.remove("disabled-btn")
}

// onclick function for signup
signupBtn.onclick = function (){
    nameField.style.maxHeight = "60px";
    title.innerHTML = 'Sign Up'
    signupBtn.classList.remove("disabled-btn")
    loginBtn.classList.add("disabled-btn")
}


