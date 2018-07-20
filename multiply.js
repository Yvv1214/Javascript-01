
for (x = 2; x < 20; x++) {
    if (x % 2 == 0) {
        console.log( "EVEN! " + x);
    } else {
        console.log(x);
    }
}

//Comments: ++ is counting forward, -- is backwards, % = divisible by, == is equal, != is not equal.

console.log("__________________")
console.log("Divisible of 3's")
for ( x = 10; x <= 20; x++) {
    if ( x % 3 == 0) {
        console.log(x + ": Divisible of 3")
    } else {
        console.log(x);
    }
}

// multiplication stuff

for ( x = 1; x <= 11; x++) {
    console.log("The " + x + "'s table");
    for ( y = 1; y <= 11; y++) {
        console.log(x + "Multiplied by " + y + "= " + (x*y));
    } if ((x*y) == 11) {
        console.log( "here is the condition")
    }
}

//Remainder and division

for ( x = 1; x <= 5; x++) {
    console.log("x/2 " + (x/2) + "remainder" + (x % 2))
}