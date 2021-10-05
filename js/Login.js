

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let email = id("email"),
    password = id("password"),
    form = id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
  
    e.preventDefault();

    let jemail = form.elements['email'].value
    let jpassword = form.elements['password'].value

    let inputData = {
        email: jemail,
        password: jpassword
    }
    console.log(inputData);

    let matched = false
    let dataArr = JSON.parse(localStorage.getItem('data'))
    console.log(dataArr)
    dataArr.forEach(element => {
        console.log(element)
        console.log(inputData)
        console.log('======================')
        if (JSON.stringify(element) === JSON.stringify(inputData)) {
            console.log('yess')
            matched = true
            window.location.replace("../message/loginSuccess.html");
        } else {
            console.log('no')
        }

    });
    if (!matched) {
        window.location.replace("../message/error.html");
    }

    engine(email, 0, "Email cannot be blank");
    engine(password, 1, "Password cannot be blank");

    

});

let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";

        // icons
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";

        // icons
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
};
