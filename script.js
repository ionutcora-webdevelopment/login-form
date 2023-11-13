
const menuBtn = document.getElementById('menu-btn-toggle');
const menuList = document.querySelector('ul');
let isClicked = false;

menuBtn.addEventListener('click', () => {
    if(!isClicked) {
        menuList.style.top = '102%';
        isClicked = true;
    } else {
        menuList.style.top = '-500%';
        isClicked = false;
    }
}, false);

const loginBtn = document.getElementById('login-btn');
const loginForm = document.getElementById('login-form');
const loginExitBtn = document.getElementById('login-exit');

loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    loginForm.style.display = 'block';
});

loginExitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
});

const registerBtn = document.getElementById('register-btn');
const registerForm = document.getElementById('register-form');
const registerExitBtn = document.getElementById('register-exit');
const registerLoginBtn = document.getElementById('register-login-btn');

registerBtn.addEventListener('click', (x) => {
    x.preventDefault();
    registerForm.style.display = 'block';
    loginForm.style.display = 'none';
});

registerExitBtn.addEventListener('click', (y) => {
    y.preventDefault();
    registerForm.style.display = 'none';
});

registerLoginBtn.addEventListener('click', (z) => {
    z.preventDefault();
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
});
