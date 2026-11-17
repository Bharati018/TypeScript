// function greet(name="neha"){
//     console.log("hello "+ name);
// }
// greet("bharati");
// greet();
// function greet1(name){
//     console.log("hello "+ name);
// }
// greet1();

// //destructuring
// let numbers=[23,45,67,78];
// console.log(numbers);

// let a=numbers[0];
// let b=numbers[0];
// let c=numbers[0];
// let d=numbers[0];
// console.log(a,b,c,d);

// let [p,q,r,s]=numbers;
// console.log(p,q,r,s);

// let student={
//     name:"bharati",
//     age:22,
//     rollno:16
// };

// let n=student.name;
// let t=student.age;
// let u=student.rollno;
// console.log(n,t,u);

// let {name,age,rollno}=student;

// console.log(name,age,rollno);

// let num=[10,20];
// let[h,j,k=30]=num;
// console.log(h,j,k);

// let place={
//     city1:"Pune",
//     city2:"nashik",
//     city3:"beed"

// };
// let {city1,city2,city3,city4="ngr"}=place;
// console.log(city1,city2,city3,city4);


// //optional channing
// let obj={
//     name:'bharati',
//     address:{
//         city:"pune",
//         tal:"ashti",
//         place:{
            
//         }

//     }

// };
// console.log(obj.name);
// console.log(obj.address?.place?.city2);


// let naam="neha";
// let age1=22;
// let detail={
//     naam,
//     age1

// };
// console.log(detail);

// let key="city"
// let info={
//     name:"neha",
//     [key]:"pune"
// };
// console.log(info);

// export let var1=10;
// export let var2=20;
// console.log("=-------------");
// export let map =new Map();
// map.set("name","neha");
// map.set("age",22);
// map.set("city","pune");
// console.log(map);

// console.log(map.get("name"));

// console.log(map.has("neha"));//we can pass only key as a argument to has method
// //nsole.log(map.size());

// map.delete("age");
// console.log(map.has("age"));

// console.log("-----------------");
//  let promise=new Promise((resolve,reject)=>{
//     console.log("i am a promise");
//    console.log( resolve("success"));
//     //reject("error occured");
//  });

//  function getdata(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data", dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     });
//  }
//  let fin=getdata(123);
//  console.log(fin);
//  fin.then((result)=>{
//     console.log(result);
//     console.log(fin);
//  });
//  console.log("---------");
//  let p1=new Promise((resolve,reject)=>{
//     reject("something went wrong");

//  });
//  p1.catch((res)=>{
//     console.log(res);

//  })
//  let p2=new Promise((resolve,reject)=>{
//    resolve("successful");

//  });
//  p2.then((res)=>{
//     console.log(res);

//  })
//  console.log("--------------");
//  let n1=new Promise((resolve,reject)=>{
//     resolve("java");

//  });
//  let n2=new Promise((resolve,reject)=>{
//    resolve("js");

//  });
//  let n3=new Promise((resolve,reject)=>{
//     resolve("python");

//  });

//  Promise.all([n1,n2,n3])
//  .then((res)=>{
//     console.log(res)
//  });

//  console.log("------------");
//  let s1=new Promise(resolve=>{
//     setTimeout(() => resolve("first"),2000);
        
//     });

//     let s2= new Promise(resolve=>{
//         setTimeout(()=>resolve("second"),1000);

//     });

//     Promise.race([s1,s2])
//     .then(result=> console.log(result));


    console.log("----------------");
    let arr=[5,1,3,6,7];
    function double(x){
        return x*2;
    }
    const output=arr.map(double);
    console.log(output);

    function isOdd(x){
        return x%2==0;
    }
    const res=arr.filter(isOdd);
    console.log(res);

    const res1=arr.filter((x)=>x>3)
    console.log(res1);

    let arr1=[4,8,8,9];
    let out=arr.reduce(function(acc,curr){
        acc=acc+curr;
    },0);
    console.log(out);
 
    //que

    




