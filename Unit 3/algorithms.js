class Leaf {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const head = new Leaf(10);
head.left = new Leaf(5);
head.right = new Leaf(15);
head.left.left = new Leaf(3);
head.left.right = new Leaf(7);
head.right.left = new Leaf(12);
head.right.right = new Leaf(18);
head.left.left.left = new Leaf(2);
head.left.left.right = new Leaf(4);
head.left.right.right = new Leaf(8);
head.right.right.left = new Leaf(16);
head.right.right.right = new Leaf(20);

let depth = [];
let breadth = [];

function depthFirstSearch(node = head) {
    if (node === null) return;
    depth.push(node.value);
    depthFirstSearch(node.left);
    depthFirstSearch(node.right);
}

function breadthFirstSearch() {
    let queue = [head];
    while (queue.length > 0) {
        let current = queue.shift();
        breadth.push(current.value);
        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }
}

function displayResults(array) {
    document.getElementById("output").innerText = array.join(" -> ");
}

depthFirstSearch();
displayResults(depth);
breadthFirstSearch();
displayResults(breadth);
