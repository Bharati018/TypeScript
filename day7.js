//Array methods
//1.Push
let arr=[2,3,4,5];
arr.push(10);
console.log(arr);

//pop
let res=arr.pop();
console.log(arr);
console.log(res);

//unshift
arr.unshift(12);
console.log(arr);

//shift
arr.shift();
console.log(arr);

//splice
arr.splice(1,2,34);
console.log(arr);
arr.push(12,3,5,6);
console.log(arr);
arr.splice(1,1,4);
console.log(arr);

//slice
let res1=arr.slice(3,6);
console.log(res1);

//indexOf()

let arr1=[10,20,20,10,30,40,30];
console.log(arr1.indexOf(30));

//lastIndexOf
console.log(arr1.lastIndexOf(32));

//includes
console.log(arr1.includes(40));

//find
let res2=arr1.find(n=> n<40);
console.log(res2);

//findIndex
let res3=arr1.findIndex(n=> n<40);
console.log(res3);

//findLast
let res4=arr1.findLast(n=> n<40);
console.log(res4);

//findLastIndex
let res5=arr1.findLastIndex(n=> n<40);
console.log(res5);

//forEach

let arr2=[10,20,30,70,60,55];
arr2.forEach((N,idx)=>{
    console.log(N,idx);
});

//sort
arr2.sort((a,b)=>a-b);

console.log(arr2);

//reverse
arr2.reverse();
console.log(arr2);

//join
let str=["java","python","node","php","js"];
let val=str.join("-");
console.log(val);

//toString
//flat
let ar=[1,2,[3,4,5],[6,7,8]];
console.log(ar.flat());

//flatmap

let arrs=[1,2,3,4];
let ress=arr.flatMap(num=>[num,num*2]);
console.log(ress);


//every
console.log(arrs.every(n=>n>0));

//some
console.log(arrs.some(n=>n>3));



