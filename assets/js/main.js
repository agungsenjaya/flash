$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".header").addClass("bg-trans");
    } else {
        $(".header").removeClass("bg-trans");
    }
});
(function () {
    window.onload = function () {
      var preloader = document.querySelector('.page-loading');
      preloader.classList.remove('active');
      setTimeout(function () {
        preloader.remove();
      }, 2000);
    };
  })();