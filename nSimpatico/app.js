function miSimpatic(x) {
    var b = x.toString(2);
    for (var i = 0; i < b.length; i++) {
        if (b[i] === b[i + 1]) {
            return 'Numero no simpatico!';
        }
    }
    return 'Numero simpatico!';
}
console.log(miSimpatic(42));
console.log(miSimpatic(84));
console.log(miSimpatic(46));
