let a1 = parseInt(prompt('Enter coordinate a1 of point A'));
let a2 = parseInt(prompt('Enter coordinate a2 of point A'));
let b1 = parseInt(prompt('Enter coordinate b1 of point B'));
let b2 = parseInt(prompt('Enter coordinate b2 of point B'));
let c1 = parseInt(prompt('Enter coordinate c1 of point C'));
let c2 = parseInt(prompt('Enter coordinate c2 of point C'));
const divider = 2;

let a = (a1 + a2) / divider;
let b = (b1 + b2) / divider;
let c = (c1 + c2) / divider;
let midpoint = (a + b) / divider;

if(c === midpoint) {
    console.log(true);
} else {
    console.log(false);
}
