$(document).ready(function () {
    $('.carousel').carousel();
    let year = new Date().getFullYear();
    $('span.copyright-year').replaceWith(year);
});
