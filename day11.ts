


//task1
interface product{
     readonly id:number;
    name:string;
    price:number;
    description?:string;
}

let p1:product={
    id:101,
    name:"laptop",
    price:55000,
    description:"hp laptop"

};

let p2:product={
    id:102,
    name:"mobile",
    price:25000,
    //description:"vivo y300 5G"

};

let p3:product={
    id:103,
    name:"keyboard",
    price:15000,
    description:"wireless keyboard"

};

console.log(p1.id);
console.log(p2.name);
console.log(p3.description);
console.log(p2.description);
console.log(p2.id);

//p1.id=104;

//Task 2

type person={
    name:string,
    age:number;

};
type emp={
    salary:number;
    dept:string;
}

type staff=person & emp;

let emp1:staff={
    name:"bharti",
    age:22,
    salary:22500,
    dept:"node js"
};

console.log(emp1);
console.log(emp1.name);
console.log(emp1.age);
console.log(emp1.salary);

// Task 3

enum OrderStatus{
    pending,
    shipped,
    delivered,
    cancelled
}

function checStatus(status:OrderStatus):void{
    if(status===OrderStatus.pending){
        console.log("your order is pending")
    }

    else if(status===OrderStatus.shipped){
        console.log("your order is shipped");
    }
    else if(status===OrderStatus.delivered){
        console.log("your order is delivered");
    }
    else{
        console.log("your order has been canceled")
    }

}

checStatus(OrderStatus.pending);
checStatus(OrderStatus.cancelled);


//task 4

function getFirstElement<t>(arr:t[]):t|undefined{
    return arr[0];
}

let numResult=getFirstElement<number>([10,20,30]);
console.log("number is:",numResult);

let strResult=getFirstElement<string>(["neha","bahrti","gopi"]);
console.log("string are:", strResult);

//Task4

interface ApiResponse<t>{
    status:boolean;
    message:string;
    data:t;
}

interface student{
    id:number;
    name:string;
    age:number;
}

interface products{
    Id:number;
    name:string;
    price:number;
}

let studentResponse:ApiResponse<student>={
    status:true,
    message:"student data fetched successfully",

    data:{
        id:101,
        name:"bahrti",
        age:22
    }
};

let productResponse:ApiResponse<products>={
    status:true,
    message:"prodcut data fetched successfully",

    data:{
        Id:101,
        name:"vivo y300 5G",
        price:25500
    }
};

console.log(studentResponse.status);
console.log(studentResponse.message);
console.log(studentResponse.data.name);

console.log(productResponse.status);
console.log(productResponse.message);
console.log(productResponse.data.Id);

//task5

