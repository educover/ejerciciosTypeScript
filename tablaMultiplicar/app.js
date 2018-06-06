function miFuncion() {
    var str = prompt('Enter any value in below', 'Introduce un numero');
    var num = parseInt(str);
    for (var i = 0; i < 11; i++) {
        $('.mult').append($("<li class=\"list-group-item\">" + num + "x" + i + "=" + num * i + "</li>"));
    }
}
;
$(function () {
    miFuncion();
});
