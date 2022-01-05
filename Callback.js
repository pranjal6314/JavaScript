//html 

<h1>Student List</h1>
<ul id="students"></ul>


//js

//pretend that this response is coming from the server
const students=[
    {name:"pranjal",suject:"JavaScript"},
    {name:"rohan",suject:"Java"}
];
function enrollstudent(student,callback){
    setTimeout(() => {
        students.push(student);
        console.log("student has been enrolled");
        callback();
    },3000);
}
function getstudent(){
    setTimeout(() => {
        let str ="";
        students.forEach(function(students){
            str+=`<li>${students.name}</li>`
        });
        document.getElementById('students').innerHTML=str;
        console.log("student has been fetched");
    },1000);

}
let newstudent={name:"ss",student:"python"};
enrollstudent(newstudent,getstudent);
//getstudent();
