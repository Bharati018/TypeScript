function registerUser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("1. User Registred");
            resolve("registration succesful");

        },2000);
    });
}

function loginUser(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("2.user logged in");
            resolve("login successful");

        },2000);
    });
}

async function userProcess(){
    let result=await registerUser();
    console.log("result1");

    let result2=await loginUser();
    console.log(result2);

    console.log("all task completed");
}

userProcess();