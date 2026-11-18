type username=string| null| undefined
type result = NonNullable<username>;
let username:result="bharti";
console.log(username);
//let u1:result=null;
//let u1:result=undefined;

type user= number| string|boolean| null|void;
type res= NonNullable<user>;

let u1:res="neha";
let u2:res=true;
let u3:res=34;

//ReturnType
function getStudent(){
    return{
        id:101,
        name:"bahrti",
        age:22
    };
}

type studnet=ReturnType<typeof getStudent>;
let s2:studnet={
    id:102,
    name:"neha",
    age:23
};

function getProduct(){
    return{
        name:"laptop",
        prize:5000
    };
}

type Product=ReturnType<typeof getProduct>;
 function displayProduct(products:Product){
    console.log(products.name);
    console.log(products.prize);
 }

 displayProduct(getProduct());

 let studentt={
    name:"neha",
    age:22
 };
 let empp={
    name:"gopi",
    age:25

 };

 function showDetails(this:{name:string,age:number},city:string,country:string,){
    console.log(this.name);
    console.log(this.age);
    console.log(city);
    console.log(country);

 }

 //showDetails.call(empp,"pune","india");
 showDetails.apply(empp,["nashik", "pune"]);

 let ress=showDetails.bind(empp,"pune","india");
 ress();


 //type signature'

 type details={
    name:string;
    age:number;

 }

 let stu:details={
    name:"bharti",
    age:22
 }

 type marks={
    [key:string]:number;
 }

 let marks:marks={
    neha:24,
    bharti:34,
    gopi:56
 }
 console.log(marks);

 type Name={
    [key:string]:string|number;
 }
 let Name:Name={
    neha:"zanzurne",
    bahrti:56,
    gopi:"pande"


 }

 console.log(Name);

 type stud={
   name:string;
   age:number;
   address:{
      city:string;
      state:string;
      country:string;
   };
 };

 let s1:stud={
   name:"bharti",
   age:22,
   address:{
      city:"pune",
      state:"maharashtra",
      country:"india"

   }
 };
 console.log(s1.address.state);

 type emp={
   name:string;
   dept:{
      deptName:string;
      manager:{
         name:string;
         exp:number;
      };
   };
 };

 let e1:emp={
   name:"rahul",
   dept:{
      deptName:'node js',
      manager:{
         name:"kiran sir",
         exp:5
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

 let employee={
   naav:"neha",
   salary:5000,
   address:{
      city:"satara",
      state:"maharashtra"
   }
 };

 let {naav,salary,address:{
   city,state
 }}=employee;
 console.log(salary);
 
type dataType<t>=t extends number? "number type":"other type";
type a=dataType<number>;
type b=dataType<string>;
let result:a="number type";
console.log(result);
 

