let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
function validate()
{
         var regexpemail=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
         //var regexppwd=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
         var regexppwd=/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/
         //var regexppwd=/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})")$/
         if((regexpemail.test(email.value))&&(pwd.value!=""))
         {
             error1.innerHTML=" email and password is valid";
             error1.style.color="green";
             return true;
        }
         else 
         {
             error1.innerHTML=" email or password is invalid";
             error1.style.color="red";
             return false;
      
         }
 
}
var phn=document.getElementById("phn");
var pwdd=document.getElementById("pwdd");//
function validatee()
{
    var regexpphn=/^([0-9]{3})([\. -]?)([0-9]{3})([\. -]?)([0-9]{4})([\. -]?)$/
    //var rgexppwdd=/^([0-9]{3})([\. -]?)([0-9]{3})([\. -]?)([0-9]{4})([\. -]?)$/
    if(regexpphn.test(phn.value))
    {
        error2.innerHTML="phonenumber,email and password is valid";
        error2.style.color="green";
        return true;
    }
    else
    {
        error2.innerHTML="phonenumber or email or password is not valid";
        error2.style.color="red";
        return false;
    }
}
    