//pretend this come from sever as a response
let a="pranjal";
a=undefined;
if(a!=undefined){
   throw  new Error("this is not undefined")
}
else{
    console.log("this is undefined")
}
try{
    console.log("inside try block")
    pranjal();
}catch(Error){
    console.log(Error)
    console.log("error comes");
    console.log(Error.name)
}finally{
    console.log("finally,we are at the end of code");
}
document.write("hello pranjal")
