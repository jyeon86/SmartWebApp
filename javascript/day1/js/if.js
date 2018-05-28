var num = 10;

if(num%2 == 0)console.log("num는 짝수입니다.");
else console.log("num는 홀수입니다.");

var id = prompt("id를 입력하세요");

if(id == "green"){
    
    var pw = prompt("pw를 입력하세요");

    if(pw == "green"){
        alert("로그인성공");

    }else alert("비밀번호 불일치");
    

}else var id = prompt("id를 잘못입력했습니다.");;