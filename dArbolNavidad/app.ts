
function ArbolNavidad(num:number):void{
    if(num<5) {
        console.log('La altura del arbol debe ser mayor de 5');
        return;
    }
    let b:string = num.toString();
    let c:string='*';
    let d:string[] = new Array;
    let e:number=num/2;
    let f:number=e+1;
    let g:number=e-1;
        console.log(d[e]=c);
        for (let i:number = 0; i < num+1; i++) {
            d[f]=c;
            d[g]=c;
            f++;
            g--;
        console.log(d)
    }
    
}
ArbolNavidad(8);