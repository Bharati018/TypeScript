"use strict";
function printNumber(number) {
    for (let numbers of number) {
        console.log(numbers);
    }
}
printNumber([10, 20, 30, 40]);
printNumber(["neha", "bharti", "sachin"]);
let box1 = {
    value: 100
};
let box2 = {
    value: "bharti"
};
console.log(box1);
console.log(box2);
class Boxx {
    value;
    constructor(value) {
        this.value = value;
    }
    display() {
        console.log(this.value);
    }
}
let b1 = new Boxx(100);
let b2 = new Boxx("neha");
b1.display();
b2.display();
