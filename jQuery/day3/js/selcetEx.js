$("select").on("change",function(){
   
   // $("#input").val($(this).val());
   // $("#input").val(
      // $("select").find("option:selected")  == this로 대신함
      // .val());
   

      //input에  writable기능 +  selcect 값 불러오기 기능

      var text = $(this).val();
   
    if( text != "1"){
      $("input").val(text);
      $("input").prop("readonly",true);
    }
    else{
      $("input").val("");
      $("input").prop("readonly",false);
    }

});
