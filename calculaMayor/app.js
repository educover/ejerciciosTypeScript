function calculaMayor(x, y) {
    if (x > y) {
        console.log(x + ' es mayor que ' + y);
        return x;
    }
    else if (x < y) {
        console.log(x + ' es menor que ' + y);
        return y;
    }
}
var a = calculaMayor(4, 2);
console.log(a);
var b = calculaMayor(7, 59);
console.log(b);
