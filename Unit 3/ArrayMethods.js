let array = [];

function update() {
    const outputParagraph = document.getElementById('output');
    outputParagraph.innerHTML = '';
    array.reduce((acc, item, index) => {
        outputParagraph.innerHTML += `${index + 1}. ${item}<br>`;
    }, '');
}

function push() {
    const input = document.getElementById('input').value;
    array.push(input);
    update();
}

function pop() {
    array.pop();
    update();
}

function unshift() {
    const input = document.getElementById('input').value;
    array.unshift(input);
    update();
}

function shift() {
    array.shift();
    update();
}

function arrMap() {
    const input = document.getElementById('input').value;
    array = array.map(item => input + item);
    update();
}
