var variable = document.getElementById("container");
let i = 1;

while (i <= 5) {
    var newParagraph = document.createElement("p");
    var text = document.createTextNode("Loop #: "+ i);
    newParagraph.appendChild(text);
    var element = document.getElementById("container")
    element.appendChild(newParagraph);
    i = i + 1;
}

function colorChange() {
    document.getElementById("container").style.backgroundColor = "red";
    document.body.style.backgroundColor = "yellow"; 
}