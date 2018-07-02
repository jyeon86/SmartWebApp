
/*()는 매개변수
Child("부모 > 자식") : 부모 자식관계의 요소를 선택
Descendant("ancestor descendant") : ancestor에 포함된 descendant 요소를 선택 
Next Adjacent("prev + next") : prev 요소의 sibling 관계이고 prev 바로 다음 위치한 요소를 선택
Next Siblings("prev ~ siblings") : prev 요소의 sibling 관계이며 prev 다음에 나오는 모든 요소를 선택

*/

//child 계층 예제
$("ul>li").css("color", "red");
$("#child>ul>li").css("color", "blue");

//자손 계층 예제
$("descendant ul li").css("color", "green");
//인접 계층 예제
//id가 adjacent 이고, 자손 중에 input 태그가 나온 객체 다음이 span태그이면 css를 적용.
$("#adjacent input + span").css("font-weight", "700");
//형제계층예제
//id가 siblings이고, 자손중에 div 태그가 나오면 같은 레벨 요소들의 css를 다음과 같이 적용.
$("#siblings div ~").css("color","red");