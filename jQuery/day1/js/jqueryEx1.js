/* animated 필터예제 */
var elementCount = $(".font-red").find("*").prevObject.length;
console.log(elementCount);
$("#div").css("border", "2px solid blue");
$("").css("border", "2px dotted green");
$(".font-red").css("color", "red");

/*
필터 셀렉터(filter Selector)
:animated//애니메이션이 적용된 요소 선택
:focus//현재활성화된 요소 선택
:header// h 요소 선택
:lang()//특정 언어를 가진 요소 선택
:not()//주어진 셀렉터에 해당하지 않는 요소 선택
:root//document의 root 요소 선택(html태그)
:even//짝수요소
:odd//홀수요소
:first//첫번째요소선택
:last//마지막 요소 선택
:eq(n)//n번째 요소선택
:lt(n)//n번째 요소보다 작은 인덱스를 가진모든 요소
:gt(n)//n번째 요소보다 큰 인덱스를 가진 모든 요소
*/

// id가 run인 요소를 클릭하면 
$("#run").click(function(){
    // div 테그 요소중에서 animation이 적용된 요소들을 선택해서 
    // colored 클래스가 적용되어 있으면 해제를 하고 
    // colored 클래스가 적용되어 있지 않으면 적용한다.
    $("div:animated").toggleClass("colored");
});
function animatedIt(){
    // id가 mover인 요소에 slow 애니메이션을 적용을 하고,
    // 애니메이션이 끝나면 animatedIT 을 호출한다.
    $("#mover").slideToggle("slow",animatedIt);
}
animatedIt();


/* focus 필터 예제 */
// id가 contents인 요소의 모든 하위요소(*)중에서 focus blur 이벤트가 발생하면 함수를 실행한다.
$("#contents").delegate("*", "focus blur", function(){
    // 이벤트가 발생된 객체의 정보를 element 저장한다.
    var element = $(this); //this 는 현재 활성화된 객체를 의미
    // 함수를  0초 뒤에 실행되도록setTimeout에 등록한다
    setTimeout(function(){
        // 객체에 focused 클래스가 있으면 제거, 없으면 추가하는데 
        // 객체가 focus된 상태이면 
        element.toggleClass("focused", element.is(":focus"));
    },0);
});

// header예제
// id가 header인 요소에서 header 테그(h1,..,h6)의 css를 수정한다.
$("#header :header").css({background:"#ccc",color:"blue"});


//lang()예제
//언어가 en-us영어이면 usa클래스를 추가
$("#lang div:lang(en-us)").addClass("usa");
//언어가 en-es이면 spain클래스를 추가
$("#lang div:lang(en-es)").addClass("spain");
$("#lang div:lang(en-cn)").addClass("china");

// not 필터 예제
// input 태그중 checked 상태가 아닌 (check표시가 없는) 요소가 있는 span태그에
// 배경색을 노란색으로 적용한다.
$("input:not(:checked) + span").css("background-color","yellow");

// root 필터 예제
//  <b></b>객체 정보(태그)에 html 문자열($("root")[0].nodeName)을 넣고
//해당 태그를 아이디가 log인 요소에 붙인다.
$("<b></b>").html($(":root")[0].nodeName).appendTo("#log");