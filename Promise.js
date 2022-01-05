//promise:best vedio on promise
//-resolve
//-reject
//-pending
function fun1(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            const error=true; //we declare that there  is some error 
            if(!error){
                console.log("your promise is resolve");
                resolve();
            }
            else{
                console.log("your promise is rejected");
                reject("  not fulfilled");
            }
        },2000);
    }
        )
}
fun1().then(function(){
    console.log("thanks for resolving");
}).catch(function(error){
    console.log("sorry bro " +error);
})



