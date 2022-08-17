const body = document.querySelector("body");

function changeSize() {
    let size = prompt("What size would you like?");
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
    draw();
}

function removeGrid() {
    grid = document.querySelector(".grid-container");
    grid.remove();
}

createGrid();
draw();

function draw() {
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
