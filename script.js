const grid = document.getElementById("grid");
const gridSize = document.getElementById("grid-size");
const setGridBtn = document.getElementById("setGrid");
const drawColorInput = document.getElementById("color-picker")

function createGrid(size) {
    grid.innerHTML = ""
    for(let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");

        cell.classList.add("cell");
        cell.style.flex = `0 0 calc(100% / ${size})`;
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = drawColorInput.value;
        })

        grid.appendChild(cell);

    }
}

setGridBtn.addEventListener("click", () => {
    const size = parseInt(gridSize.value);

    if(size >= 16 && size <= 100) {
        createGrid(size);
    } else {
        alert("Enter number between 16 and 100");
    }
});
createGrid(50)