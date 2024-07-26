/* theme changer */

const themeBtn = document.getElementById("themeBtn");
const bgContainer = document.getElementById("bgContainer");
const calBackground = document.getElementById("calBackground");
const hr = document.getElementById("horiLine");

let theme = "light";
themeBtn.addEventListener('click', () => {
    if(theme == "light"){
        themeBtn.textContent = "";
        themeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16"><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/></svg>`;
        bgContainer.classList.add("dark-mode");
        calBackground.classList.add("dark-cal-bg");
        calBackground.classList.remove("cal-background");

        hr.classList.add("dark-hori");
        hr.classList.remove("hori");

        theme = "dark";
    }else{
        themeBtn.textContent = "";
        themeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars" viewBox="0 0 16 16"><path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/><path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/></svg>`;
        bgContainer.classList.remove("dark-mode");
        calBackground.classList.remove("dark-cal-bg");
        calBackground.classList.add("cal-background");

        hr.classList.remove("dark-hori");
        hr.classList.add("hori");

        theme = "light";
    }
});

/* calculator */

const inputBox = document.getElementById("inputBox");

const allClear = document.getElementById("all-clear");
const clear = document.getElementById("clear");

const zero = document.getElementById("0");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");

const add = document.getElementById("+");
const subtract = document.getElementById("-");
const multiply = document.getElementById("x");
const divisor = document.getElementById("divi");
const division = document.getElementById("div");

const brac = document.getElementById("brac");
const dot = document.getElementById(".");
const equals = document.getElementById("=");

allClear.addEventListener('click', () => {
    inputBox.value = "";
});

nine.addEventListener('click', () => {
    inputBox.value += nine.textContent;
});

eight.addEventListener('click', () => {
    inputBox.value += eight.textContent;
});

seven.addEventListener('click', () => {
    inputBox.value += seven.textContent;
});

six.addEventListener('click', () => {
    inputBox.value += six.textContent;
});

five.addEventListener('click', () => {
    inputBox.value += five.textContent;
});

four.addEventListener('click', () => {
    inputBox.value += four.textContent;
});

three.addEventListener('click', () => {
    inputBox.value += three.textContent;
});

two.addEventListener('click', () => {
    inputBox.value += two.textContent;
});

one.addEventListener('click', () => {
    inputBox.value += one.textContent;
});

zero.addEventListener('click', () => {
    inputBox.value += zero.textContent;
});

dot.addEventListener('click', () => {
    inputBox.value += dot.textContent;
});

add.addEventListener('click', () => {
    inputBox.value += add.textContent;
});

multiply.addEventListener('click', () => {
    inputBox.value += multiply.textContent;
});

divisor.addEventListener('click', () => {
    inputBox.value += divisor.textContent;
});

division.addEventListener('click', () => {
    inputBox.value += division.textContent;
});

subtract.addEventListener('click', () => {
    inputBox.value += subtract.textContent;
});

clear.addEventListener('click', () => {
    inputBox.value = inputBox.value.toString().slice(0, -1);
});

let flag = 0;
brac.addEventListener('click', () => {
    if(flag == 0 || inputBox.value == ""){
        inputBox.value = "( " + inputBox.value;
        flag = 1;
    }else{
        inputBox.value += ") ";
        flag = 0;
    }
});

equals.addEventListener('click', () => {
    inputBox.value = eval(inputBox.value);
});