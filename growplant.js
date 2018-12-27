/**
 * Plant image.
 * 
 * @type {HTMLImageElement}
 */
const plant = document.getElementById("plant");

/**
 * Counter of water button clicks.
 * 
 * @type {number}
 */
let clickCount = 0;

function water() {
    // Increment the number of clicks
    clickCount = clickCount + 1;
    // clickCount += 1;
    // clickCount++;

    if (clickCount === 1) {
        plant.src = "images/plant2.png";
    } else {
        plant.src = "images/plant3.png";
    }
}