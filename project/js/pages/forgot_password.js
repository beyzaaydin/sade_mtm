// Name and Email validation Function.
function validation(){
    v
    var email = document.getElementById("forgot-email").value;
    var password = document.getElementById("forgot-password").value;
    var confirmpassword = document.getElementById("forgot-confirm-password").value;
    var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
    if( name ==='' || forgot-email ===''){
        alert("Please fill all fields...!!!!!!");
        return false;
    }
    else if(!(forgot-password).match(forgot-confirm-password){
        alert("Don't match your passwords...!!!!!!");
        return false;
    }
    else if(!(forgot-email).match(emailReg)){
        alert("Invalid Email...!!!!!!");
        return false;
    }else{
        return true;
    }
}