

function miFuncion(x:number, i:number):number{
    let str = x.toString();
    if(str[i]===undefined){
        return -1;
    }

    return parseInt(str[i]);
}

console.log(miFuncion(123, 5));
console.log(miFuncion(1234, 2));