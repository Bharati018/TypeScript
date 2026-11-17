let a="10";
let b=5;
console.log(a+b);

console.log(parseInt("25.75"));
console.log(parseFloat("25.75"));
console.log("------------------");

if(0){
    console.log("hii..bharati");
}
else{
    console.log("bharati shame on you");
}
if([]){
    console.log("hii..bharati");
}
else{
    console.log("bharati shame on you");
}
console.log("-----------------------");

function greet(name){
    console.log("hello " + name);
}
greet("neha");


let great=function(name, a){
    console.log("hello good morning "+ name+a);
}
great("sachin sir", 2);

let add=(a,b)=>{
    return a+b;
}
let res=add(2,4);
console.log(res);

console.log("--------------");

function display(callback){
    callback("bharati",22);
}
display(function(name,age){
    console.log("name is "+name);
    console.log("age is "+age);
}

);
console.log("-----------");

let arr=[10,20,30,40];
console.log(...arr);

function arrr(...numbers){
    sum=0;
    for(let x of numbers){
        console.log(x);
        sum=sum+x;
    }
    console.log(sum);
}
arrr(10,20,30,40,50);

let array=[1,2,3,4,5];
console.log(...array);

let arr1=[4,5,6,7,8];
let arr2=[...arr1];
console.log(arr2);

let student={
    name:"bharati",
    age:22,

};
let updatedStudent={
    ...student,
    city:"pune"
};
console.log(updatedStudent);

//closure
function outer(){
    let a=10;
    function inner(){
        console.log(a);
    }
     return inner;

}
let result=outer();
result();

//hoisting
console.log("----------");
// console.log(p);
// let p=10;

add1(10,5);
function add1(x,y){
    console.log(x+
        y
    );
}

(function(name){
    console.log("hello "+ name);
})("bharati");

(function(){
    let e=10;
    console.log(e);
})();
//console.log(e);// it will give error bcz of scope it will not accessible outside the function

//pure function
function add2(a,b){
    console.log(a+b);
}
add2(1,2);
add2(90,67);

let count=0;
function count1(){
    count++;
    return count1;
    
} 
count1();
count1();
count1();
count1();

console.log("---------");
function student1(name,age){
    this.name=name;
    this.age=age;
}
let s1=new student1("bharti",22);
let s2=new student1("neha",23);
console.log(s1.name);
console.log(s2.age);




