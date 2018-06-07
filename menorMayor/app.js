function miFuncion() {
    var ar = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ar[_i] = arguments[_i];
    }
    var a = 0;
    var b = 0;
    var c = 0;
    for (var i = 0; i < ar.length; i++) {
        if (ar[i] > ar[i + 1]) {
            a = ar[i];
        }
        if (a < ar[i]) {
            a = ar[i];
        }
        if (ar[i] > ar[i + 1]) {
            b = ar[i];
        }
        c += ar[i];
    }
    console.log('El numero menor introducido es: ' + a);
    console.log('El numero mayor introducido es: ' + b);
    console.log('Sumatorio: ' + c);
}
miFuncion(1, 2, 3);
//miFuncion(9,3,6,44,7,8);
//miFuncion(3,5,1);
