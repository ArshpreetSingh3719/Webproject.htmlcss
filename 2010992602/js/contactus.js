
function validate(){
    if(document.form1.name.value==""){
        alert("Enter your name");
        return false;
    }

    else if (document.form1.email.value==""){
        alert("Enter your email");
        return false;
    }

    else if (document.form1.mobile.value==""){
        alert("Enter your Mobile number");
        return false;
    }

    else{
        alert("Submitted succesfully");
    }
    
}