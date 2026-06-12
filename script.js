
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
    11: "brown",
    12: "indigo"
};

const inputBox = document.createElement("input");
inputBox.type = "number";
inputBox.min = "1";
inputBox.max = "12";
inputBox.placeholder = "Enter your number here...";
inputBox.id = "inputBox";
inputBox.value = "";

document.body.appendChild(inputBox);
inputBox.focus();

const randomNum = (Math.floor(Math.random() * 12) + 1);

document.getElementById("inputBox").addEventListener("input", (e) => {

    if (Number(inputBox.value) === randomNum) {

        document.body.style.backgroundColor = colors[e.target.value] || "grey";


        setTimeout(() => {
            location.reload();
        }, 1000);

    }

})
