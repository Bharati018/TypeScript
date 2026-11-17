"use strict";
let p1 = {
    id: 101,
    name: "laptop",
    price: 55000,
    description: "hp laptop"
};
let p2 = {
    id: 102,
    name: "mobile",
    price: 25000,
    //description:"vivo y300 5G"
};
let p3 = {
    id: 103,
    name: "keyboard",
    price: 15000,
    description: "wireless keyboard"
};
console.log(p1.id);
console.log(p2.name);
console.log(p3.description);
console.log(p2.description);
console.log(p2.id);
let emp1 = {
    name: "bharti",
    age: 22,
    salary: 22500,
    dept: "node js"
};
console.log(emp1);
console.log(emp1.name);
console.log(emp1.age);
console.log(emp1.salary);
// Task 3
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["pending"] = 0] = "pending";
    OrderStatus[OrderStatus["shipped"] = 1] = "shipped";
    OrderStatus[OrderStatus["delivered"] = 2] = "delivered";
    OrderStatus[OrderStatus["cancelled"] = 3] = "cancelled";
})(OrderStatus || (OrderStatus = {}));
function checStatus(status) {
    if (status === OrderStatus.pending) {
        console.log("your order is pending");
    }
    else if (status === OrderStatus.shipped) {
        console.log("your order is shipped");
    }
    else if (status === OrderStatus.delivered) {
        console.log("your order is delivered");
    }
    else {
        console.log("your order has been canceled");
    }
}
checStatus(OrderStatus.pending);
checStatus(OrderStatus.cancelled);
//task 4
function getFirstElement(arr) {
    return arr[0];
}
let numResult = getFirstElement([10, 20, 30]);
console.log("number is:", numResult);
let strResult = getFirstElement(["neha", "bahrti", "gopi"]);
console.log("string are:", strResult);
let studentResponse = {
    status: true,
    message: "student data fetched successfully",
    data: {
        id: 101,
        name: "bahrti",
        age: 22
    }
};
let productResponse = {
    status: true,
    message: "prodcut data fetched successfully",
    data: {
        Id: 101,
        name: "vivo y300 5G",
        price: 25500
    }
};
console.log(studentResponse.status);
console.log(studentResponse.message);
console.log(studentResponse.data.name);
console.log(productResponse.status);
console.log(productResponse.message);
console.log(productResponse.data.Id);
let student = {
    name: "bahrti",
    age: 22,
    marks: 45
};
console.log(student.name);
let emp = {
    city: "mumbai",
    marks: 56,
    //age:34
};
console.log(emp);
let s1 = {
    name: "bharti",
    age: "23",
    city: "pune"
};
let res = "reject";
console.log(res);
