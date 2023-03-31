function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

makeCreature(200, 200, 'pink', 'red')
makeCreature(500, 300, 'teal', 'purple')
makeCreature(500, 100, 'yellow', 'green')
  

    // your creature:
    fill('yellow')
    circle(300, 300, 300)

    fill('black')
    ellipse(250, 250, 30, 40)
    ellipse(350, 250, 30, 40)


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}

function makeCreature(x, y, fillColor, eyeColor) {
    // your creature: 
    fill(fillColor);
    // face:
    circle(x, y, 300);

    fill('black');
    ellipse(x - 50, y - 50, 30, 40);
    ellipse(x + 50, y - 50, 30, 40);
}