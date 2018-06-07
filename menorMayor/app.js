function miFuncion() {
    var ar = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ar[_i] = arguments[_i];
    }
    ar.sort();
    console.log('El numero menor es :' + ar[0]);
    console.log('El numero mayor es :' + ar[ar.length - 1]);
    var b = 0;
    for (var i = 0; i < ar.length; i++) {
        b += ar[i];
    }
    console.log('La suma de todos los elementos del array es: ' + b);
}
miFuncion(1, 2, 3);
miFuncion(9, 3, 6, 44, 7, 8);
miFuncion(3, 5, 1);
