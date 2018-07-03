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

$("#keyBox>div").bind("click",function(){

    if($(this).is("#keyBox>div:first()")){
        $("#apply>div").eq(0).addClass("gray");
    }

    else if($(this).is("#keyBox>div:eq(1)")){
        $("#apply>div").eq(1).addClass("borderDel");
    }

    else if($(this).is("#keyBox>div:eq(2)")){
        if(!$("#apply>div:eq(2)").hasClass("yellow")){
        $("#apply>div").eq(2).addClass("yellow");}
       
    }

    else if($(this).is("#keyBox>div:eq(3)")){
        $("#apply>div").eq(3).toggleClass("cat");
    }

});