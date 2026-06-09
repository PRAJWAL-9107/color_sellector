

const box = document.querySelectorAll('.box');
const body = document.querySelector('body');
const one = document.querySelector('#red');
const two = document.querySelector('#blue');
const three = document.querySelector('#yellow');
const four = document.querySelector('#orangered');
const five = document.querySelector('#black');
const six = document.querySelector('#white');
const seven = document.querySelector('#purple');
const eight = document.querySelector('#chocolate');
const nine = document.querySelector('#greenyellow');
const ten = document.querySelector('#violet');
const eleven = document.querySelector('#gray');
const twelve = document.querySelector('#indigo');

const inputBox = document.createElement("input");
inputBox.type = "number";
inputBox.min = "1";
inputBox.max = "12";
inputBox.placeholder = "Enter your number here...";
inputBox.id = "inputBox"
document.body.appendChild(inputBox);


box.forEach(function (boxs) {
    boxs.addEventListener("click", function (color) {

        if (color.target.id === 'red') {
            body.style.background = 'red'
        };

        if (color.target.id === 'blue') {
            body.style.background = 'blue'
        };

        if (color.target.id === 'yellow') {
            body.style.background = 'yellow'
        };
        if (color.target.id === 'orangered') {
            body.style.background = 'orangered'
        };
        if (color.target.id === 'black') {
            body.style.background = 'black'
        };
        if (color.target.id === 'white') {
            body.style.background = 'white'
        };
        if (color.target.id === 'purple') {
            body.style.background = 'purple'
        };
        if (color.target.id === 'chocolate') {
            body.style.background = 'chocolate'
        };
        if (color.target.id === 'greenyellow') {
            body.style.background = 'greenyellow'
        };
        if (color.target.id === 'violet') {
            body.style.background = 'violet'
        };
        if (color.target.id === 'gray') {
            body.style.background = 'gray'
        };
        if (color.target.id === 'indigo') {
            body.style.background = 'indigo'
        };
    })
});