function miFuncion(num) {
    if (num < 7 || num > 30) {
        console.log('Debes introducir un numero entre 7 y 30, pollete');
        return;
    }
    var x = Math.round(num / 2);
    while (num > 0) {
        if (num > x) {
            console.log('*');
        }
        if (num === x) {
            console.log('******');
        }
        if (num < x) {
            console.log('*    *');
        }
        num--;
    }

}
miFuncion(20);
miFuncion(10);
miFuncion(15);
