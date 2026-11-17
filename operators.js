const a=10;

const name="bharati";
const isname=true;
//const value;  //not possible in case of const data type
let myName;
console.log(a,name,isname,myName);
const naav="neha";
console.log(naav);


const y=-10;
const x=0;
console.log(-10/0);


let z;
console.log(z);
console.log(typeof z);



let i=1;
for(i;i<=10;i++){
    console.log(i);
}


function checkNum(num){
    if(num>0){
        return "positive";
    }
    return "negative or zero number";
}

console.log(checkNum(0));

function printname(name){
    console.log("hello, my name is " + name);
}
printname("bharati");


const res=function(name){
    return "hello " + name;
}

console.log(res("neha"));


function user(name,callback){
    console.log(name);
    callback();
}
user("neha", ()=>console.log("done bharati"));