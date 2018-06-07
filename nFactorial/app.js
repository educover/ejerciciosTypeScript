function miFactorial(x) {
    var b = 1;
    for (var i = x; i > 0; i--) {
        b *= i;
    }
    return b;
}
console.log(miFactorial(5));
console.log(miFactorial(3));
console.log(miFactorial(2));
