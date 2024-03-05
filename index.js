let signinBtn = document.querySelector('#signin-btn');
let formSignup = document.querySelector('#form-signup');;

let loginBtn = document.querySelector('#login-btn');
let formLogin = document.querySelector('#form-login');



// console.log(signinBtn);

signinBtn.addEventListener('click', function (e) {
	e.preventDefault();
	formSignup.style.right = "0";
	formLogin.style.right = "-300px";

})

loginBtn.addEventListener('click', function (e) {
	e.preventDefault();
	formLogin.style.right = "0";
	formSignup.style.right = "-300px";

})

let signupClose = document.querySelector('#signup-close');
signupClose.addEventListener('click', function (e) {
	formSignup.style.right = "-300px";
})

let loginClose = document.querySelector('#login-close');
loginClose.addEventListener('click', function (e) {
	formLogin.style.right = "-300px";
})

// signup-close