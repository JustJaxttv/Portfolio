function calculateSquare() {
    var inputNumber = document.getElementById("inputNumber").value;

    var square = inputNumber * inputNumber;

    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "The square of " + inputNumber + " is " + square;
  }