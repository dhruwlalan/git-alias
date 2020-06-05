
$(".main-navbar a , footer__page-top a").on("click", function(e) {
    var a = $(this);
    $("html, body").stop().animate({
        scrollTop: $(a.attr("href")).offset().top - 0
    }, 1500, "easeInOutExpo"), e.preventDefault()
}),
$(".footer__page-top--button").click(function() {
    return $("html, body").animate({
        scrollTop: 0
    }, 1e3),
    !1
})