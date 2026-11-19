"use strict";
let value = "hiii bharti";
let Value = value;
console.log(Value.toUpperCase());
let Student = {
    name: "bharti",
    age: 22
};
console.log(Student.name);
function printData(obj, key) {
    return obj[key];
}
let emp1 = {
    name: "neha",
    salary: 3000,
    id: 101
};
// function print(obj:employee,key:keys){
//     return obj[key];
// }
console.log(printData(emp1, "name"));
function getDetails(person) {
    if ("age" in person) {
        console.log(person.age);
    }
    else {
        console.log(person.salary);
    }
}
getDetails({
    name: "bahrti",
    age: 22
});
function printValue(value) {
    return value;
}
console.log(printValue("hiii"));
console.log(printValue(10));
function data(value, value1) {
    console.log(value, value1);
}
data("hii", 12);
function addd(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum = sum + num;
    }
    return sum;
}
console.log(addd(1, 2, 3, 5, 8));
