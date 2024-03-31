const logInForm = document.querySelector("#login-form");
const logInInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS_NAME = "hidden"
const USER_NAME_KEY = "userName"

function onLogInSubmit(event){
    // 로그인 창 숨기기
    event.preventDefault();
    console.log(logInInput.value);
    logInForm.classList.add(HIDDEN_CLASS_NAME);

    // 인사 전하기
    const userName = logInInput.value;
    paintGreetings(userName);

    // 유저 이름 저장하기
    window.localStorage.setItem(USER_NAME_KEY, userName);

}

function paintGreetings(username){
    greeting.innerText = `Hi there, nice to meet you ${username}`;
    greeting.classList.remove(HIDDEN_CLASS_NAME);
}


const savedUserName = window.localStorage.getItem(USER_NAME_KEY);

if (savedUserName === null) {
    // show form
    logInForm.classList.remove(HIDDEN_CLASS_NAME);
    logInForm.addEventListener('submit', onLogInSubmit);
} else {
    // show greeting
    paintGreetings(savedUserName);
}



