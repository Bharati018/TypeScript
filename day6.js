student=[
    {id:101,name:"neha",age:22},
    {id:102,name:"bharati",age:23},
    {id:103,name:"vishal",age:24},
    {id:104,name:"gopi",age:25}
        
]// array of object
 
let res=student.map((student)=>{
    return student.age
});

console.log(res);
//que2
let arr=[12,34,56,76,45];
let output=arr.map((a)=>{
    return a+10;

});
console.log(output);

//question 3 using filter

let arr1=arr.filter((n)=>{
    return n>20;


});

console.log(arr1);

let out=student.filter((s)=>{
    return s.name.startsWith("b");

});
console.log(out);

let sum=arr.reduce((sum,num)=>{
    return sum+num;

},0);

console.log(sum);

let prod=arr.reduce((prod,num)=>{
    return prod*num;

},1);

console.log(prod);

let count=arr.reduce((count,num)=>{
    if(num%2==0){
        count=count+1;
    }
    return count;

},0);
console.log(count);

let arr2=[34,67,8,90,56,78];
let max=arr2.reduce((max,num)=>{
    if(num>max){
        max=num;
    }
    return max;

},arr2[0]);
console.log(max);

let emp=[
    {name:"abc",sal:23000},
    {name:"cde",sal:24000},
    {name:"def",sal:25000},
    {name:"efg",sal:26000}
];
let res2=emp.reduce((sal,num)=>{
    return sal=sal+num.sal;

},0);
console.log(res2);

//let arr2=[14,7,8,0,6,8];
let res3=arr2.filter((num)=>num>7)
            .map((num)=>num*2);

console.log(res3);

let arr3=[2,3,4,5,6,7];
let res4=arr3.filter((num)=>num%2==0).
reduce((sum,num)=> sum=sum+num,0);
console.log(res4);

//que
student=[
    {id:101,name:"neha",age:22},
    {id:102,name:"bharati",age:23},
    {id:103,name:"vishal",age:24},
    {id:104,name:"gopi",age:25}
        
]
let stud=student.map((name)=>{
    return name.name.toUpperCase();


});
console.log(stud);

//let arr3=[2,3,4,5,6,7];
let res5=arr3.map((num)=>{
    if(num%2==0){
        return num*2;
    }else{
        return num*3;
    }
});
console.log(res5);

let result=arr3.map((num,idx)=>{
    return num=num+idx;
});
console.log(result);

//que
let student1=[
    {name:'a',age:21,marks:80},
    {name:'b',age:23,marks:75},
    {name:'c',age:24,marks:45},
    {name:'d',age:25,marks:90}
];
let result1=student1.filter((stud)=>{
    return stud.age>22 && stud.marks>60;
});
console.log(result1);

//que
let names=["ram","rahul","amit","bharati","neha"];
let name=names.filter((name)=>{
   return name.length>4;
}
);
console.log(name);

let num1=[1,2,2,3,3,4,4,5,1];

let val=num1.filter((num,idx)=>{
    return num1.indexOf(num)===idx;
});
console.log(val);
console.log("-------------");

let val1=[10,15,20,25,30];
let v=val1.filter((num)=>num%2==0).
reduce((sum,val)=>{
   return sum=sum+val
},0);

console.log(v);
console.log("--------");

let emp1=[
    {name:"A",sal:25000},
    {name:"B",sal:35000},
    {name:"C",sal:35000},
    {name:"D",sal:45000}
];
let e=emp1.reduce((high,emp)=>{
    return emp.sal>high?emp.sal:high;

},0);
console.log(e);

console.log("--------------");

// let emp=[
//     {name:"abc",sal:23000},
//     {name:"cde",sal:24000},
//     {name:"def",sal:25000},
//     {name:"efg",sal:26000}
// ];

let result2=emp.filter((std)=>{
    return std.sal>23000;
}).map((std)=>{
    return std.name;
});
console.log(result2);


console.log("-------------");

let students=[
    {name:"a",marks:25},
    {name:"a",marks:35},
    {name:"a",marks:45},
    {name:"a",marks:55}


];
let st=students.filter((mark)=>{
    return mark.marks>30;
}).map((num)=>{
    return num.marks+5;
}).reduce((total,mark)=>{
    return total+mark;

},0);

console.log(st);

//object methods
let user={
    name:'bharati',
    city:"pune",
    age:22

};
//method 1 object.keys
let obj=Object.keys(user);
console.log(user);

//method 2 object.values
let obj1=Object.values(user);
console.log(obj1);

//method3 object.entries
letobj3=Object.entries(user);

//method4 object.assign  here fst object will also get affected
console.log(user);
 let user2={
    state:"maharashtra"
 }
 let obj3=Object.assign(user,user2);
 console.log(user);
 console.log(obj3);

 //method5 object.freeze

//  Object.freeze(user);
//  user.age=45;
//  user.name="neha";
//  console.log(user);

 //method6 Object.seal=> we cannot delete existing  properties or cannot add new properties 
 //but we can edit or modify existing properties

 Object.seal(user);
 user.age=23;
 user.country="india";
 console.log(user);

 //method7 Object.hasOwn => it checks whether the object has 
 //particular property or not

 let val2=Object.hasOwn(user,'name');
 let val3=Object.hasOwn(user,"country");
 console.log(val2,val3);


 console.log("-------------");

 console.log(Object.is("aa","aa"));
 console.log(Object.is(NaN,NaN));
 console.log(Object.is(0,-0));


console.log("----------");
 //setInterval

 let count1=1;
 let id=setInterval(()=>{
    console.log(count1);
    count++;

    if(count1>5){
        clearInterval(id);
    }
 },3000);
 

    


