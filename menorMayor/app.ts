

function miFuncion(...ar:number[]):void{

    ar.sort();
    console.log('El numero menor es :'+ar[0]);
    console.log('El numero mayor es :'+ar[ar.length-1]);
    let b:number=0;
    for (let i = 0; i < ar.length; i++) {
        b+=ar[i];
    }
    console.log('La suma de todos los elementos del array es: '+b)
}


miFuncion(1,2,3);
miFuncion(9,3,6,44,7,8);
miFuncion(3,5,1);

