let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);
function buttonClickHandler() {
    console.log('you clicked button');
    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();
    //open the object
    // xhr.open('GET', 'pranjal.txt', true);
    xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
    //GET use because we only give some url and it give data we dont any data

    //what to do on progress(optional)
    xhr.onprogress = function () {
        console.log('on progress');
    }

    // xhr.onreadystatechange=function(){
    //     console.log('ready state is :' +xhr.readyState);
    // }
    //what to do when response is ready
    xhr.onload = function () {
        if(this.status===200){
        console.log(this.responseText);}
        else{
            console.log('file not found')
        }
    }
    //send the request
    xhr.send();
}







let populate = document.getElementById('popbtn');
populate.addEventListener('click',pophandler);
function  pophandler(){
   
        console.log('you clicked populate button');
        //Instantiate an xhr object
        const xhr = new XMLHttpRequest();
        //open the object
       
       //GET request
        xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees',true)
        
        //what to do on progress(optional)
        xhr.onprogress = function () {
            console.log('on progress');
        }
    
        //what to do when response is ready
        xhr.onload = function () {
            if(this.status===200){
            let obj=JSON.parse(this.responseText);
                console.log(obj)
                let list =document.getElementById('list');
                let str='';
                for(key in obj){
                        str+=`<li>${obj[key].employee_name}</li>`
                }
                list.innerHTML=str;
        }
            else{
                console.log('file not found')
            }
        }
        
        //send the request
        xhr.send();
    }
