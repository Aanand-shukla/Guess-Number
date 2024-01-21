const main = document.querySelector(".main");
const again = document.querySelector(".again .btn");
const formArea = document.querySelector(".formArea");
let formValue = document.querySelector(".formValue");
let displayValue = document.querySelector(".enteredNumber span p");
let aside = document.querySelector(".aside");
let para = document.createElement("p");
let para1 = document.createElement("p");
const X_mark = document.querySelector(".fa-xmark");
let para2 = document.createElement("p");
const alerts = document.querySelector(".alert");
let i = 1;
const number = Math.trunc(Math.random() * 300) + 1;
displayValue.innerHTML = `?`;
// console.log(X_mark);
let run = true;
const increment = () => {
  let values = parseInt(formValue.value);
  if (i <= 10 && run) {
    if (values > number) {
      aside.appendChild(
        para
      ).innerHTML = `You Entered <span> ${values} </span> is Greater than the actual number `;
      displayValue.innerHTML = values;
    } else if (values < number) {
      aside.appendChild(
        para
      ).innerHTML = `You Entered <span> ${values} </span> is Small than the actual number `;
      displayValue.innerHTML = values;
    } else {
      run = false;
      alerts.classList.remove("hidealert");
      alerts.appendChild(para).innerHTML = ` Hurray 🥇 you find Correct Number`;
      alerts.appendChild(para2).innerHTML = `You got ${
        10 - i
      } marks out of ${10}`;
      main.style.backgroundColor = "green";
      displayValue.innerHTML = number;
    }

    aside.appendChild(para1).innerHTML = `You tried <span> ${i} </span> times `;
    i++;
    console.log(i);
  } else {
    run = false;
    aside.appendChild(para).innerHTML = `You Loss 😩`;
    console.log(i);
    main.style.backgroundColor = " rgb(255, 30, 30)";
  }
};

const handleform = (e) => {
  e.preventDefault();
  increment();
};
X_mark.addEventListener("click", () => {
  alerts.classList.add("hidealert");
});
again.addEventListener("click", () => {
  displayValue.innerHTML = ``;
  formValue.value = "";
  aside.appendChild(para).innerHTML = "";
  aside.appendChild(para1).innerHTML = "";
  main.style.backgroundColor = "rgb(255, 137, 157)";
  run = true;
  i = 1;
});

formArea.addEventListener("submit", handleform);
