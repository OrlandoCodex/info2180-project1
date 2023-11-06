
window.onload = loadPage;

function loadPage(){
    let submit = document.querySelectorAll(".btn")[1];
        
    submit.addEventListener('click', clicker);
}

function clicker(event){
    event.preventDefault();

    var emailAddress = document.getElementById("email").value;

    if(emailAddress != "" && emailAddress.includes("@") && emailAddress.includes(".")){
        document.getElementsByClassName("message")[0].innerHTML = "Thank You! Your email address " +emailAddress+ " has been added to our mailing list";
    }else{
        document.getElementsByClassName("message")[0].innerHTML = "Please enter a valid Email address"
    }
}