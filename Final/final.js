function calculateSquare() {
    var inputNumber = document.getElementById("inputNumber").value;

    var square = inputNumber * inputNumber;

    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "The square of " + inputNumber + " is " + square;
  }

  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
    }

    insert(data) {
      let newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.display();
    }

    search(data) {
        let current = this.head;
        while (current) {
          if (current.data === data) {
            return true;
          }
          current = current.next;
        }
        return false;
      }

      display() {
        let current = this.head;
        let listString = "";
        while (current) {
            listString += current.data + " -> ";
            current = current.next;
        }
        listString += "null";
        document.getElementById("listDisplay").innerText = listString;
     }
    }

    let linkedList = new LinkedList();

    function insertNode() {
        let insertValue = document.getElementById("insertValue").value;
        if (insertValue.trim() !== "") {
          linkedList.insert(insertValue);
        } else {
          alert("Please enter a valid value to insert.");
        }
      }

    function searchNode() {
        let searchValue = document.getElementById("searchValue").value;
        if (searchValue.trim() !== "") {
          let searchResult = linkedList.search(searchValue);
          let resultParagraph = document.getElementById("searchResult");
          if (searchResult) {
            resultParagraph.innerText = `Value ${searchValue} found in the list.`;
          } else {
            resultParagraph.innerText = `Value ${searchValue} not found in the list.`;
          }
        } else {
          alert("Please enter a valid value to search.");
        }
      }