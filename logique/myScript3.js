let T=new Array(12,15,18,19,13,17);
//supprimer le dérbier elt
//let deleted=myArr.pop();
/*let deleted=myArr.shift();
console.log(myArr);
console.log(deleted);*/
function InRange(nbr,min,max){
    return nbr>=min && nbr<max;
}
do{
var pos=prompt('saisir la position : ');
}while(!InRange(parseInt(pos),0,T.length))

console.log(T);
let deleted=T.splice(pos,3,1,1,1,1,1,1,1);
console.log(T);
console.log(deleted);


let TOdd=[];
for(let x of T){
    if(T.indexOf(x)&&1==1){
        TOdd.push(x);
    }
}