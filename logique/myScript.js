/*var T=new Array;

T=new Array(8);

 T=new Array(12,"Hello",1,true);
 T=[1,5,8,9,10];
 console.log(T);*/
//random value between a and b  (a<b)
let a=1,b=10;
console.log(Math.round(Math.random()*(b-a)+a));
console.log(Math.floor(9.999999));//l entier le plus proche inférieur
console.log(Math.ceil(9.000000000000001));//l entier le plus proche inférieur
/*Math.random()             0<=x<1
Math.random()*(b-a)       0<=x*(b-a)<(b-a)
Math.random()*(b-a)+a      a<=x*(b-a)+a<b*/