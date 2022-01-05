//html


<h1>Student List</h1>
<ul id="students"></ul>


//js
//pretend that this response is coming from the server
const students=[
    {name:"pranjal",subject:"JavaScript"},
    {name:"rohan",subject:"Java"}
];
function enrollstudent(student){
    return new Promise( function(resolve,reject){
        setTimeout(() => {
            students.push(student);
            console.log("student has been enrolled");
            const  error=false;
            if(!error){
                resolve();
            }
            else{
                reject();
            }
           },3000);
    })
    
}
function getstudent(){
    setTimeout(() => {
        let str ="";
        students.forEach(function(students){
            str+=`<li>${students.name}   ${students.subject}</li>`
        });
        document.getElementById('students').innerHTML=str;
        console.log("student has been fetched");
    },1000);

}
let newstudent={name:"ss",subject:"python"};
enrollstudent(newstudent).then(function(){
    getstudent();
}).catch(function(){
        console.log("error occured");
});




