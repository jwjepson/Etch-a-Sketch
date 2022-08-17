const body = document.querySelector("body");
const container = document.createElement("div");
container.classList.add("grid-container");

body.appendChild(container);

function createGrid() {
    for (let i = 0; i < 16; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 0; j < 16; j++) {
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