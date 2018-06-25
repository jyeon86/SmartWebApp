$("#hamburger-wrapper").click(function() {
  $("#sidenav").css("right", "0");
  $("body").addClass("dark")
  //$("body").css("background","rgba(0,0,0,0.4)");
  $("img").css("opacity","0.5");
  $("iframe").css("opacity","0.5");
  
});
$("#close-sidenav").click(function() {
	$("#sidenav").css("right", "-260px");
  $("body").removeClass("dark");
  //$("body").css("background","rgba(0,0,0,1)");
  $("img").css("opacity","0.5");
  $("iframe").css("opacity","0.5");
});
$('.carousel').carousel({
  interval: 2000
});
