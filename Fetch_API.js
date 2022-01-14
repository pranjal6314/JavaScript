//Get and Post requests

let mybtn=document.getElementById("myBtn");
let content=document.getElementById("content");
function getdata(){
    console.log("started getdata");
    url="pranjal.txt";
    fetch(url).then((response)=>{
        console.log("inside first then");
        return response.text();
    }).then((data)=>{
        console.log("inside second then");
        console.log(data);
    })
}
function getdata1(){
    console.log("started getdata");
    // url="https://api.github.com/users";
    url="https://reqres.in/api/products/3"
    fetch(url).then((response)=>{
        console.log("inside first then");
        return response.json();
    }).then((data)=>{
       
        console.log("inside second then");
        console.log(data);
    })
}
function postData(){
    url="https://jsonplaceholder.typicode.com/posts";
    data={"title":"pranjal","body":"ok","userId":"23"};
    params={
    method:'post',
    headers:{
        'content-Type':'application/json'
            },
    body:JSON.stringify(data)
        }
    fetch(url,params).then(response=>response.json())
    .then(e=>console.log(e))

}
console.log("before getdata sarted");
getdata();
console.log("after getdata sarted");
getdata1();

postData();

