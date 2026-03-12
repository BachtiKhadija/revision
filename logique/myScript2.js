var T=new Array;
for(let i=0;i<10;i++){
    //T.push(Math.round(Math.random()*(100-1)+1));
    T.unshift(Math.round(Math.random()*(100-1)+1));
}
console.log(T);

//stocker les nombres pairs de T dans TEven
/*let TEven=[];
for(let i=0;i<T.length;i++){
    if(T[i]&1===0){
        TEven.push(T[i]);
    }
}
let TEven=[];
for(let x of T){
    if(x&1===0){
        TEven.push(x);
    }
}
    
let TEven=[];
for(let pos in T){
    if(T[pos]&1===0){
        TEven.push(T[pos]);
    }
}
*/
let TEven=[];
T.forEach(function(x,pos){
 if(T[pos]&1===0){
    //if(x&1===0){
        TEven.push(T[pos]);
    }
});