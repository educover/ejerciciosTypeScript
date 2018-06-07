

function miFactorial(x:number):number{
    let b:number=1;
    for (let i = x; i > 0; i--) {
        b*=i;   
    }
    return b;
}

console.log(miFactorial(5));
console.log(miFactorial(3));
console.log(miFactorial(2));