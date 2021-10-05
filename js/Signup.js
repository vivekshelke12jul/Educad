
if (!localStorage.getItem('data')) {
    let arr = []
    localStorage.setItem('data', JSON.stringify(arr));
}

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
    email = id("email"),
    password = id("password"),
    cpassword = id("cpassword"),
    form = id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
    
    e.preventDefault();

    let email = form.elements['email'].value
    let password = form.elements['password'].value

    let userInfo = {
        email: email,
        password: password
    }
    let dataArr = JSON.parse(localStorage.getItem('data'))
    dataArr.push(userInfo)

    let dataString = JSON.stringify(dataArr);
    
    localStorage.setItem('data', dataString);

    window.location.replace("../message/signupSuccess.html");
       
});
