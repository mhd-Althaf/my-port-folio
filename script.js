function sendMail(){
    if(!validateName() || !validateEmail() || !validateSubject() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
    let parms = {
        name :document.getElementById("name").value,
        name :document.getElementById("email").value,
        name :document.getElementById("subjectMessage").value,
        name :document.getElementById("message").value,
    }
    emailjs.send("service_2pjpw48","template_h8srtld",parms).then(alert("Email sent!!"))
}


var nameError = document.getElementById('name-error')
var emailError = document.getElementById("email-error")
var subjectError = document.getElementById("subject-error")
var messageError = document.getElementById("message-error")
var submitError = document.getElementById("submit-error")

function validateName(){
    var name = document.getElementById('name').value ;

    
    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)){
        nameError.innerHTML = 'write full name';
        return false;
    }
    nameError.innerHTML = 'valid';
    return true;
}
function validateEmail(){
    var email = document.getElementById('email').value ;
 
    
    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)){
        emailError.innerHTML = 'write full email';
        return false;
    }
    emailError.innerHTML = 'valid';
    return true;
}
function validateSubject(){
    var subject  = document.getElementById('subjectMessage').value ;
    var required = 3;
    var left = required - subject.length;

    if(left>0){
        subjectError.innerHTML = left + 'more characters required';
        return false;
    }
    subjectError.innerHTML = 'valid';
    return true;
}
function validateMessage(){
    var message = document.getElementById('message').value ;
    var required = 30;
    var left = required - message.length;
    if(left>0){
        messageError.innerHTML = left + 'more characters required';
        return false;
    }
    messageError.innerHTML = 'valid';
    return true;
}

// function validateForm(){
   
// }

