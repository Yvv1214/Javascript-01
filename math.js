console.log("hello")

var whotogreet = "Yvv";

for(var i = 1; i <= 10; i = i + 1) {
    console.log( i + ":" + whotogreet + "!");
}



console.log("________________")
console.log("Countdown!!!")

for(var q = 10; q >= 0; q--) {

    if (q == 0) {
        console.log("Blast Off!");
    } else {
        console.log( q + "!");
    }
}



console.log("______________________")
console.log("Matching Numbers")

for ( var x = 1; x <= 20; x++) {
   
    if ( x % 3 == 0) {
        console.log(x + " Matched recipricol of 3!");
    } else {
        console.log(x);
    }
}



console.log("_________________")
console.log("This is evens")
var greetings = "hello there!";

for ( x = 0; x <= 10; x++) {
    if (x % 2 == 0) {
        console.log(x + ": " + greetings);
    }
}

console.log("______________");
console.log( "This is odd");

for ( x = 0; x <= 10; x++) {
    if (x % 2 != 0) {
        console.log( x + ": " + greetings);
    }
}

//Multiplication stuff------------------------

console.log("_______________")
console.log("Times Tables")

for ( x = 1; x <= 12; x++) {
    console.log("The " + x + "'s table");
    for (y = 1; y <= 12; y++) {
        console.log(x + "x" + y + "=" + (x*y))
    }
    if ( x != 12) {
        console.log("________________");
    }
}

