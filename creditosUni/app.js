window.onload = (function misCreditos() {
    var uni = this.prompt('En que uni estudias', '');
    var div = document.getElementById("1");
    switch (uni) {
        case 'madrid':
            var creditos = document.createTextNode('se convalidan 30 creditos');
            document.body.insertBefore(creditos, div);
            break;
        case 'murcia':
            var creditos = document.createTextNode('se convalidan 30 creditos');
            document.body.insertBefore(creditos, div);
            break;
        case 'alicante':
            var creditos = document.createTextNode('no se convalidan creditos');
            document.body.insertBefore(creditos, div);
            break;
        case 'valencia':
            var creditos = document.createTextNode('se convalidan 50 creditos');
            document.body.insertBefore(creditos, div);
            break;
        case 'granada':
            var creditos = document.createTextNode('se convalidan 50 creditos');
            document.body.insertBefore(creditos, div);
            break;
        case 'cordoba':
            var creditos = document.createTextNode('se convalidan 50 creditos');
            document.body.insertBefore(creditos, div);
            break;
        default:
            var error = document.createTextNode('La ciudad escogida no esta en nuestra base de datos');
            document.body.insertBefore(error, div);
            break;
    }
});
