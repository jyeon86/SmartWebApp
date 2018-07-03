var title = $("em").attr("title");//가져와서 title의 변수를붙임
$("#test").text("Attr : " + title );//idtext를 찾아 문자를 추가출력. Attr:title


//아이디p에 number라는 프로퍼티(맴버변수)를 생성하고1234를 저장
$("#p").prop("number",1234);
//위에서만든 프로퍼티number를 div1에 텍스트로출력
$("#div1").text("Property : " + $("#p").prop("number"));
$("#p").removeProp("number");//제거

//제거된 프로퍼티 확인: undefined
$("#div2").text("Property : " + $("#p").prop("number"));

//prop("프로퍼티") : 해당 프로퍼티의 값을 가져옴
//prop("프로퍼티", value) :해당 프로퍼티가 있으면 기존값을 수정,
//없으면 생성 후 value로 초기화

//위에 궂이 왜p아이디를 만들어서 거기에 프로퍼티를 생성하는건지 모르겠음
//그냥 붙여넣기 하면안됌?
//>>호출을 테스트 하기 위한 예제라서



// $("#val>#btn1").bind("click",function(){
// });//많을때
$("#btn1").click(function(){
  // input태그에 있는 값을 가져와서 testA를 추가하여 text에 저장
  var text = "TEST A " + $("INPUT").val();
  // text에 저장된 문자열 input 태그에 출력
  $("input").val(text);
});

$("#btn2").click(function(){
  //input태그의 값을 비워라
  $("input").val("");
});//특정