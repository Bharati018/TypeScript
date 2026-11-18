"use strict";
let username = "bharti";
console.log(username);
let u1 = "neha";
let u2 = true;
let u3 = 34;
//ReturnType
function getStudent() {
    return {
        id: 101,
        name: "bahrti",
        age: 22
    };
}
let s2 = {
    id: 102,
    name: "neha",
    age: 23
};
function getProduct() {
    return {
        name: "laptop",
        prize: 5000
    };
}
function displayProduct(products) {
    console.log(products.name);
    console.log(products.prize);
}
displayProduct(getProduct());
let studentt = {
    name: "neha",
    age: 22
};
let empp = {
    name: "gopi",
    age: 25
};
function showDetails(city, country) {
    console.log(this.name);
    console.log(this.age);
    console.log(city);
    console.log(country);
}
//showDetails.call(empp,"pune","india");
showDetails.apply(empp, ["nashik", "pune"]);
let ress = showDetails.bind(empp, "pune", "india");
ress();
let stu = {
    name: "bharti",
    age: 22
};
let marks = {
    neha: 24,
    bharti: 34,
    gopi: 56
};
console.log(marks);
let Name = {
    neha: "zanzurne",
    bahrti: 56,
    gopi: "pande"
};
console.log(Name);
let s1 = {
    name: "bharti",
    age: 22,
    address: {
        city: "pune",
        state: "maharashtra",
        country: "india"
    }
};
console.log(s1.address.state);
let e1 = {
    name: "rahul",
    dept: {
        deptName: 'node js',
        manager: {
            name: "kiran sir",
            exp: 5
        }
    }
};
console.log(e1.dept.manager.exp);
//  type Employee={
//    naav:string;
//    salary:number;
//    address:{
//       city:string;
//       state:string;
//    };
//  };
let employee = {
    naav: "neha",
    salary: 5000,
    address: {
        city: "satara",
        state: "maharashtra"
    }
};
let { naav, salary, address: { city, state } } = employee;
console.log(salary);
