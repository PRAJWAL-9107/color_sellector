
// color numbers

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

document.getElementById("inputBox").addEventListener("input",(e) => {
    
    document.body.style.backgroundColor = colors[e.target.value] || "white";
})
