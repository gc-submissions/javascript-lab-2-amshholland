// Additional functions *******

printSquare(3);
printTriangle(4);
// This function has a parameter for width. It logs a square shape to the
// console based on the width parameter.
function printSquare(width) {
    for (let i = 0; i < width; i++) {
        for (let n = 0; n < width; n++) {
            console.log('#');
        }
        console.log('\n');
    }
}

// This function has a parameter for width. It logs a square shape to the
// console based on the width parameter
function printTriangle(width) {
    for (let i = 0; i < width; i++) {
        for (let n = -1; n < i; n++) {
            console.log('#');
        }
    }
    console.log('\n');
}
