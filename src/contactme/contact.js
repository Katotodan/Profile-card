const form = document.querySelector("form")

const fullnameError = document.querySelector(".fullname-error")
const emailError = document.querySelector(".email-error")
const subjectError = document.querySelector(".subject-error")
const messageError = document.querySelector(".message-error")
const successMsg = document.querySelector(".success-msg")
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    const fd = new FormData(form)
    const fullname = fd.get('fullname')
    const email = fd.get('email')
    const message = fd.get('message')
    const subject = fd.get('subject')
    let validForm = true

    // Check fullname
    if(!fullname){
        fullnameError.textContent = "Please enter your fullname"
        validForm = false
    }else{
        fullnameError.textContent = ""
    }
    if(!email){
        emailError.textContent = "Please enter an email address"
        validForm = false
    }else if(!emailRegex.test(email)){
        emailError.textContent = "A valid email address should be of format example@gmail.com"
        validForm = false
    }
    else{
        emailError.textContent = ""
    }
    if(!subject){
        subjectError.textContent = "Please select a subject"
        validForm = false
    }else{
        subjectError.textContent = ""
    }
    if(!message){
        messageError.textContent = "Please enter a message"
        validForm = false
    }else if(message.length < 10){
        messageError.textContent = "Message should be at least 10 characters"
        validForm = false
    }else{
        messageError.textContent = ""
    }
   
    if (!validForm) {
        successMsg.textContent = "";
        return;
    }

    // If form is valid
    successMsg.textContent = "Your message has been sent successfully!";
    form.reset();

    // Optional: clear success message after a few seconds
    setTimeout(() => (successMsg.textContent = ""), 5000);



})