const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
<ul class="links-container">
    <li class="link-item"><a href="#" class="link">Home</a></li>
    <li class="link-item"><a href="#" class="link">Courses</a></li>
    <li class="link-item"><a href="#" class="link">Contact</a></li>
    <li class="link-item"><a href="#" class="link">About US</a></li>
    <li class="link-item"> <i id="login" class="fa fa-user-circle" style="font-size:25px"></i></li>
</ul>
    `;
}

createNav();