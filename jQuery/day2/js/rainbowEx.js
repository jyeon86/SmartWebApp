//id가 filter이고 자식중에서 div인 요소를 선택
$(".filter>div").eq(2).addClass("blue");
$(".filter>div").first().css("background","green");
$(".filter>div").last().css("background","green");
$(".filter>div").slice(3,5).css("font-weight","bold");
//3,4가 변화(마지막거는 설정에 포함이 안됨)
/*
$(".rainbow>div").eq(0).css("background","red");
$(".rainbow>div").eq(1).css("background","orange");
$(".rainbow>div").eq(2).css("background","yellow");
$(".rainbow>div").eq(3).css("background","green");
$(".rainbow>div").eq(4).css("background","blue");
$(".rainbow>div").eq(5).css("background","navy");
$(".rainbow>div").eq(6).css("background","purple");
*/
$(".rainbow>div").first().addClass("red");
$(".rainbow>div").eq(1).addClass("orange");
$(".rainbow>div").eq(2).addClass("yellow");
$(".rainbow>div").eq(3).addClass("green");
$(".rainbow>div").eq(4).addClass("blue");
$(".rainbow>div").eq(5).addClass("navy");
$(".rainbow>div").last().addClass("purple");

$(".rainbow>div").bind("click",function(){
    //red click 클릭하면 빨간색 제외 글자색 하얗게
    if($(this).is(".rainbow>div:first()")){
        $(".rainbow>div").not(":eq(0)").css("color", "white");
    }
    //purple click 클릭하면 전체 테두리 닷
    else if($(this).is(".rainbow>div:last()")){
        $(".rainbow>div").css("border", "black dotted 2px");
    }
    //orange click 클릭하면 주황색 제외 볼드
    else if($(this).is(".rainbow>div:eq(1)")){
        $(".rainbow>div").not(":eq(1)").css("font-weight", "800");
    }
    //orange click 클릭하면 남색 앞까지 테두리굵게
    else if($(this).is(".rainbow>div:eq(5)")){
        $(".rainbow>div").slice(0,5).css("border", "4px solid black");
    }
});





