let marks=[45,"bharati",89,"neha",56,false,90,67,45];
console.log(marks);
console.log(marks.length);
console.log(typeof marks);
marks[1]="rohini";
console.log(marks[1]);
for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
}
console.log(typeof false);
for(let mark of marks){
    console.log(marks);
}
let cities=["delhi","hariyana","panjab","pune","mumbai"];
for(let city of cities){
    console.log(city.toUpperCase());
}

let num=[85,97,44,37,76,60];
let sum=0;
let count=0;
for(let n of num){
    sum=sum+n;
    count++

}
let res=sum/count;
console.log(res);
console.log("-------------");

let prizes=[250,645,300,900,50];
for(let i of prizes){
    let offer=i*10/100;
    i=i-offer;
    console.log(i);
}

//array methos
let foodItems=["chips","burger","pizza"];
foodItems.push("frenchFries");
console.log(foodItems);
let val=foodItems.shift();
console.log("deleted",val);
let val1=foodItems.unshift();
console.log("deleted",val1);

let digits=[1,2,3,4,5,6,7];
digits.splice(2,2,101,102);
console.log(digits);

import {var1,var2} from "./day5.js"

console.log(var1);
console.log(var2);

