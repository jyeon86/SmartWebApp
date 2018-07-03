/*
addClass("클래스명") :클래스를 추가
removeClass("클래스명") :제거
toggleClass("클래스명") :있으면 제거, 없으면 추가
hasClass("클래스명") :클래스가 있는지 없는지 true, false 값으로 리턴

 */

//1box:클릭시 css에서 만들어 놓은 클래스를 추가하여 배경색을 변경한다.
//2box:클릭시 테두리를 적용하고있는 클래스를 제거한다.
//3box:클릭시 내가 지정한 class가 잇으면 무반응, 없으면 해당 클래스를 추가
//4box:클릭시 한번 누르면 클래스 제거, 한번 누르면 생성. 토글



$(".base").first().click(function(){
    $(".base").eq(0).addClass("bg-yellow");
});
$(".base").eq(1).click(function(){
    $(".base").eq(1).removeClass("border");
});
$(".base").eq(2).click(function(){
    if(!$(".base").eq(2).hasClass("bg-yellow")){
    $(".base").eq(2).addClass("bg-yellow");
    }
});
$(".base").last().click(function(){
    $(".base").last().toggleClass("bg-yellow");
});