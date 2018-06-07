

function miFuncion(...ar:number[]):void{
    let a:number=0;
    let b:number=0;
    let c:number=0;

    for(var i:number=0; i<ar.length; i++){
        if(ar[i]<ar[i+1]){
            a=ar[i];
        }
        if(a<ar[i]){
            a=ar[i];
        }
        if(ar[i]>ar[i+1]){
            b=ar[i];
        }
        c+=ar[i];

       
    }
    console.log('El numero menor introducido es: '+a);
    console.log('El numero mayor introducido es: '+b);
    console.log('Sumatorio: '+c);
}


miFuncion(1,2,3);
//miFuncion(9,3,6,44,7,8);
//miFuncion(3,5,1);

