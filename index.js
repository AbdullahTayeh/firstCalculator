const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));


document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2


let sumParagraph = document.getElementById("sum-el")
function add(){
    console.log(num1 + num2)
    sumParagraph.textContent = num1+num2
}

let substractParagraph = document.getElementById("sum-el")
function substract(){
    console.log(num1 - num2)
    substractParagraph.textContent = num1-num2
}

let divideParagraph = document.getElementById("sum-el")
function divide(){
    console.log(num1 / num2)
    sumParagraph.textContent = num1/num2
}

let multiplyParagraph = document.getElementById("sum-el")
function multiply(){
    console.log(num1 * num2)
    sumParagraph.textContent = num1*num2
}
