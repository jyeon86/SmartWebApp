$("#hamburger").click(function() {
  $("#sidenav").css("right", "0");
  //$("body").addClass("dark")
  $("body").css("background","rgba(0,0,0,0.4)");
  $("img").css("opacity","0.5");
  $("iframe").css("opacity","0.5");
  
});
$("#close-sidenav").click(function() {
	$("#sidenav").css("right", "-260px");
  //$("body").removeClass("dark");
  $("body").css("background","none");
  $("img").css("opacity","1");
  $("iframe").css("opacity","1");
});
$('.carousel').carousel({
  interval: 2000
});
/**$("header").click(function(){
  location.href="../main.html";
}); */
$('.back').on("click",function(){
  window.history.back()
  });
  

    var tabMenu = new Swiper('.tabMenu', {
        spaceBetween: 30,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
        hashNavigation: true
    });
    var tabContents = new Swiper('.tabContents', {
        spaceBetween: 10,
        centeredSlides: true,
    });

    tabContents.controller.control = tabMenu;
    tabMenu.controller.control = tabContents;
