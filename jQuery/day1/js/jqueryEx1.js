
var elementCount = $(".font-red").find("*").prevObject.length;
console.log(elementCount);
$("#div").css("border", "2px solid blue");
$("span").css("border", "2px dotted green");
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
