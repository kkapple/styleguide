$(function () {
    var pathname = window.location.pathname;

    $linkList = $('.nav__item a');

    $linkList.each(function() {
        if(pathname.indexOf($(this).attr("href")) !== -1) {
            $(this).addClass("current");
        }
    });
});
