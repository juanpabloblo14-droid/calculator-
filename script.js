//  DOM ELEMENTS 

const numberInput = document.getElementById("num1");
const numberInput2 = document.getElementById("num2");
const btnAdd = document.getElementById("addBtn");
const btnsubtract = document.getElementById("subtractBtn");
const btnmulti = document.getElementById("multiplyBtn");
const btndiv = document.getElementById("divideBtn");
const displayResul = document.getElementById("resultDisplay");

//CALCULATION OPERATION 
function calculate(operator) {
    let num1 = Number(numberInput.value);
    let num2 = Number(numberInput2.value);
    let result;
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num1 / num2;
    }
    displayResul.textContent = result
};

//BUTTONS
btnAdd.addEventListener("click", function () {
    calculate("+");
});

btnsubtract.addEventListener("click", function () {
    calculate("-");

});

btnmulti.addEventListener("click", function () {
    calculate("*");

});

btndiv.addEventListener("click", function () {
    calculate("/");

});