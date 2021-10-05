if(!localStorage.getItem('contacts')){
    localStorage.setItem('contacts', JSON.stringify([]))
}


let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let form = id("form")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('submitted');

    let uname = form.elements['name'].value,
        uphone = form.elements['phone'].value,
        uemail = form.elements['email'].value,
        ucompany = form.elements['company'].value,
        umessage = form.elements['message'].value

    let contactObj = {
        name: uname,
        phone: uphone,
        email: uemail,
        company: ucompany,
        message: umessage
    }

    // console.log(contactObj)
    let contactStr = localStorage.getItem('contacts')
    let contactArr = JSON.parse(contactStr)
    contactArr.push(contactObj)
    console.log(contactArr)
    localStorage.setItem('contacts', JSON.stringify(contactArr))

    window.location.replace("../message/contactSuccess.html");

});









