$(function () {
    $("h2, h6").each(function() {
        $(this).wrap('<a class="content__permalink" href="#' + $(this).attr('id') + '" />');
    })
});
