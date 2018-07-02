/* focus 필터 예제 */
$(".form-group").delegate("*", "focus blur", function(){
     var element = $(this); 
    setTimeout(function(){
        element.toggleClass("focused", element.is(":focus"));
    },0);
});
$("#submit1").click(function(){
    alert('제출완료');
    $("input").val("");
});
