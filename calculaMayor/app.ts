

function calculaMayor(x:number, y:number):number{
    if(x>y){
        console.log(x +' es mayor que '+y);
        return x;
    } else if(x<y){
        console.log(x +' es menor que '+y);
        return y;
    }

}

let a:number = calculaMayor(4, 2);
console.log(a);

let b:number = calculaMayor(7, 59);
console.log(b)