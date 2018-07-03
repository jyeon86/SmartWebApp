//id가 filter이고 자식중에서 div인 요소를 선택
$(".filter>div").eq(2).addClass("blue");
$(".filter>div").first().css("background","green");
$(".filter>div").slice(3,5).css("font-weight","bold");
//3,4가 변화(마지막거는 설정에 포함이 안됨)

$(".filter>div").not(":eq(2)").css("border","dotted black");
//다른 명령문에 들어갈때는 ':'해줌 :eq()

$(".filter>div").bind("click",function(){
    if($(this).is(".filter>div:eq(2)")){
        //선택된 요소의 글자색을 빨간색으로 수정
        $(this).css("color", "red");
    }
});

$(".filter>div").filter(":even").css("padding","15px 0");
$(".filter>div").has("span").css("color","green");
