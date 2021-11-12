$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".header").addClass("bg-trans");
    } else {
        $(".header").removeClass("bg-trans");
    }
});