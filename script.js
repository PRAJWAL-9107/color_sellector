const box = document.querySelectorAll('.box');
const body = document.querySelector('body');
// colors numbers
const colors = {
    1: "red",
    2: "blue",
    3: "yellow",
    4: "orangered",
    5: "black",
    6: "white",
    7: "purple",
    8: "chocolate",
    9: "greenyellow",
    10: "violet",
    11: "gray",
    12: "indigo"
};

const inputBox = document.createElement("input");
inputBox.type = "number";
inputBox.min = "1";
inputBox.max = "12";
inputBox.placeholder = "Enter your number here...";
inputBox.id = "inputBox";
document.body.appendChild(inputBox);

document.inputBox.addEventListener("input",(e) => {
    document.body.style.backgroundColor = colors[e.target.value] || "white";
})

box.forEach(function (boxs) {
    boxs.addEventListener("click", function (color) {
        
        if (color.target.id === 'red') {
            body.style.background = 'red'
            console.dir(color.target)
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