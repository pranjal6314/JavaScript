//see in console ,how is the code running


 async function pranjal(){
     console.log("inside pranjal function");
     const response=await fetch("https://api.github.com/users");
     console.log("before response");
     const user=await response.json();
     console.log("user resolved");
     return user ;
    // return "pranjal";
}
 console.log("before calling function")
let a=pranjal();
console.log("after calling function")
console.log(a)
a.then(data=>console.log(data));
console.log("last js line")
