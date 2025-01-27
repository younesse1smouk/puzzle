let rows = 3;
let columns = 3; // Correction de l'orthographe
let currTile; // Correction de l'orthographe
let otherTile;
let turns = 0;

// Array de 9 éléments (3x3) au lieu de 10
let imgOrder = ["1", "2", "3", "4", "5", "6", "9", "4", "1"];

window.onload = function () {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift() + ".jpg";
            tile.draggable = true; // Rendre l'image glissable

            // Ajout des événements de glisser-déposer
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter);
            tile.addEventListener("dragleave", dragLeave); // Correction de draleave
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragend", dragEnd);

            // Correction de "boad" à "board"
            document.getElementById("board").appendChild(tile);
        }
    }
};

// Fonctions de glisser-déposer nécessaires
function dragStart() {
  currTile = this;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {
  
}

function dragDrop() {
  otherTile = this;
}

function dragEnd() {
  let currCoords = currTile.id.split("-");
  let r = parseInt(currCoords[0]);
  let c = parseInt(currCoords[1]);

  let otherCoords = otherTile.id.split("-");
  let r2 = parseInt(otherCoords[0]);
  let c2 = parseInt(otherCoords[1]);

  // Vérifier si le mouvement est adjacent
  if ((Math.abs(r - r2) === 1 && c === c2) || 
      (Math.abs(c - c2) === 1 && r === r2)) {
      
      // Échanger les images
      let currImg = currTile.src;
      let otherImg = otherTile.src;
      currTile.src = otherImg;
      otherTile.src = currImg;

      turns++;
      document.getElementById("turns").innerText = turns;
  }
}