const body = document.querySelector("body");
const container = document.createElement("div");
container.classList.add("grid-container");

body.appendChild(container);

function changeSize() {
    let size = prompt("What size would you like?");
    createGrid(size);
}

function createGrid(size = 16) {
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
}

createGrid();

squares = document.querySelectorAll(".column");
squares.forEach(square => square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "black";
}));

sizeButton = document.querySelector(".change-size");
sizeButton.addEventListener("click", changeSize);