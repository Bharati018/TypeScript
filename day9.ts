let username:string="bharati";
let age:number=22;
console.log(username);
console.log(age);


function sum(a:number,b:number){
    return a+b;
}

console.log(sum(5,8));

let myfavnum:number=10;
console.log(myfavnum.toString());

let namvalue:number=NaN;
console.log(typeof(namvalue));

let sentence="my name is bharati";
let slength=sentence.length;
console.log(slength);

//union-> it sores more than one datatype in one single variable
let data: number| string="bharati"
console.log(data);
data=30;
console.log(data);

function fun(value1:number| string, value2:number|string):number|string{
   if(typeof value1=="number" && typeof value2=="number"){
    return value1+value2;
   }
   else if(typeof value1=="string" && typeof value2=="string"){
    return value1+value2;
   }

   return String(value1)+String(value2);
   
}
console.log(fun(2,3));
console.log("bharati" , "khile");
console.log(3,"bharati");

let ars:(number|string)[]=[3,4,5,"neha","bharati"];
console.log(ars[2]);

//intersection of values

type person={
    name:string,
    age:number;
}
type emp={
    salary:number;
}

type staff=person & emp;
let user:staff={
    name:"bharti",
    age:22,
    salary:34000

}
console.log(user);

