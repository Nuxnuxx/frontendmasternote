let calculString = "";
let calculStringOperation = "";
let operationMode = false;
let operation = "";

const calcul = document.querySelector(".calcul");
const backspace = document.querySelector(".backspace");
const clear = document.querySelector(".clear");
const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const addition = document.querySelector(".addition");
const substraction = document.querySelector(".substraction");
const equal = document.querySelector(".equal");

function refresh() {
  if (operationMode === false) {
    calcul.innerHTML = calculString;
  } else {
    calcul.innerHTML = calculStringOperation;
  }
}

function bckspace() {
  if (operationMode === false) {
    calculString = calculString.substring(0, calculString.length - 1);
  } else {
    calculStringOperation = calculStringOperation.slice(
      0,
      calculStringOperation.length - 1
    );
  }
  refresh();
}

function clean() {
  calcul.innerHTML = "0";
}

function empty() {
  calculString = "";
  calculStringOperation = "";
}

function addNumber(any) {
  if (operationMode === false) {
    calculString += any;
  } else {
    calculStringOperation += any;
  }
}

zero.addEventListener("click", () => {
  addNumber("0");
  refresh();
});

one.addEventListener("click", () => {
  addNumber("1");
  refresh();
});

two.addEventListener("click", () => {
  addNumber("2");
  refresh();
});

three.addEventListener("click", () => {
  addNumber("3");
  refresh();
});

four.addEventListener("click", () => {
  addNumber("4");
  refresh();
});

five.addEventListener("click", () => {
  addNumber("5");
  refresh();
});

six.addEventListener("click", () => {
  addNumber("6");
  refresh();
});

seven.addEventListener("click", () => {
  addNumber("7");
  refresh();
});

eight.addEventListener("click", () => {
  addNumber("8");
  refresh();
});

nine.addEventListener("click", () => {
  addNumber("9");
  refresh();
});

clear.addEventListener("click", () => {
  clean();
  empty();
});

backspace.addEventListener("click", () => {
  bckspace();
});

addition.addEventListener("click", () => {
  clean();
  operationMode = true;
  operation = "+";
});

substraction.addEventListener("click", () => {
  clean();
  operationMode = true;
  operation = "-";
});

equal.addEventListener("click", () => {
  if (operation === "-") {
    finalresult = parseInt(calculString) - parseInt(calculStringOperation);
  } else if (operation === "+") {
    finalresult = parseInt(calculString) + parseInt(calculStringOperation);
  }
  operationMode = false;
  calculString = finalresult;
  refresh();
});
