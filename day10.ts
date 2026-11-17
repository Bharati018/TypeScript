function printNumber<T>(number:Array<T>):void{
    for(let numbers of number){
        console.log(numbers);
    }
}
printNumber<number>([10,20,30,40]);
printNumber<string>(["neha","bharti","sachin"]);

interface Box<T>{
    value:T;
}

let box1:Box<Number>={
    value:100
}
let box2:Box<string>={
    value:"bharti"
}
console.log(box1);
console.log(box2);

class Boxx<t>{
    value:t;

    constructor(value:t){
        this.value=value;
    }

    display():void{
        console.log(this.value);
    }
}
let b1=new Boxx<number>(100);
let b2=new Boxx<string>("neha");

b1.display();
b2.display();

class Storage<t>{
    items:t[]=[];

    add(item:t):void{
        this.items.push(item);
    }

    getAll():t[]{
        return this.items;
    }
}
let num=new Storage<number>();
num.add(10);
num.add(20);
num.add(30);
console.log(num.getAll());