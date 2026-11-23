"use strict";
// type Status="pending"|"Assigned"|"delete";
// function Print(status:Status){
//     switch(status){
//         case "pending":{
//             console.log("status is pending");
//         }break;
//         case "Assigned":{
//             console.log("status is assigned");
//         }break;
//         case "delete":{
//             console.log("status is delete");
//         }break;
//         default:
//             const check:never=status;
//     }
// }
// Print("Assigned");
// Print("delete");
// function isNumber(value:number|string|boolean):value is number{
//     if(typeof value==="number"){
//    console.log("given value is number");
//    return true;
//     }
//     console.log("given value is not an number")
//     return false;
// }
// let res=isNumber("hiii");
// console.log(res);
// type check<t>= t extends string?"yes the value of t is string":"no value of t is not string";
// type a=check<23>;
// let A :a="no";
// console.log(A);
// type b=check<"bahrti">;
// let B:b="yes";
// console.log(B);
let emp = {
    name: "bharti",
    age: 22,
    team: "node js"
};
emp.name = "neha";
console.log(emp);
const Roles = {
    ADMIN: "admin",
    USER: "user",
    GUEST: "guest",
};
function checkRole(role) {
    console.log(role);
}
checkRole("admin");
function checkString(value) {
    if (typeof value !== "string") {
        throw new Error("value is not string");
    }
}
let username = "12";
;
checkString(username);
console.log(username.toUpperCase());
function printStudent() {
    console.log(this.name);
    console.log(this.age);
}
let student = {
    name: "Bharati",
    age: 22
};
printStudent.call(student);
let student1 = {
    name: "bahrti",
    age: 18
};
//student1.name="naha";
console.log(student1);
(function (name) {
    console.log("hiii", name);
})("bharti");
