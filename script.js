function formValidation(){
    let emailAddress = document.getElementById("email");
    if(emailAddress.value.trim() == ""){
        alert("The email address is not formatted correctly!");
        document.getElementById("email").style.border = "solid 2px red";
        // document.getElementsByClassName("email").innerHTML.style.display = "block";
        return false;
    }
    else{
        return true;
    }
}