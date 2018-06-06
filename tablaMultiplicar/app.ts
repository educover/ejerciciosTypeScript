function miFuncion():void{
    let str:string=prompt('Enter any value in below','Introduce un numero');

    let num:number=parseInt(str);
    for(let i=0;i<11;i++){

    $('.mult').append($(`<li class="list-group-item">${num}x${i}=${num*i}</li>`));
    }
};


$(()=>{
  miFuncion();
}
);
