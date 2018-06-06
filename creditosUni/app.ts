

window.onload = (function misCreditos():void{
    let uni:string = this.prompt('En que uni estudias', '');
    var div:HTMLElement = document.getElementById("1"); 
    switch (uni) {
        case 'madrid':
            var creditos:Text = document.createTextNode('se convalidan 30 creditos')
            document.body.insertBefore(creditos, div);
            break;
        case 'murcia':
            var creditos:Text = document.createTextNode('se convalidan 30 creditos')
            document.body.insertBefore(creditos, div);
            break;
        case 'alicante':
            var creditos:Text = document.createTextNode('no se convalidan creditos')
            document.body.insertBefore(creditos, div);
            break;

        case 'valencia':
            var creditos:Text = document.createTextNode('se convalidan 50 creditos')
            document.body.insertBefore(creditos, div);
            break;

        case 'granada':
            var creditos:Text = document.createTextNode('se convalidan 50 creditos')
            document.body.insertBefore(creditos, div);
            break;

        case 'cordoba':
            var creditos:Text = document.createTextNode('se convalidan 50 creditos')
            document.body.insertBefore(creditos, div);
            break;
        
    
        default:
            var error:Text = document.createTextNode('La ciudad escogida no esta en nuestra base de datos')
            document.body.insertBefore(error, div);
         
            break;
    }
})