$(function () {
    console.log("testing");
    var pathname = window.location.pathname;

    $linkList = $('.nav__item a');
    console.log($linkList);
    console.log(pathname);

    $linkList.each(function() {
        if(pathname.indexOf($(this).attr("href")) !== -1) {
            console.log ($(this));
            $(this).addClass("current");
        }
    });
});
