$(document).ready(function () {
    $("ul.links-container > li").click(function (e) {
        $("ul.links-container > li").removeClass("active");
        $(this).addClass("active");
    });
});