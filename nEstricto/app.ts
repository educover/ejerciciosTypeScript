
function miEstricto(x:number):string{
    let b:number=x/2;
    let c:string=x.toString();
    var bool:boolean=false;

    for (let i = b; i > -1; i--) {
       if(i===1||i===3||i===5){
           bool=true;
       }
    }
    for (let i = b+1; i < x+1; i++) {
        if(i===1||i===3||i===5){
            bool=false;
        }   
    }
    if(bool){
        return 'Numero estricto!';
    } else {
        return 'Numero no estricto!'
    }
}
console.log(miEstricto(12349876));
console.log(miEstricto(123439851));
console.log(miEstricto(987654321));
console.log(miEstricto(139871));