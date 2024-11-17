import { handleSignUp } from '../../controllers/auth/sign_up.js';
const form = document.querySelector('#sign-up-form');
// console.log(form);
handleSignUp();
form.addEventListener('submit', handleSignUp);
