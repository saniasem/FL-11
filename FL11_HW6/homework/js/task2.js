let a = parseInt(prompt('Enter the length of side A'));
let b = parseInt(prompt('Enter the length of side B'));
let c = parseInt(prompt('Enter the length of side C'));

if( a + b > c && a + c > b && b + c > a ) {
    if( a === b && b === c) {
        console.log('Eequivalent triangle');
    } else if (a === b || b === c || a === c) {
        console.log('Isosceles triangle');
    } else {
        console.log('Normal triangle');
    }
} else {
    console.log('Triangle doesn’t exist');
}

