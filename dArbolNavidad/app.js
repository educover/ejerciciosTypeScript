function ArbolNavidad(num) {
    if (num < 5) {
        console.log('La altura del arbol debe ser mayor de 5');
        return;
    }
    var b = num.toString();
    var c = '*';
    var d = new Array;
    var e = num / 2;
    var f = e + 1;
    var g = e - 1;
    console.log(d[e] = c);
    for (var i = 0; i < num + 1; i++) {
        d[f] = c;
        d[g] = c;
        f++;
        g--;
        console.log(d);
    }
}
ArbolNavidad(8);
