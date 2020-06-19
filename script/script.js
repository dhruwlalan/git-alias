
$(".main-navbar a").on("click", function(e) {
    var a = $(this);
    $("html, body").stop().animate({
        scrollTop: $(a.attr("href")).offset().top - 0
    }, 1500, "easeInOutExpo"), e.preventDefault()
}),
$(".back-top").click(function() {
    return $("html, body").animate({
        scrollTop: 0
    }, 1e3),
    !1
}),
$(window).on("scroll", function() {
    $(this).scrollTop() > 300 ? $(".back-top").fadeIn() : $(".back-top").fadeOut()
})