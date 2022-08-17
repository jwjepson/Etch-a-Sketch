const body = document.querySelector("body");

function changeSize() {
    size = prompt("Enter a size between 1 and 100");
    if (size <= 0 || size > 100) {
        alert("Incorrect size");
        changeSize();
    }
    removeGrid();
    createGrid(size);
}

function createGrid(size = 16) {
    const container = document.createElement("div");
    container.classList.add("grid-container");
    body.appendChild(container);
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            const column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
        }
    }
    black();
}

function removeGrid() {
    grid = document.querySelector(".grid-container");
    grid.remove();
}

createGrid();

function randomColor() {
    const randomColorButton = document.querySelector(".random-color");
    randomColorButton.style.backgroundColor = "lightgray";

    const blackButton = document.querySelector(".black");
    blackButton.style.backgroundColor = "white";

    squares = document.querySelectorAll(".column");
    squares.forEach(square => square.addEventListener("mouseover", () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        square.style.backgroundColor = "#" + randomColor;
    }));
}

function black() {
    const blackButton = document.querySelector(".black");
    blackButton.style.backgroundColor = "lightgray";

    const randomColorButton = document.querySelector(".random-color");
    randomColorButton.style.backgroundColor = "white";

    squares = document.querySelectorAll(".column");
    squares.forEach(square => square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    }));
}

function clear() {
    squares.forEach(square => square.style.backgroundColor = "white");
}

const sizeButton = document.querySelector(".change-size");
sizeButton.addEventListener("click", changeSize);

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clear);

const blackButton = document.querySelector(".black");
blackButton.addEventListener("click", black);

const randomColorButton = document.querySelector(".random-color");
randomColorButton.addEventListener("click", randomColor);