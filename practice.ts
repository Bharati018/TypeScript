let value:any="hiii bharti";
let Value=<string>value;
console.log(Value.toUpperCase());

type student={
    name:string;
    age:number;
}
let Student={
    name:"bharti",
    age:22
} as student;

console.log(Student.name)
;


type employee={
    name:string,
    salary:number,
    id:number
}

type keys=keyof employee;
function printData(obj:employee,key:keys){
    return obj[key];
}
let emp1:employee={
    name:"neha",
    salary:3000,
    id:101
};

// function print(obj:employee,key:keys){
//     return obj[key];
// }
console.log(printData(emp1,"name"));


type manager={
    name:string;
    age:number;
}
type ceo={
    name:string;
    salary:number;
}

function getDetails(person:manager|ceo){
    if("age" in person){
        console.log(person.age);
    }
    else{
        console.log(person.salary);
    }
}
getDetails({
    name:"bahrti",
    age:22
});

function printValue<t>(value:t):t{
    return value;
}
console.log(printValue("hiii"));
console.log(printValue<number>(10));

function data<t,u>(value:t,value1:u):void{
    console.log(value,value1);
}
data<string,number>("hii",12);

function addd(...numbers:number[]){
    let sum=0;

    for(let num of numbers ){
        sum=sum+num;
    }
    return sum;
}
console.log(addd(1,2,3,5,8));

