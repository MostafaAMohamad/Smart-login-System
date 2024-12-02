var Name =document.getElementById("Name");
var Email1 =document.getElementById("Email1");
var Password1 =document.getElementById("Password1");
var Email2 =document.getElementById("Email2");
var Password2 =document.getElementById("Password2");


var container;
if(localStorage.getItem("user")==null){
    container=[];
}
else{
    container=JSON.parse(localStorage.getItem("user"));
    
}


function adduser(){
        
     if(check1()){
        var user={
            name:Name.value,
            email:Email1.value,
            password:Password1.value,
         }
     container.push(user);
     localStorage.setItem("user",JSON.stringify(container))
     console.log(container);
     var suc =` `;
     suc +=`
     
     <h5 class="m-auto w-50 text-center text-success"><span >Success</span> </h5> `
     document.getElementById("incorrect").innerHTML=suc;
     
     }
     else{
   var block=` `;
    block += `
    <h5  class="m-auto w-50 text-center" ><span  >All input are required </span></h5> 
   
   `
   document.getElementById("incorrect").innerHTML=block;
}
}
    


 function check1(){
     
         if(Email1.value.length>0 && Name.value.length>0 && Password1.value.length>0){
             return true;
         }
         else{
             return false;
              }
 }

 function check(){
     
    if(Email2.value.length>0 && Password2.value.length>0){
        return true;
    }
    else{
        return false;
         }
}

function validate(){

for(var i=0; i<container.length;i++){
if(Email2.value.toLowerCase()==container[i].email.toLowerCase() && Password2.value.toLowerCase()==container[i].password.toLowerCase()){
localStorage.setItem("current",container[i].name);
    return true;
}
}
}




function login(){
   if(check()){
if(validate()){
    var suc =` `;
    suc +=`
    
    <h5 class="m-auto w-50 text-center text-success"><span >Success</span> </h5> `
    document.getElementById("message").innerHTML=suc;
    
    location.href="home.html";
}
else{
    var error=` `;
    error += `
    <h5   class="m-auto w-50 text-center"><span >Incorrect email or password </span> </h5>`
   document.getElementById("message").innerHTML=error;
}
   }
   else{
    var block=` `;
    block += `
    <h5  class="m-auto w-50 text-center" ><span  >All input are required </span></h5> 
   
   `
   document.getElementById("message").innerHTML=block;
   }
        
        
    }
